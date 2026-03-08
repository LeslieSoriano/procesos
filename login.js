// login.js — Autenticación MIAA contra Google Apps Script
const API_URL = "https://script.google.com/macros/s/AKfycbzAD3rNYkjEhJ2HzhFI0lmz2pjUENsKlW_QgwR-rsI_l_EF-2KNnw9_rSCsiDmjxIi0/exec";

// ── Registrar actividad en Google Sheets (fire & forget) ─────
function registrarActividad(usuario, accion, detalle) {
  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify({ accion: "registrarActividad", usuario, accion, detalle })
  }).catch(() => {}); // silencioso — el log nunca debe bloquear la UI
}

// ── Bloquear navegación atrás/adelante ────────────────────────────────────
history.pushState(null, null, location.href);

window.addEventListener("popstate", function () {
  history.pushState(null, null, location.href);

  const usuario = sessionStorage.getItem("miaa_usuario");
  const rol     = sessionStorage.getItem("miaa_rol");

  if (!usuario || !rol) {
    location.replace(location.href);
  } else {
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
    mostrarError(errorMsg, "Ingresa usuario y contraseña.");
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
      sessionStorage.clear();
      sessionStorage.setItem("miaa_usuario", username);
      sessionStorage.setItem("miaa_rol",     datos.rol);
      registrarActividad(username, "LOGIN", "Inicio de sesión exitoso");
      mostrarApp(username, datos.rol);
    } else {
      mostrarError(errorMsg, "Usuario o contraseña incorrectos.");
    }

  } catch (error) {
    mostrarError(errorMsg, "Sin conexión. Intenta de nuevo.");
  }

  btnEntrar.disabled    = false;
  btnEntrar.textContent = "Entrar";
}

// ── Mostrar error en el formulario con animación ──────────────────────────
function mostrarError(elemento, mensaje) {
  elemento.textContent   = mensaje;
  elemento.style.display = "block";
  // Animación de shake
  elemento.style.animation = "none";
  elemento.offsetHeight; // reflow para reiniciar animación
  elemento.style.animation = "miaa-shake 0.3s ease";
}

// ── Agregar animación shake al head si no existe ──────────────────────────
(function agregarAnimaciones() {
  if (!document.getElementById("miaa-login-styles")) {
    const style = document.createElement("style");
    style.id = "miaa-login-styles";
    style.textContent = `
      @keyframes miaa-shake {
        0%, 100% { transform: translateX(0); }
        25%       { transform: translateX(-6px); }
        75%       { transform: translateX(6px); }
      }
    `;
    document.head.appendChild(style);
  }
})();

// ── Mostrar la app y aplicar restricciones por rol ────────────────────────
function mostrarApp(usuario, rol) {
  document.getElementById("pantalla-login").style.display = "none";
  document.getElementById("pantalla-app").style.display   = "block";

  // Solo mostrar nombre, sin el rol
  const span = document.getElementById("usuario-activo");
  if (span) span.textContent = usuario;

  setTimeout(function () {
    if (typeof aplicarPermisosPorRol === "function") {
      aplicarPermisosPorRol(rol);
    }
  }, 0);
}

// ── Cerrar sesión ─────────────────────────────────────────────────────────
function cerrarSesion() {
  const usuario = sessionStorage.getItem("miaa_usuario") || "desconocido";
  registrarActividad(usuario, "LOGOUT", "Cerró sesión");
  sessionStorage.clear();
  location.replace(location.href);
}

// ── Login con tecla Enter ─────────────────────────────────────────────────
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const loginVisible = document.getElementById("pantalla-login").style.display !== "none";
    if (loginVisible) iniciarSesion();
  }
});