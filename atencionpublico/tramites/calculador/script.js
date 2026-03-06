// Base de datos de paquetes de trámites
const paquetesTramites = [
    {
        id: 1,
        nombre: "Nuevo Servicio Agua Potable (Tierra)",
        descripcion: "Instalación completa de nuevo servicio en tierra",
        presupuesto_base: 7150,
        conceptos: [
            {
                clave: 215,
                identificador: "NSAT",
                nombre: "Tierra nuevo servicio de agua 1/2\" a 1\"",
                descripcion: "Instalación de 0.0 a 5.0 metros del punto de conexión (No incluye medidor)",
                importe: 7150,
                obligatorio: true,
                cantidad_default: 1,
                permite_cantidad: false
            },
            {
                clave: 108,
                identificador: "TMAAP",
                nombre: "Tierra metro adicional agua potable",
                descripcion: "Por metro adicional de toma de agua potable en tierra",
                importe: 980,
                obligatorio: false,
                cantidad_default: 0,
                permite_cantidad: true
            },
            {
                clave: 203,
                identificador: "MLR1/2",
                nombre: "Medidor de lectura remota (1/2\")",
                descripcion: "Suministro e instalación de medidor de lectura remota",
                importe: 2200,
                obligatorio: false,
                cantidad_default: 1,
                permite_cantidad: false
            },
            {
                clave: 15,
                identificador: "SM",
                nombre: "Suministro de medidor (1/2\")",
                descripcion: "Suministro e instalación de medidor estándar",
                importe: 803,
                obligatorio: false,
                cantidad_default: 1,
                permite_cantidad: false
            },
            {
                clave: 7,
                identificador: "SCB",
                nombre: "Suministro y colocación de caja de registro",
                descripcion: "Caja de registro para alojo de medidor en banqueta (incluye obra civil)",
                importe: 3620,
                obligatorio: false,
                cantidad_default: 1,
                permite_cantidad: false
            }
        ]
    },
    {
        id: 2,
        nombre: "Nuevo Servicio Agua Potable (Rodamiento)",
        descripcion: "Instalación completa en carpeta de rodamiento",
        presupuesto_base: 10180,
        conceptos: [
            {
                clave: 216,
                identificador: "NSACR",
                nombre: "Rodamiento nuevo servicio de agua 1/2\" a 1\"",
                descripcion: "Instalación de 0.0 a 5.0 metros en carpeta de rodamiento (No incluye medidor)",
                importe: 10180,
                obligatorio: true,
                cantidad_default: 1,
                permite_cantidad: false
            },
            {
                clave: 110,
                identificador: "RMAAP",
                nombre: "Rodamiento metro adicional agua potable",
                descripcion: "Por metro adicional en carpeta de rodamiento",
                importe: 1510,
                obligatorio: false,
                cantidad_default: 0,
                permite_cantidad: true
            },
            {
                clave: 203,
                identificador: "MLR1/2",
                nombre: "Medidor de lectura remota (1/2\")",
                descripcion: "Suministro e instalación de medidor de lectura remota",
                importe: 2200,
                obligatorio: false,
                cantidad_default: 1,
                permite_cantidad: false
            },
            {
                clave: 15,
                identificador: "SM",
                nombre: "Suministro de medidor (1/2\")",
                descripcion: "Suministro e instalación de medidor estándar",
                importe: 803,
                obligatorio: false,
                cantidad_default: 1,
                permite_cantidad: false
            },
            {
                clave: 7,
                identificador: "SCB",
                nombre: "Suministro y colocación de caja de registro",
                descripcion: "Caja de registro para alojo de medidor en banqueta",
                importe: 3620,
                obligatorio: false,
                cantidad_default: 1,
                permite_cantidad: false
            }
        ]
    },
    {
        id: 3,
        nombre: "Conexión de Albañal (Tierra)",
        descripcion: "Instalación de nuevo servicio de alcantarillado en tierra",
        presupuesto_base: 9550,
        conceptos: [
            {
                clave: 218,
                identificador: "CAT",
                nombre: "Tierra Conexión de albañal",
                descripcion: "Tubería de 6\" de PVC de 0.0 a 5.0 metros (incluye obra civil en tierra)",
                importe: 9550,
                obligatorio: true,
                cantidad_default: 1,
                permite_cantidad: false
            },
            {
                clave: 68,
                identificador: "TMAD",
                nombre: "Tierra metro adicional albañal",
                descripcion: "Por metro adicional de descarga en tierra",
                importe: 1340,
                obligatorio: false,
                cantidad_default: 0,
                permite_cantidad: true
            },
            {
                clave: 12,
                identificador: "CDRS",
                nombre: "Construcción registro sanitario",
                descripcion: "Construcción de registro sanitario de 40 cm x 60 cm",
                importe: 6340,
                obligatorio: false,
                cantidad_default: 1,
                permite_cantidad: false
            }
        ]
    },
    {
        id: 4,
        nombre: "Conexión de Albañal (Rodamiento)",
        descripcion: "Instalación de nuevo servicio de alcantarillado en rodamiento",
        presupuesto_base: 12620,
        conceptos: [
            {
                clave: 217,
                identificador: "CAR",
                nombre: "Rodamiento Conexión de albañal",
                descripcion: "Tubería de 6\" de PVC de 0.0 a 5.0 metros (incluye obra civil en rodamiento)",
                importe: 12620,
                obligatorio: true,
                cantidad_default: 1,
                permite_cantidad: false
            },
            {
                clave: 70,
                identificador: "RMAD",
                nombre: "Rodamiento metro adicional albañal",
                descripcion: "Por metro adicional de descarga en carpeta de rodamiento",
                importe: 1840,
                obligatorio: false,
                cantidad_default: 0,
                permite_cantidad: true
            },
            {
                clave: 12,
                identificador: "CDRS",
                nombre: "Construcción registro sanitario",
                descripcion: "Construcción de registro sanitario de 40 cm x 60 cm",
                importe: 6340,
                obligatorio: false,
                cantidad_default: 1,
                permite_cantidad: false
            }
        ]
    },
    {
        id: 5,
        nombre: "Servicio Completo (Agua + Albañal Tierra)",
        descripcion: "Nuevo servicio de agua potable y alcantarillado en tierra",
        presupuesto_base: 9770,
        conceptos: [
            {
                clave: 220,
                identificador: "ITCAT",
                nombre: "Tierra conexión de albañal y nuevo servicio de agua",
                descripcion: "Toma de 1/2\" a 1\" y tubería 6\" PVC de 0.0 a 5.0 metros (No incluye medidor)",
                importe: 9770,
                obligatorio: true,
                cantidad_default: 1,
                permite_cantidad: false
            },
            {
                clave: 108,
                identificador: "TMAAP",
                nombre: "Tierra metro adicional agua potable",
                descripcion: "Por metro adicional de toma de agua potable en tierra",
                importe: 980,
                obligatorio: false,
                cantidad_default: 0,
                permite_cantidad: true
            },
            {
                clave: 68,
                identificador: "TMAD",
                nombre: "Tierra metro adicional albañal",
                descripcion: "Por metro adicional de descarga en tierra",
                importe: 1340,
                obligatorio: false,
                cantidad_default: 0,
                permite_cantidad: true
            },
            {
                clave: 203,
                identificador: "MLR1/2",
                nombre: "Medidor de lectura remota (1/2\")",
                descripcion: "Suministro e instalación de medidor de lectura remota",
                importe: 2200,
                obligatorio: false,
                cantidad_default: 1,
                permite_cantidad: false
            },
            {
                clave: 15,
                identificador: "SM",
                nombre: "Suministro de medidor (1/2\")",
                descripcion: "Suministro e instalación de medidor estándar",
                importe: 803,
                obligatorio: false,
                cantidad_default: 1,
                permite_cantidad: false
            },
            {
                clave: 7,
                identificador: "SCB",
                nombre: "Suministro y colocación de caja de registro",
                descripcion: "Caja de registro para alojo de medidor en banqueta",
                importe: 3620,
                obligatorio: false,
                cantidad_default: 1,
                permite_cantidad: false
            },
            {
                clave: 12,
                identificador: "CDRS",
                nombre: "Construcción registro sanitario",
                descripcion: "Construcción de registro sanitario de 40 cm x 60 cm",
                importe: 6340,
                obligatorio: false,
                cantidad_default: 1,
                permite_cantidad: false
            }
        ]
    },
    {
        id: 6,
        nombre: "Servicio Completo (Agua + Albañal Rodamiento)",
        descripcion: "Nuevo servicio de agua potable y alcantarillado en rodamiento",
        presupuesto_base: 12970,
        conceptos: [
            {
                clave: 219,
                identificador: "ITCAR",
                nombre: "Carpeta de rodamiento conexión de albañal y nuevo servicio de agua",
                descripcion: "Toma de 1/2\" a 1\" y tubería 6\" PVC de 0.0 a 5.0 metros (No incluye medidor)",
                importe: 12970,
                obligatorio: true,
                cantidad_default: 1,
                permite_cantidad: false
            },
            {
                clave: 110,
                identificador: "RMAAP",
                nombre: "Rodamiento metro adicional agua potable",
                descripcion: "Por metro adicional en carpeta de rodamiento",
                importe: 1510,
                obligatorio: false,
                cantidad_default: 0,
                permite_cantidad: true
            },
            {
                clave: 70,
                identificador: "RMAD",
                nombre: "Rodamiento metro adicional albañal",
                descripcion: "Por metro adicional de descarga en carpeta de rodamiento",
                importe: 1840,
                obligatorio: false,
                cantidad_default: 0,
                permite_cantidad: true
            },
            {
                clave: 203,
                identificador: "MLR1/2",
                nombre: "Medidor de lectura remota (1/2\")",
                descripcion: "Suministro e instalación de medidor de lectura remota",
                importe: 2200,
                obligatorio: false,
                cantidad_default: 1,
                permite_cantidad: false
            },
            {
                clave: 15,
                identificador: "SM",
                nombre: "Suministro de medidor (1/2\")",
                descripcion: "Suministro e instalación de medidor estándar",
                importe: 803,
                obligatorio: false,
                cantidad_default: 1,
                permite_cantidad: false
            },
            {
                clave: 7,
                identificador: "SCB",
                nombre: "Suministro y colocación de caja de registro",
                descripcion: "Caja de registro para alojo de medidor en banqueta",
                importe: 3620,
                obligatorio: false,
                cantidad_default: 1,
                permite_cantidad: false
            },
            {
                clave: 12,
                identificador: "CDRS",
                nombre: "Construcción registro sanitario",
                descripcion: "Construcción de registro sanitario de 40 cm x 60 cm",
                importe: 6340,
                obligatorio: false,
                cantidad_default: 1,
                permite_cantidad: false
            }
        ]
    },
    {
        id: 7,
        nombre: "Instalación de Cuadros de Medición",
        descripcion: "Instalación de cuadros de medidor en diferentes tamaños",
        presupuesto_base: 1590,
        conceptos: [
            {
                clave: 198,
                identificador: "CM1/2",
                nombre: "Cuadro medidor de 1/2\" a 1\"",
                descripcion: "Suministro y colocación de cuadro de medidor galvanizado",
                importe: 1590,
                obligatorio: false,
                cantidad_default: 1,
                permite_cantidad: false
            },
            {
                clave: 199,
                identificador: "CM1",
                nombre: "Cuadro medidor 1-1/2\"",
                descripcion: "Suministro y colocación de cuadro de medidor galvanizado",
                importe: 3240,
                obligatorio: false,
                cantidad_default: 0,
                permite_cantidad: false
            },
            {
                clave: 200,
                identificador: "CM2",
                nombre: "Cuadro medidor 2\"",
                descripcion: "Suministro y colocación de cuadro de medidor FoFo",
                importe: 13320,
                obligatorio: false,
                cantidad_default: 0,
                permite_cantidad: false
            }
        ]
    },
    {
        id: 8,
        nombre: "Operaciones de Suspensión y Reconexión",
        descripcion: "Suspensiones y reconexiones de servicio por morosidad",
        presupuesto_base: 340,
        conceptos: [
            {
                clave: 211,
                identificador: "SAC/R",
                nombre: "Suspensión de agua en cuadro y/o registro",
                descripcion: "Por morosidad",
                importe: 340,
                obligatorio: false,
                cantidad_default: 0,
                permite_cantidad: false
            },
            {
                clave: 213,
                identificador: "SAB",
                nombre: "Suspensión de agua en banqueta",
                descripcion: "Por morosidad",
                importe: 1200,
                obligatorio: false,
                cantidad_default: 0,
                permite_cantidad: false
            },
            {
                clave: 212,
                identificador: "RAC/R",
                nombre: "Reconexión de agua en cuadro y/o registro",
                descripcion: "Por morosidad",
                importe: 560,
                obligatorio: false,
                cantidad_default: 0,
                permite_cantidad: false
            },
            {
                clave: 214,
                identificador: "RAB",
                nombre: "Reconexión de agua en banqueta",
                descripcion: "Por morosidad",
                importe: 1200,
                obligatorio: false,
                cantidad_default: 0,
                permite_cantidad: false
            }
        ]
    }
];

// Estado de la aplicación
let paqueteSeleccionado = null;
let conceptosActivos = {};
let aplicarIVA = false; // Control de IVA

// Inicializar la aplicación
function inicializar() {
    renderizarPaquetes();
}

// Renderizar lista de paquetes
function renderizarPaquetes() {
    const lista = document.getElementById('paquetes-lista');
    lista.innerHTML = paquetesTramites.map(paquete => `
        <div class="paquete-item" onclick="seleccionarPaquete(${paquete.id})">
            <h3>${paquete.nombre}</h3>
            <div class="precio">$${paquete.presupuesto_base.toLocaleString('es-MX', {minimumFractionDigits: 2})}</div>
            <div class="descripcion">${paquete.descripcion}</div>
        </div>
    `).join('');
}

// Seleccionar un paquete
function seleccionarPaquete(id) {
    paqueteSeleccionado = paquetesTramites.find(p => p.id === id);
    
    // Inicializar conceptos activos
    conceptosActivos = {};
    paqueteSeleccionado.conceptos.forEach(concepto => {
        conceptosActivos[concepto.clave] = {
            activo: concepto.obligatorio || concepto.cantidad_default > 0,
            cantidad: concepto.cantidad_default
        };
    });

    // Actualizar UI
    document.querySelectorAll('.paquete-item').forEach(item => {
        item.classList.remove('active');
    });
    event.currentTarget.classList.add('active');

    renderizarDetallePaquete();
}

// Renderizar detalle del paquete
function renderizarDetallePaquete() {
    const contenido = document.getElementById('contenido-principal');
    
    contenido.innerHTML = `
        <div class="presupuesto-detalle">
            <h2>${paqueteSeleccionado.nombre}</h2>
            
            <div class="info-panel">
                <p><strong>📋 Descripción:</strong> ${paqueteSeleccionado.descripcion}</p>
                <p><strong>💰 Presupuesto base:</strong> $${paqueteSeleccionado.presupuesto_base.toLocaleString('es-MX', {minimumFractionDigits: 2})}</p>
                <p><strong>📊 Total de conceptos:</strong> ${paqueteSeleccionado.conceptos.length}</p>
            </div>

            <div class="filtros">
                <button class="filtro-btn active" onclick="filtrarConceptos('todos')">Todos</button>
                <button class="filtro-btn" onclick="filtrarConceptos('obligatorios')">Obligatorios</button>
                <button class="filtro-btn" onclick="filtrarConceptos('opcionales')">Opcionales</button>
                <button class="filtro-btn" onclick="filtrarConceptos('activos')">Activos</button>
            </div>

            <div class="conceptos-lista" id="conceptos-lista">
                ${renderizarConceptos()}
            </div>

            ${renderizarResumen()}
        </div>
    `;
}

// Renderizar conceptos
function renderizarConceptos() {
    return paqueteSeleccionado.conceptos.map(concepto => {
        const estado = conceptosActivos[concepto.clave];
        const eliminado = !estado.activo;
        
        return `
            <div class="concepto-item ${concepto.obligatorio ? 'obligatorio' : 'opcional'} ${eliminado ? 'eliminado' : ''}" data-tipo="${concepto.obligatorio ? 'obligatorio' : 'opcional'}">
                <div>
                    <input 
                        type="checkbox" 
                        class="concepto-checkbox" 
                        ${estado.activo ? 'checked' : ''} 
                        ${concepto.obligatorio ? 'disabled' : ''} 
                        onchange="toggleConcepto(${concepto.clave})"
                    >
                </div>
                
                <div class="concepto-info">
                    <div class="concepto-nombre">${concepto.nombre}</div>
                    <div class="concepto-descripcion">${concepto.descripcion}</div>
                    <span class="concepto-badge ${concepto.obligatorio ? 'badge-obligatorio' : 'badge-opcional'}">
                        ${concepto.obligatorio ? '🔒 OBLIGATORIO' : '✨ OPCIONAL'}
                    </span>
                </div>
                
                <div class="concepto-cantidad">
                    ${concepto.permite_cantidad ? `
                        <input 
                            type="number" 
                            class="cantidad-input" 
                            min="0" 
                            max="100" 
                            value="${estado.cantidad}" 
                            ${!estado.activo ? 'disabled' : ''}
                            onchange="actualizarCantidad(${concepto.clave}, this.value)"
                        >
                    ` : `
                        <span style="color: #95a5a6;">Cantidad fija</span>
                    `}
                </div>
                
                <div class="concepto-importe">
                    $${(concepto.importe * estado.cantidad).toLocaleString('es-MX', {minimumFractionDigits: 2})}
                </div>
            </div>
        `;
    }).join('');
}

// Renderizar resumen
function renderizarResumen() {
    const totales = calcularTotales();
    
    return `
        <div class="resumen-panel">
            <h3>💼 Resumen del Presupuesto</h3>
            
            <div class="resumen-items">
                <div class="resumen-item">
                    <span class="resumen-label">Conceptos obligatorios:</span>
                    <span class="resumen-valor">${totales.cantidadObligatorios}</span>
                </div>
                <div class="resumen-item">
                    <span class="resumen-label">Conceptos opcionales activos:</span>
                    <span class="resumen-valor">${totales.cantidadOpcionalesActivos}</span>
                </div>
                <div class="resumen-item">
                    <span class="resumen-label">Subtotal:</span>
                    <span class="resumen-valor">$${totales.subtotal.toLocaleString('es-MX', {minimumFractionDigits: 2})}</span>
                </div>
                ${aplicarIVA ? `
                <div class="resumen-item">
                    <span class="resumen-label">IVA (16%):</span>
                    <span class="resumen-valor">$${totales.iva.toLocaleString('es-MX', {minimumFractionDigits: 2})}</span>
                </div>
                ` : ''}
                <div class="resumen-item">
                    <span class="resumen-label">TOTAL:</span>
                    <span class="resumen-valor">$${totales.total.toLocaleString('es-MX', {minimumFractionDigits: 2})}</span>
                </div>
            </div>

            <div class="control-iva">
                <label class="switch-iva">
                    <input type="checkbox" ${aplicarIVA ? 'checked' : ''} onchange="toggleIVA()">
                    <span class="slider-iva"></span>
                    <span class="label-iva">Aplicar IVA (16%)</span>
                </label>
            </div>

            <div class="acciones">
                <button class="btn btn-primary" onclick="generarPresupuesto()">📄 Generar Presupuesto</button>
                <button class="btn btn-secondary" onclick="imprimirPresupuesto()">🖨️ Imprimir</button>
                <button class="btn btn-danger" onclick="resetearConceptos()">🔄 Resetear</button>
            </div>
        </div>
    `;
}

// Toggle concepto
function toggleConcepto(clave) {
    conceptosActivos[clave].activo = !conceptosActivos[clave].activo;
    
    // Si se desactiva, poner cantidad en 0
    if (!conceptosActivos[clave].activo) {
        conceptosActivos[clave].cantidad = 0;
    } else {
        // Si se reactiva, poner cantidad default
        const concepto = paqueteSeleccionado.conceptos.find(c => c.clave === clave);
        conceptosActivos[clave].cantidad = concepto.cantidad_default || 1;
    }
    
    renderizarDetallePaquete();
}

// Toggle IVA
function toggleIVA() {
    aplicarIVA = !aplicarIVA;
    renderizarDetallePaquete();
}

// Actualizar cantidad
function actualizarCantidad(clave, cantidad) {
    conceptosActivos[clave].cantidad = parseInt(cantidad) || 0;
    
    // Si la cantidad es 0, desactivar el concepto
    if (conceptosActivos[clave].cantidad === 0) {
        conceptosActivos[clave].activo = false;
    } else {
        conceptosActivos[clave].activo = true;
    }
    
    renderizarDetallePaquete();
}

// Calcular totales
function calcularTotales() {
    let subtotal = 0;
    let cantidadObligatorios = 0;
    let cantidadOpcionalesActivos = 0;

    paqueteSeleccionado.conceptos.forEach(concepto => {
        const estado = conceptosActivos[concepto.clave];
        
        if (estado.activo) {
            subtotal += concepto.importe * estado.cantidad;
            
            if (concepto.obligatorio) {
                cantidadObligatorios++;
            } else {
                cantidadOpcionalesActivos++;
            }
        }
    });

    const iva = aplicarIVA ? subtotal * 0.16 : 0;
    const total = subtotal + iva;

    return {
        subtotal,
        iva,
        total,
        cantidadObligatorios,
        cantidadOpcionalesActivos
    };
}

// Filtrar conceptos
function filtrarConceptos(filtro) {
    // Actualizar botones activos
    document.querySelectorAll('.filtro-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.currentTarget.classList.add('active');

    // Filtrar conceptos
    const conceptos = document.querySelectorAll('.concepto-item');
    conceptos.forEach(concepto => {
        const tipo = concepto.dataset.tipo;
        const activo = concepto.querySelector('.concepto-checkbox').checked;

        let mostrar = true;

        if (filtro === 'obligatorios') {
            mostrar = tipo === 'obligatorio';
        } else if (filtro === 'opcionales') {
            mostrar = tipo === 'opcional';
        } else if (filtro === 'activos') {
            mostrar = activo;
        }

        concepto.style.display = mostrar ? 'grid' : 'none';
    });
}

// Generar presupuesto
function generarPresupuesto() {
    const totales = calcularTotales();
    const fecha = new Date().toLocaleDateString('es-MX');
    
    let reporte = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PRESUPUESTO DE TRÁMITE
   MIAA - Sistema de Agua Potable
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Fecha: ${fecha}
Paquete: ${paqueteSeleccionado.nombre}

CONCEPTOS INCLUIDOS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

`;

    paqueteSeleccionado.conceptos.forEach(concepto => {
        const estado = conceptosActivos[concepto.clave];
        if (estado.activo) {
            const tipo = concepto.obligatorio ? '[OBLIGATORIO]' : '[OPCIONAL]';
            const cantidad = estado.cantidad > 1 ? ` x${estado.cantidad}` : '';
            const total = concepto.importe * estado.cantidad;
            
            reporte += `${tipo} ${concepto.identificador}\n`;
            reporte += `${concepto.nombre}${cantidad}\n`;
            reporte += `$${total.toLocaleString('es-MX', {minimumFractionDigits: 2})}\n\n`;
        }
    });

    reporte += `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESUMEN FINANCIERO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Subtotal:           $${totales.subtotal.toLocaleString('es-MX', {minimumFractionDigits: 2})}`;

    if (aplicarIVA) {
        reporte += `
IVA (16%):          $${totales.iva.toLocaleString('es-MX', {minimumFractionDigits: 2})}`;
    }

    reporte += `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TOTAL:              $${totales.total.toLocaleString('es-MX', {minimumFractionDigits: 2})}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Conceptos obligatorios: ${totales.cantidadObligatorios}
Conceptos opcionales activos: ${totales.cantidadOpcionalesActivos}
${aplicarIVA ? 'IVA aplicado: 16%' : 'Sin IVA'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

    // Mostrar en un textarea para copiar
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    `;

    modal.innerHTML = `
        <div style="background: white; padding: 30px; border-radius: 15px; max-width: 800px; width: 90%; max-height: 80vh; overflow: auto;">
            <h2 style="color: #1e3c72; margin-bottom: 20px;">📄 Presupuesto Generado</h2>
            <textarea readonly style="width: 100%; height: 400px; font-family: monospace; padding: 15px; border: 2px solid #ddd; border-radius: 8px; font-size: 0.9em;">${reporte}</textarea>
            <div style="display: flex; gap: 10px; margin-top: 20px;">
                <button onclick="copiarAlPortapapeles()" class="btn btn-primary">📋 Copiar</button>
                <button onclick="this.parentElement.parentElement.parentElement.remove()" class="btn btn-secondary">Cerrar</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
}

// Copiar al portapapeles
function copiarAlPortapapeles() {
    const textarea = document.querySelector('textarea');
    textarea.select();
    document.execCommand('copy');
    alert('✅ Presupuesto copiado al portapapeles');
}

// Imprimir presupuesto
function imprimirPresupuesto() {
    window.print();
}

// Resetear conceptos
function resetearConceptos() {
    if (confirm('¿Estás seguro de que deseas resetear todos los conceptos opcionales?')) {
        paqueteSeleccionado.conceptos.forEach(concepto => {
            conceptosActivos[concepto.clave] = {
                activo: concepto.obligatorio || concepto.cantidad_default > 0,
                cantidad: concepto.cantidad_default
            };
        });
        renderizarDetallePaquete();
    }
}

// Inicializar al cargar la página
window.onload = inicializar;
