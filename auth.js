(function() {
  const usuario = sessionStorage.getItem("miaa_usuario");
  const rol     = sessionStorage.getItem("miaa_rol");

  if (!usuario || !rol) {
    window.location.href = "https://lesliesoriano.github.io/procesos/indexmenu.html";
    window.location.href = "https://lesliesoriano.github.io/procesos/atencionpublico/tramites/tramites_2026.html";
    window.location.href = "https://lesliesoriano.github.io/procesos/atencionpublico/parcialidades/index.html";
    window.location.href = "https://lesliesoriano.github.io/procesos/atencionpublico/parcialidades/calculo/index.html";
    window.location.href = "https://lesliesoriano.github.io/procesos/atencionpublico/tramites/listados.html";
    window.location.href = "https://lesliesoriano.github.io/procesos/areatecnica/procesorden.html";
    window.location.href = "https://lesliesoriano.github.io/procesos/areatecnica/pipas.html";
    window.location.href = "https://lesliesoriano.github.io/procesos/cobranza/conceptosduplicados.html";
    window.location.href = "https://lesliesoriano.github.io/procesos/cobranza/conceptosduplicados2archivos.html";
    window.location.href = "https://lesliesoriano.github.io/procesos/recfinancier/iva.html";
    window.location.href = "https://lesliesoriano.github.io/procesos/recfinancier/calculadordv.html";
    window.location.href = "https://lesliesoriano.github.io/procesos/recfinancier/conciliacion/index.html";
    window.location.href = "https://lesliesoriano.github.io/procesos/extras/separadorexcel.html";
    window.location.href = "https://lesliesoriano.github.io/procesos/USCA/diagrama.html";
    window.location.href = "https://lesliesoriano.github.io/procesos/recfinancier/calculadordv.html";
    return;
  }

  // Roles permitidos en esta página específica
  const rolesPermitidos = ["admin", "supervisor"];

  if (!rolesPermitidos.includes(rol)) {
    // Si el rol no está permitido → regresar al menú
    alert("No tienes permiso para ver esta página.");
    window.location.href = "https://lesliesoriano.github.io/procesos/indexmenu.html";
    return;
  }

  window.sesion = { usuario, rol };
})();