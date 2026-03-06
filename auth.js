// auth.js — Control de acceso por rol y área
// MIAA - SSCA 2026
(function () {

  const usuario = sessionStorage.getItem("miaa_usuario");
  const rol     = sessionStorage.getItem("miaa_rol");
  const LOGIN   = "https://lesliesoriano.github.io/procesos/indexmenu.html";

  // ── 1. Si no hay sesión → regresar al login ──────────────────────────
  if (!usuario || !rol) {
    window.location.href = LOGIN;
    return;
  }

  // ── 2. Detectar en qué página estamos ahorita ────────────────────────
  const rutaActual = window.location.pathname.toLowerCase();

  // ── 3. Mapa completo de páginas y roles permitidos ───────────────────
  //    Formato: "fragmento-de-url": ["rol1", "rol2", ...]
  const permisos = {

    // ── Atención al público ──────────────────────────────────────────
    // /atencionpublico/tramites/tramites_2026.html
    // /atencionpublico/parcialidades/index.html
    // /atencionpublico/parcialidades/calculo/index.html
    // /atencionpublico/tramites/listados.html
    "atencionpublico":            ["admin", "atencion"],

    // ── Área técnica ─────────────────────────────────────────────────
    // /areatecnica/procesorden.html
    // /areatecnica/pipas.html
    "areatecnica":                ["admin", "areatecnica"],

    // ── Cobranza ─────────────────────────────────────────────────────
    // /cobranza/conceptosduplicados.html
    // /cobranza/conceptosduplicados2archivos.html
    "cobranza":                   ["admin", "cobranza", "atencion"],

    // ── Recaudación / Financiero ──────────────────────────────────────
    // /recfinancier/iva.html
    // /recfinancier/calculadordv.html
    // /recfinancier/conciliacion/index.html
    "recfinancier":               ["admin", "recfinancier"],

    // ── Extras ───────────────────────────────────────────────────────
    // /extras/separadorexcel.html
    "extras":                     ["admin","atencion","cobranza"],

    // ── USCA / Saneamiento ───────────────────────────────────────────
    // /usca/diagrama.html
    "usca":                       ["admin", "saneamiento"],

    // ── Miaa ─────────────────────────────────────────────────────────
    "miaa":                       ["admin", "saneamiento"],

    // ── Cajas ────────────────────────────────────────────────────────
    "cajas":                      ["admin", "cajas"],

  };

  // ── 4. Buscar qué área coincide con la ruta actual ───────────────────
  let areaDetectada  = null;
  let rolesPermitidos = [];

  for (const area in permisos) {
    if (rutaActual.includes(area)) {
      areaDetectada   = area;
      rolesPermitidos = permisos[area];
      break;
    }
  }

  // ── 5. Verificar permiso ─────────────────────────────────────────────
  if (areaDetectada && !rolesPermitidos.includes(rol)) {
    alert(`No tienes acceso a esta sección.\nTu rol: ${rol}`);
    window.location.href = LOGIN;
    return;
  }

  // ── 6. Acceso permitido → exponer sesión para uso en cada página ─────
  window.sesion = { usuario, rol };

  // Opcional: mostrar usuario activo si la página tiene un elemento con
  // id="usuario-activo" (como en indexmenu.html)
  document.addEventListener("DOMContentLoaded", function () {
    const span = document.getElementById("usuario-activo");
    if (span) span.textContent = `${usuario} (${rol})`;
  });

})();