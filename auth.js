(function() {
  const usuario = sessionStorage.getItem("miaa_usuario");
  const rol     = sessionStorage.getItem("miaa_rol");

  if (!usuario || !rol) {
    window.location.href = "https://lesliesoriano.github.io/procesos/indexmenu.html";
    window.location.href = "https://lesliesoriano.github.io/procesos/atencionpublico/tramites/tramites_2026.html";
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