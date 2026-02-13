// ============================================================
// app.js - Lógica del Catálogo de Quejas 2026
// ============================================================

let seccionActiva = 'con_cuenta';
let filtroTexto = '';
let filtroProceso = '';

// ── Inicialización ──
window.onload = function () {
    renderTabs();
    renderStats();
    renderQuejas();
};

// ── Tabs de sección ──
function renderTabs() {
    const container = document.getElementById('seccionTabs');
    container.innerHTML = '';
    QUEJAS_DATA.secciones.forEach(sec => {
        const btn = document.createElement('button');
        btn.className = 'seccion-tab' + (sec.id === seccionActiva ? ' active' : '');
        btn.innerHTML = `${sec.icon} ${sec.nombre} <span class="count">${sec.quejas.length}</span>`;
        btn.onclick = () => { seccionActiva = sec.id; renderTabs(); renderQuejas(); renderStats(); };
        container.appendChild(btn);
    });
}

// ── Estadísticas ──
function renderStats() {
    const sec = QUEJAS_DATA.secciones.find(s => s.id === seccionActiva);
    const quejas = sec.quejas;
    const totalOT = quejas.filter(q => q.proceso === 'Orden de trabajo').length;
    const totalInsp = quejas.filter(q => q.proceso === 'Orden de inspección').length;
    const totalNA = quejas.filter(q => q.proceso === 'N/A').length;

    // Responsables únicos
    const respSet = new Set();
    quejas.forEach(q => q.responsables.forEach(r => respSet.add(r)));

    document.getElementById('statsBar').innerHTML = `
        <div class="stat-item"><div class="stat-number">${quejas.length}</div><div class="stat-label">Total Quejas</div></div>
        <div class="stat-item"><div class="stat-number" style="color:#d97706">${totalOT}</div><div class="stat-label">Órdenes de Trabajo</div></div>
        <div class="stat-item"><div class="stat-number" style="color:#7c3aed">${totalInsp}</div><div class="stat-label">Inspecciones</div></div>
        <div class="stat-item"><div class="stat-number" style="color:#94a3b8">${totalNA}</div><div class="stat-label">Sin Proceso</div></div>
        <div class="stat-item"><div class="stat-number" style="color:#0369a1">${respSet.size}</div><div class="stat-label">Responsables</div></div>
    `;
}

// ── Render cards ──
function renderQuejas() {
    const sec = QUEJAS_DATA.secciones.find(s => s.id === seccionActiva);
    let quejas = sec.quejas;

    // Filtrar
    if (filtroTexto) {
        const ft = filtroTexto.toLowerCase();
        quejas = quejas.filter(q =>
            q.queja.toLowerCase().includes(ft) ||
            q.dispara.toLowerCase().includes(ft) ||
            q.responsables.some(r => r.toLowerCase().includes(ft))
        );
    }
    if (filtroProceso) {
        quejas = quejas.filter(q => q.proceso === filtroProceso);
    }

    const grid = document.getElementById('quejasGrid');
    grid.innerHTML = '';

    if (quejas.length === 0) {
        grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px;color:white;font-size:16px;opacity:0.7;">No se encontraron quejas con esos filtros</div>';
        return;
    }

    quejas.forEach((q, idx) => {
        const tipoClass = q.proceso === 'Orden de trabajo' ? 'tipo-ot' : q.proceso === 'Orden de inspección' ? 'tipo-insp' : 'tipo-na';
        const badgeClass = q.proceso === 'Orden de trabajo' ? 'badge-ot' : q.proceso === 'Orden de inspección' ? 'badge-insp' : 'badge-na';
        const badgeText = q.proceso === 'Orden de trabajo' ? 'OT' : q.proceso === 'Orden de inspección' ? 'INSPECCIÓN' : 'N/A';

        const card = document.createElement('div');
        card.className = `queja-card ${tipoClass}`;
        card.style.cursor = 'pointer';
        card.onclick = () => verDetalle(seccionActiva, idx);

        let html = `
            <div class="card-header">
                <h3>${q.queja}</h3>
                <span class="badge ${badgeClass}">${badgeText}</span>
            </div>
            <div class="card-body">
                <div class="card-field">
                    <div class="card-field-label">Dispara</div>
                    <div class="card-field-value">${q.dispara}</div>
                </div>`;

        if (q.area) {
            html += `<span class="area-tag">📍 ${q.area.length > 50 ? q.area.substring(0, 50) + '...' : q.area}</span>`;
        }

        if (q.responsables.length > 0) {
            html += '<div class="card-responsables">';
            html += '<div class="card-field-label">Responsables</div>';
            const mostrar = q.responsables.slice(0, 3);
            mostrar.forEach(r => { html += `<span class="responsable-tag">👤 ${r}</span>`; });
            if (q.responsables.length > 3) {
                html += `<span class="responsable-tag" style="background:#f1f5f9;color:#64748b;border-color:#e2e8f0;">+${q.responsables.length - 3} más</span>`;
            }
            html += '</div>';
        }

        if (q.fecha) {
            html += `<div class="card-fecha">📅 ${q.fecha}</div>`;
        }

        html += '</div>';
        card.innerHTML = html;
        grid.appendChild(card);
    });
}

// ── Filtros ──
function filtrar() {
    filtroTexto = document.getElementById('filtroTexto').value;
    filtroProceso = document.getElementById('filtroProceso').value;
    renderQuejas();
}

function limpiarFiltros() {
    document.getElementById('filtroTexto').value = '';
    document.getElementById('filtroProceso').value = '';
    filtroTexto = '';
    filtroProceso = '';
    renderQuejas();
}

// ── Ver detalle ──
function verDetalle(secId, idx) {
    const sec = QUEJAS_DATA.secciones.find(s => s.id === secId);
    // Filtrar igual que en renderQuejas para obtener el índice correcto
    let quejas = sec.quejas;
    if (filtroTexto) {
        const ft = filtroTexto.toLowerCase();
        quejas = quejas.filter(q =>
            q.queja.toLowerCase().includes(ft) ||
            q.dispara.toLowerCase().includes(ft) ||
            q.responsables.some(r => r.toLowerCase().includes(ft))
        );
    }
    if (filtroProceso) {
        quejas = quejas.filter(q => q.proceso === filtroProceso);
    }
    const q = quejas[idx];
    if (!q) return;

    const badgeClass = q.proceso === 'Orden de trabajo' ? 'badge-ot' : q.proceso === 'Orden de inspección' ? 'badge-insp' : 'badge-na';
    const badgeText = q.proceso === 'Orden de trabajo' ? 'Orden de Trabajo' : q.proceso === 'Orden de inspección' ? 'Orden de Inspección' : 'Sin Proceso';

    let html = `
        <h2>${q.queja} <span class="badge ${badgeClass}" style="font-size:12px;vertical-align:middle;">${badgeText}</span></h2>
        <div class="detalle-grid">
            <div class="detalle-item">
                <label>Proceso</label>
                <span>${q.proceso}</span>
            </div>
            <div class="detalle-item">
                <label>Fecha</label>
                <span>${q.fecha || 'Sin fecha'}</span>
            </div>
            <div class="detalle-item detalle-full">
                <label>Dispara</label>
                <span>${q.dispara}</span>
            </div>`;

    if (q.area) {
        html += `
            <div class="detalle-item detalle-full">
                <label>Área Responsable</label>
                <span>${q.area}</span>
            </div>`;
    }

    if (q.responsables.length > 0) {
        html += `
            <div class="detalle-item detalle-full">
                <label>Responsables (${q.responsables.length})</label>
                <div class="responsables-list">`;
        q.responsables.forEach(r => {
            html += `<span class="responsable-tag">👤 ${r}</span>`;
        });
        html += '</div></div>';
    }

    html += `
            <div class="detalle-item detalle-full">
                <label>Sección</label>
                <span>${sec.icon} ${sec.nombre}</span>
            </div>
        </div>`;

    document.getElementById('detalleContenido').innerHTML = html;
    document.getElementById('modalDetalle').style.display = 'block';
}

function cerrarModal() {
    document.getElementById('modalDetalle').style.display = 'none';
}

// ── Exportar CSV ──
function exportarCSV() {
    let csv = '\uFEFFQueja,Proceso,Dispara,Área,Responsables,Fecha,Sección\n';
    QUEJAS_DATA.secciones.forEach(sec => {
        sec.quejas.forEach(q => {
            const resp = q.responsables.join(' | ') || 'N/A';
            csv += [
                `"${q.queja}"`,
                `"${q.proceso}"`,
                `"${q.dispara}"`,
                `"${(q.area || 'N/A').replace(/"/g, '""')}"`,
                `"${resp.replace(/"/g, '""')}"`,
                `"${q.fecha || 'N/A'}"`,
                `"${sec.nombre}"`
            ].join(',') + '\n';
        });
    });
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `catalogo_quejas_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Cerrar modal con Escape
document.addEventListener('keydown', e => { if (e.key === 'Escape') cerrarModal(); });
