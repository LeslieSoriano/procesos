// ============================================================
// conceptos.js - Catálogo de conceptos disponibles
// ============================================================

const CONCEPTOS_DISPONIBLES = [
            { clave: 198, nombre: 'Cuadro medidor de 1/2" a 1"', importe: 1590 },
            { clave: 199, nombre: 'Cuadro medidor 1-1/2"', importe: 3240 },
            { clave: 200, nombre: 'Cuadro medidor 2"', importe: 13320 },
            { clave: 177, nombre: 'Cancelación y reconexión toma registro', importe: 514 },
            { clave: 7, nombre: 'Suministro y colocación caja de registro', importe: 3620 },
            { clave: 203, nombre: 'Medidor lectura remota (1/2")', importe: 2200 },
            { clave: 204, nombre: 'Medidor lectura remota (1")', importe: 3100 },
            { clave: 205, nombre: 'Medidor lectura remota (1-1/2")', importe: 6600 },
            { clave: 206, nombre: 'Medidor lectura remota (2")', importe: 26400 },
            { clave: 207, nombre: 'Medidor lectura remota (3")', importe: 32500 },
            { clave: 208, nombre: 'Medidor lectura remota (4")', importe: 53000 },
            { clave: 163, nombre: 'Venta caja polietileno banqueta', importe: 835 },
            { clave: 209, nombre: 'Suspensión voluntaria temporal', importe: 865 },
            { clave: 210, nombre: 'Cancelación definitiva toma', importe: 3460 },
            { clave: 66, nombre: 'Venta agua tratada en garza', importe: 8 },
            { clave: 212, nombre: 'Reconexión agua cuadro/registro', importe: 560 },
            { clave: 67, nombre: 'Descarga desechos domésticos', importe: 35 },
            { clave: 230, nombre: 'Reubicación cuadro y/o medidor', importe: 840 },
            { clave: 215, nombre: 'Tierra nuevo servicio agua 1/2"-1"', importe: 7150 },
            { clave: 106, nombre: 'Metro adicional agua potable', importe: 1438 },
            { clave: 216, nombre: 'Rodamiento nuevo servicio agua 1/2"-1"', importe: 10180 },
            { clave: 217, nombre: 'Rodamiento conexión albañal', importe: 12620 },
            { clave: 218, nombre: 'Tierra conexión albañal', importe: 9550 },
            { clave: 219, nombre: 'Rodamiento albañal y nuevo servicio agua', importe: 12970 },
            { clave: 220, nombre: 'Tierra albañal y nuevo servicio agua', importe: 9770 },
            { clave: 12, nombre: 'Construcción registro sanitario', importe: 6340 },
            { clave: 180, nombre: 'Limpieza fosa séptica comercio/industria', importe: 1980 },
            { clave: 189, nombre: 'Trámite inicial factibilidad', importe: 2850 },
            { clave: 69, nombre: 'Suministro agua a pipas', importe: 77 },
            { clave: 197, nombre: 'Reconexión toma de agua', importe: 2440 },
            { clave: 195, nombre: 'Venta bases licitación', importe: 1090 },
            { clave: 68, nombre: 'Tierra metro adicional albañal', importe: 1340 },
            { clave: 70, nombre: 'Rodamiento metro adicional albañal', importe: 1840 },
            { clave: 108, nombre: 'Tierra metro adicional agua potable', importe: 980 },
            { clave: 110, nombre: 'Rodamiento metro adicional agua potable', importe: 1510 },
            { clave: 112, nombre: 'Reconexión toma cuadro/registro', importe: 560 },
            { clave: 113, nombre: 'Suspensión voluntaria temporal 2026', importe: 340 },
            { clave: 114, nombre: 'Reconexión voluntaria temporal', importe: 560 },
            { clave: 115, nombre: 'Construcción caja de válvula', importe: 34450 },
            { clave: 149, nombre: 'Reubicación medidor a caja registro', importe: 440 },
            { clave: 15, nombre: 'Suministro de medidor', importe: 803 },
            { clave: 9, nombre: 'Suministro e instalación medidor', importe: 803 },
            { clave: 10, nombre: 'Cuadro de medidor (columpio)', importe: 1396 },
            { clave: 214, nombre: 'Reconexión agua banqueta', importe: 1200 },
            { clave: 224, nombre: 'Impresión estado de cuenta', importe: 4 },
            { clave: 223, nombre: 'Copia fotostática B/N', importe: 1 },
            { clave: 146, nombre: 'Limpieza fosa séptica casa habitación', importe: 1310 },
            { clave: 186, nombre: 'Derechos conexión red sanitaria', importe: 0 },
            { clave: 187, nombre: 'Contribución dotación agua', importe: 0 },
            { clave: 171, nombre: 'Derechos conexión red agua', importe: 0 },
        ];

        // Buscar importe de concepto por clave
        function buscarImporte(clave) {
            const c = CONCEPTOS_DISPONIBLES.find(x => x.clave === clave);
            return c ? c.importe : 0;
        }
        function buscarNombreConcepto(clave) {
            const c = CONCEPTOS_DISPONIBLES.find(x => x.clave === clave);
            return c ? c.nombre : 'Concepto ' + clave;
        }