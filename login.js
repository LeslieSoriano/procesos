// login.js — Autenticación MIAA contra Google Apps Script
const API_URL = "https://script.google.com/macros/s/AKfycbzAD3rNYkjEhJ2HzhFI0lmz2pjUENsKlW_QgwR-rsI_l_EF-2KNnw9_rSCsiDmjxIi0/exec";

// ── Bloquear navegación atrás/adelante ────────────────────────────────────
// pushState mete la página actual al historial para interceptar "Atrás"
history.pushState(null, null, location.href);

window.addEventListener("popstate", function () {
  // El usuario intentó ir atrás o adelante →
  // 1. Cancelar el movimiento regresando al estado actual
  history.pushState(null, null, location.href);

  // 2. Verificar si hay sesión válida
  const usuario = sessionStorage.getItem("miaa_usuario");
  const rol     = sessionStorage.getItem("miaa_rol");

  if (!usuario || !rol) {
    // Sin sesión → recargar limpio (muestra el login)
    location.replace(location.href);
  } else {
    // Hay sesión → aplicar permisos por si acaso
    if (typeof aplicarPermisosPorRol === "function") {
      aplicarPermisosPorRol(rol);
    }
  }
});

// ── Al cargar la página: revisar si ya hay sesión activa ──────────────────
window.addEventListener("DOMContentLoaded", function () {
  const usuario = sessionStorage.getItem("miaa_usuario");
  const rol     = sessionStorage.getItem("miaa_rol");

  if (usuario && rol) {
    mostrarApp(usuario, rol);
  } else {
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
      // Limpiar sesión anterior antes de guardar la nueva
      sessionStorage.clear();
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

  const span = document.getElementById("usuario-activo");
  if (span) span.textContent = `${usuario} (${rol})`;

  setTimeout(function () {
    if (typeof aplicarPermisosPorRol === "function") {
      aplicarPermisosPorRol(rol);
    }
  }, 0);
}

// ── Cerrar sesión ─────────────────────────────────────────────────────────
function cerrarSesion() {
  sessionStorage.clear();
  // replace() en lugar de reload() para NO dejar entrada en el historial
  location.replace(location.href);
}

// ── Login con tecla Enter ─────────────────────────────────────────────────
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const loginVisible = document.getElementById("pantalla-login").style.display !== "none";
    if (loginVisible) iniciarSesion();
  }
});
