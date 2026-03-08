// auth.js — Control de acceso por rol y área
// MIAA - SSCA 2026

// ── Modal de acceso denegado ──────────────────────────────────────────────
function mostrarAccesoDenegado(callback) {

  // Crear estilos si no existen aún
  if (!document.getElementById("miaa-modal-styles")) {
    const style = document.createElement("style");
    style.id = "miaa-modal-styles";
    style.textContent = `
      #miaa-modal-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(4px);
        z-index: 99999;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: miaa-fadeIn 0.2s ease;
      }
      @keyframes miaa-fadeIn {
        from { opacity: 0; }
        to   { opacity: 1; }
      }
      #miaa-modal-box {
        background: white;
        border-radius: 16px;
        padding: 2.5rem 2rem;
        width: 340px;
        text-align: center;
        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        animation: miaa-slideUp 0.25s ease;
      }
      @keyframes miaa-slideUp {
        from { transform: translateY(20px); opacity: 0; }
        to   { transform: translateY(0);    opacity: 1; }
      }
      #miaa-modal-box .miaa-icono {
        font-size: 3rem;
        margin-bottom: 1rem;
      }
      #miaa-modal-box h3 {
        color: #1a2744;
        font-size: 1.2rem;
        font-family: 'Segoe UI', sans-serif;
        margin-bottom: 0.6rem;
      }
      #miaa-modal-box p {
        color: #666;
        font-size: 0.9rem;
        font-family: 'Segoe UI', sans-serif;
        margin-bottom: 1.8rem;
        line-height: 1.5;
      }
      #miaa-modal-btn {
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        border: none;
        border-radius: 8px;
        padding: 0.7rem 2rem;
        font-size: 0.95rem;
        font-family: 'Segoe UI', sans-serif;
        cursor: pointer;
        transition: opacity 0.2s;
      }
      #miaa-modal-btn:hover { opacity: 0.85; }
    `;
    document.head.appendChild(style);
  }

  // Crear overlay
  const overlay = document.createElement("div");
  overlay.id = "miaa-modal-overlay";
  overlay.innerHTML = `
    <div id="miaa-modal-box">
      <div class="miaa-icono">🔒</div>
      <h3>Acceso restringido</h3>
      <p>No tienes permiso para acceder a esta sección.<br>Serás redirigido al menú principal.</p>
      <button id="miaa-modal-btn" onclick="document.getElementById('miaa-modal-overlay').remove(); (${callback})();">
        Entendido
      </button>
    </div>
  `;
  document.body.appendChild(overlay);
}

// ── Lógica principal de auth ──────────────────────────────────────────────
(function () {

  const usuario = sessionStorage.getItem("miaa_usuario");
  const rol     = sessionStorage.getItem("miaa_rol");
  const LOGIN   = "https://lesliesoriano.github.io/procesos/indexmenu.html";

  // 1. Sin sesión → regresar al login
  if (!usuario || !rol) {
    window.location.href = LOGIN;
    return;
  }

  // 2. Ruta actual
  const rutaActual = window.location.pathname.toLowerCase();

  // 3. Permisos por área
  const permisos = {
    "atencionpublico": ["admin", "atencion"],
    "areatecnica":     ["admin", "areatecnica"],
    "cobranza":        ["admin", "cobranza"],
    "recfinancier":    ["admin", "recfinancier"],
    "extras":          ["admin"],
    "usca":            ["admin", "saneamiento"],
    "miaa":            ["admin", "saneamiento"],
    "cajas":           ["admin", "cajas"],
  };

  // 4. Detectar área
  let areaDetectada   = null;
  let rolesPermitidos = [];

  for (const area in permisos) {
    if (rutaActual.includes(area)) {
      areaDetectada   = area;
      rolesPermitidos = permisos[area];
      break;
    }
  }

  // 5. Verificar permiso
  if (areaDetectada && !rolesPermitidos.includes(rol)) {
    // Esperar a que el DOM esté listo para mostrar el modal
    document.addEventListener("DOMContentLoaded", function () {
      mostrarAccesoDenegado(function() {
        window.location.href = LOGIN;
      });
    });
    return;
  }

  // 6. Acceso permitido
  window.sesion = { usuario, rol };

  document.addEventListener("DOMContentLoaded", function () {
    const span = document.getElementById("usuario-activo");
    if (span) span.textContent = `${usuario}`;
  });

})();
