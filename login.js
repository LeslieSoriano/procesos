// login.js — Autenticación MIAA contra Google Apps Script
const API_URL = "https://script.google.com/macros/s/AKfycbzAD3rNYkjEhJ2HzhFI0lmz2pjUENsKlW_QgwR-rsI_l_EF-2KNnw9_rSCsiDmjxIi0/exec";

// ── Al cargar la página: revisar si ya hay sesión activa ──────────────────
window.addEventListener("DOMContentLoaded", function () {
  const usuario = sessionStorage.getItem("miaa_usuario");
  const rol     = sessionStorage.getItem("miaa_rol");

  if (usuario && rol) {
    // Ya está logueado → mostrar app directamente
    mostrarApp(usuario, rol);
  } else {
    // No hay sesión → mostrar pantalla de login
    document.getElementById("pantalla-login").style.display = "flex";
    document.getElementById("pantalla-app").style.display   = "none";
  }
});

// ── Función que se llama al dar click en "Entrar" ─────────────────────────
async function iniciarSesion() {
  const username  = document.getElementById("login-usuario").value.trim();
  const password  = document.getElementById("login-pass").value.trim();
  const btnEntrar = document.getElementById("btn-entrar");
  const errorMsg  = document.getElementById("login-error");

  if (!username || !password) {
    errorMsg.textContent   = "Ingresa usuario y contraseña.";
    errorMsg.style.display = "block";
    return;
  }

  // Deshabilitar botón mientras espera respuesta
  btnEntrar.disabled    = true;
  btnEntrar.textContent = "Verificando...";
  errorMsg.style.display = "none";

  try {
    const respuesta = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({ username, password })
    });

    const datos = await respuesta.json();

    if (datos.success) {
      // Guardar sesión
      sessionStorage.setItem("miaa_usuario", username);
      sessionStorage.setItem("miaa_rol",     datos.rol);
      mostrarApp(username, datos.rol);
    } else {
      errorMsg.textContent   = "Usuario o contraseña incorrectos.";
      errorMsg.style.display = "block";
    }

  } catch (error) {
    errorMsg.textContent   = "Error de conexión. Intenta de nuevo.";
    errorMsg.style.display = "block";
  }

  btnEntrar.disabled    = false;
  btnEntrar.textContent = "Entrar";
}

// ── Mostrar la app y aplicar restricciones por rol ────────────────────────
function mostrarApp(usuario, rol) {
  document.getElementById("pantalla-login").style.display = "none";
  document.getElementById("pantalla-app").style.display   = "block";

  // Mostrar nombre en barra superior
  const span = document.getElementById("usuario-activo");
  if (span) span.textContent = `${usuario} (${rol})`;

  // Ocultar módulos que el rol no puede ver
  // aplicarPermisosPorRol está definida en indexmenu.html
  if (typeof aplicarPermisosPorRol === "function") {
    aplicarPermisosPorRol(rol);
  }
}

// ── Cerrar sesión ─────────────────────────────────────────────────────────
function cerrarSesion() {
  sessionStorage.removeItem("miaa_usuario");
  sessionStorage.removeItem("miaa_rol");
  location.reload();
}

// ── Login con tecla Enter ─────────────────────────────────────────────────
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const loginVisible = document.getElementById("pantalla-login").style.display !== "none";
    if (loginVisible) iniciarSesion();
  }
});