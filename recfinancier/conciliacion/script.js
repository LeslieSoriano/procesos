/**
 * ============================================================
 *  CONCILIACIÓN BANCARIA — Sistema Municipal de Agua
 *  script.js
 *
 *  Optimizado para archivos GRANDES:
 *  ─ CSV leído en chunks de 128 KB (no bloquea la interfaz)
 *  ─ Comparación por lotes con requestIdleCallback
 *  ─ HashMap O(n) — funciona igual con 1,000 que 500,000 filas
 *  ─ Paginación: máximo PAGE_SIZE filas en el DOM
 *  ─ Debounce en búsqueda (250 ms)
 *  ─ Divisor de paneles redimensionable con arrastre
 * ============================================================ */

const PAGE_SIZE  = 300;
const CHUNK_SIZE = 128 * 1024;  // 128 KB por chunk
const LOTE       = 10000;       // filas por lote de comparación

/* ──────────────────────────────────────────────────────────
   ESTADO GLOBAL
────────────────────────────────────────────────────────── */
const S = {
  sistema:   null,   // { nombre, filas[], encabezados[] }
  banco:     null,
  resultado: null,   // { resSistema: Map, resBanco: Map }

  paneles: {
    sistema: { pag:0, filtro:'todos', busqueda:'', filas:[] },
    banco:   { pag:0, filtro:'todos', busqueda:'', filas:[] }
  },

  config: {
    sistema:  { referencia:'', monto:'', fecha:'', descripcion:'', cuenta:'' },
    banco:    { referencia:'', monto:'', fecha:'', descripcion:'', cuenta:'' },
    tolerancia:    0,
    ignorarFecha:  false,
    normalizarRef: true,
    sepDecimal:    '.'
  }
};

let _uid = 0;

/* ──────────────────────────────────────────────────────────
   INIT
────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initModal();
  initDivisor();
  initPanelSearch();
  initFilterBtns();
  initToolbar();
  initFechaHoy();
  document.getElementById('opt-tolerancia')
    ?.addEventListener('input', e => {
      document.getElementById('tol-val').textContent = '$' + parseFloat(e.target.value).toFixed(2);
    });
});

/* ──────────────────────────────────────────────────────────
   FECHAS — poner hoy por defecto
────────────────────────────────────────────────────────── */
function initFechaHoy () {
  const hoy = new Date().toISOString().slice(0,10);
  const d = document.getElementById('fil-desde');
  const h = document.getElementById('fil-hasta');
  if (d) d.value = hoy;
  if (h) h.value = hoy;
}

/* ──────────────────────────────────────────────────────────
   TOOLBAR
────────────────────────────────────────────────────────── */
function initToolbar () {
  document.getElementById('btn-open-carga')    ?.addEventListener('click', abrirModal);
  document.getElementById('btn-load-sistema')  ?.addEventListener('click', abrirModal);
  document.getElementById('btn-load-banco')    ?.addEventListener('click', abrirModal);
  document.getElementById('btn-conciliar')     ?.addEventListener('click', ejecutarConciliacion);
  document.getElementById('btn-export-excel')  ?.addEventListener('click', exportarCSV);
  document.getElementById('btn-reiniciar')     ?.addEventListener('click', reiniciar);
  document.getElementById('btn-filtrar')       ?.addEventListener('click', aplicarFiltroFecha);
  document.getElementById('btn-limpiar-filtro')?.addEventListener('click', () => {
    ['sistema','banco'].forEach(t => {
      S.paneles[t].busqueda = '';
      const el = document.getElementById(`search-${t}`);
      if (el) el.value = '';
    });
    renderPanel('sistema');
    renderPanel('banco');
  });
}

/* ──────────────────────────────────────────────────────────
   MODAL
────────────────────────────────────────────────────────── */
function initModal () {
  document.getElementById('btn-cerrar-modal') ?.addEventListener('click', cerrarModal);
  document.getElementById('btn-cerrar-modal2')?.addEventListener('click', cerrarModal);
  document.getElementById('modal-carga')?.addEventListener('click', e => {
    if (e.target.id === 'modal-carga') cerrarModal();
  });
  setupUpload('zona-sistema', 'input-sistema', 'sistema');
  setupUpload('zona-banco',   'input-banco',   'banco');
  document.getElementById('btn-modal-ok')?.addEventListener('click', confirmarModal);
}

function abrirModal  () { document.getElementById('modal-carga').classList.add('open');    }
function cerrarModal () { document.getElementById('modal-carga').classList.remove('open'); }

function setupUpload (zoneId, inputId, tipo) {
  const zone  = document.getElementById(zoneId);
  const input = document.getElementById(inputId);
  if (!zone || !input) return;

  zone.addEventListener('click',    e => { if (e.target !== input) input.click(); });
  zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('hover'); });
  zone.addEventListener('dragleave', () => zone.classList.remove('hover'));
  zone.addEventListener('drop', e => {
    e.preventDefault(); zone.classList.remove('hover');
    const f = e.dataTransfer.files[0];
    if (f) cargarArchivo(f, tipo);
  });
  input.addEventListener('change', () => {
    const f = input.files[0];
    if (f) cargarArchivo(f, tipo);
  });
}

/* ──────────────────────────────────────────────────────────
   CARGA DE ARCHIVO
────────────────────────────────────────────────────────── */
async function cargarArchivo (file, tipo) {
  const ext = file.name.split('.').pop().toLowerCase();
  const mb  = (file.size / 1024 / 1024).toFixed(1);

  mostrarLoading(true, `Leyendo ${file.name} (${mb} MB)…`, 0);

  try {
    let datos;
    if      (ext === 'csv' || ext === 'txt')  datos = await leerCSVChunks(file);
    else if (ext === 'xlsx' || ext === 'xls') datos = await leerXLSX(file);
    else {
      toast('Formato no soportado. Usa CSV, TXT o XLSX.', 'error');
      mostrarLoading(false); return;
    }

    if (!datos || datos.filas.length === 0) {
      toast('El archivo está vacío o sin datos reconocibles.', 'error');
      mostrarLoading(false); return;
    }

    datos.nombre = file.name;
    S[tipo] = datos;

    document.getElementById(`zona-${tipo}`)?.classList.add('loaded');
    document.getElementById(`info-${tipo}`).textContent =
      `✓ ${file.name} — ${datos.filas.length.toLocaleString('es-MX')} registros`;

    populateCols(tipo, datos.encabezados);
    mostrarSeccion(`seccion-cols-${tipo}`);
    mostrarSeccion('seccion-opciones');
    mostrarPreviewModal(tipo, datos);
    poblarFiltroCuenta(tipo);
    verificarModalOk();
    mostrarLoading(false);

    toast(`✓ ${file.name} — ${datos.filas.length.toLocaleString('es-MX')} registros cargados`, 'success');

  } catch (err) {
    console.error(err);
    toast(`Error al leer el archivo: ${err.message}`, 'error');
    mostrarLoading(false);
  }
}

/* ──────────────────────────────────────────────────────────
   LECTURA CSV EN CHUNKS (128 KB por vez, no bloquea la UI)
────────────────────────────────────────────────────────── */
function leerCSVChunks (file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    const total  = file.size;
    let offset = 0, fragmento = '';
    let encabezados = null, sep = null;
    let filas = [], numFila = 0, primeraLin = true;

    function leerChunk () {
      reader.readAsText(file.slice(offset, offset + CHUNK_SIZE), 'UTF-8');
    }

    reader.onload = (e) => {
      let bloque = fragmento + e.target.result;
      offset += CHUNK_SIZE;

      const posNL = bloque.lastIndexOf('\n');
      if (posNL === -1) {
        fragmento = bloque;
        if (offset < total) { requestAnimationFrame(leerChunk); return; }
        bloque = fragmento; fragmento = '';
      } else {
        fragmento = bloque.slice(posNL + 1);
        bloque    = bloque.slice(0, posNL);
      }

      for (const rawLine of bloque.split('\n')) {
        const linea = rawLine.replace(/\r$/, '');
        if (!linea.trim()) continue;

        if (primeraLin) {
          // Detectar separador automáticamente
          const nc = (linea.match(/,/g)  || []).length;
          const ns = (linea.match(/;/g)  || []).length;
          const nt = (linea.match(/\t/g) || []).length;
          sep = ns > nc ? ';' : nt > 2 ? '\t' : ',';

          encabezados = parseLineaCSV(linea, sep)
            .map(h => h.trim().replace(/^\uFEFF/, ''));
          primeraLin = false;
          continue;
        }

        const vals = parseLineaCSV(linea, sep);
        if (vals.every(v => !v.trim())) continue;

        const fila = { _indice: ++numFila };
        encabezados.forEach((h, i) => { fila[h] = (vals[i] ?? '').trim(); });
        filas.push(fila);
      }

      const pct = Math.min(99, Math.round(offset / total * 100));
      mostrarLoading(true, `Leyendo… ${numFila.toLocaleString('es-MX')} registros`, pct);

      if (offset < total) {
        requestAnimationFrame(leerChunk);
      } else {
        // Línea final sin salto de línea
        if (fragmento.trim() && encabezados) {
          const vals = parseLineaCSV(fragmento.trim(), sep);
          if (!vals.every(v => !v.trim())) {
            const fila = { _indice: ++numFila };
            encabezados.forEach((h, i) => { fila[h] = (vals[i] ?? '').trim(); });
            filas.push(fila);
          }
        }
        resolve({ encabezados: encabezados || [], filas });
      }
    };

    reader.onerror = () => reject(new Error('No se pudo leer el archivo'));
    leerChunk();
  });
}

/* ---------- Parser de línea CSV (respeta comillas) ---------- */
function parseLineaCSV (linea, sep) {
  const r = []; let c = '', q = false;
  for (let i = 0; i < linea.length; i++) {
    const ch = linea[i];
    if      (ch === '"') { if (q && linea[i+1] === '"') { c += '"'; i++; } else q = !q; }
    else if (ch === sep && !q) { r.push(c); c = ''; }
    else c += ch;
  }
  r.push(c);
  return r;
}

/* ──────────────────────────────────────────────────────────
   LECTURA XLSX (SheetJS)
────────────────────────────────────────────────────────── */
function leerXLSX (file) {
  return new Promise((resolve, reject) => {
    if (typeof XLSX === 'undefined') {
      reject(new Error('La librería XLSX no está disponible. Convierte el archivo a CSV.'));
      return;
    }
    mostrarLoading(true, 'Procesando XLSX…', 20);
    const reader = new FileReader();
    reader.onload = e => {
      try {
        mostrarLoading(true, 'Leyendo hoja de cálculo…', 55);
        const wb   = XLSX.read(new Uint8Array(e.target.result), { type:'array', cellDates:true });
        const ws   = wb.Sheets[wb.SheetNames[0]];
        mostrarLoading(true, 'Convirtiendo filas…', 80);
        const rows = XLSX.utils.sheet_to_json(ws, { defval:'', raw:false });
        mostrarLoading(true, `${rows.length.toLocaleString('es-MX')} filas encontradas…`, 95);
        const encabezados = rows.length
          ? Object.keys(rows[0]).filter(k => !k.startsWith('__'))
          : [];
        const filas = rows.map((r, i) => {
          const f = { ...r, _indice: i + 1 };
          delete f.__rowNum__;
          return f;
        });
        resolve({ encabezados, filas });
      } catch (err) { reject(err); }
    };
    reader.onerror = () => reject(new Error('Error al leer el archivo XLSX'));
    reader.readAsArrayBuffer(file);
  });
}

/* ──────────────────────────────────────────────────────────
   SELECTORS DE COLUMNAS — autodetección heurística
────────────────────────────────────────────────────────── */
function populateCols (tipo, encabezados) {
  ['referencia','monto','fecha','descripcion','cuenta'].forEach(campo => {
    const sel = document.getElementById(`col-${tipo}-${campo}`);
    if (!sel) return;
    const esOpc = ['fecha','descripcion','cuenta'].includes(campo);
    sel.innerHTML = `<option value="">${esOpc ? '-- ninguna --' : '-- seleccionar columna --'}</option>`;
    encabezados.forEach(h => {
      const opt = document.createElement('option');
      opt.value = h; opt.textContent = h;
      const hl = h.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      if (campo==='referencia' && /ref|folio|clave|^id$|numero|num|recibo|ticket|transacc|operacion|lote|pago/i.test(hl)) opt.selected=true;
      if (campo==='monto'      && /monto|importe|total|cargo|abono|deposit|pago|valor|cantidad/i.test(hl))               opt.selected=true;
      if (campo==='fecha'      && /fecha|date|^dia$|period|fecha/i.test(hl))                                             opt.selected=true;
      if (campo==='descripcion'&& /desc|concepto|detalle|movim|motiv|glosa|concepto|observ/i.test(hl))                   opt.selected=true;
      if (campo==='cuenta'     && /cuenta|bank|banco|card|tarjeta|sucursal/i.test(hl))                                   opt.selected=true;
      sel.appendChild(opt);
    });
  });
}

function mostrarSeccion (id) {
  const el = document.getElementById(id);
  if (el) el.style.display = '';
}

/* ──────────────────────────────────────────────────────────
   PREVIEW EN MODAL
────────────────────────────────────────────────────────── */
function mostrarPreviewModal (tipo, datos) {
  const wrap = document.getElementById(`prev-${tipo}`);
  if (!wrap) return;
  const cols = datos.encabezados.slice(0, 6);
  let html = '<table><thead><tr>';
  cols.forEach(h => { html += `<th>${esc(h)}</th>`; });
  html += '</tr></thead><tbody>';
  datos.filas.slice(0, 6).forEach(f => {
    html += '<tr>';
    cols.forEach(h => { html += `<td title="${esc(String(f[h]??''))}">${esc(String(f[h]??'').slice(0,28))}</td>`; });
    html += '</tr>';
  });
  html += '</tbody></table>';
  wrap.innerHTML = html;
}

function verificarModalOk () {
  const btn = document.getElementById('btn-modal-ok');
  if (btn) btn.disabled = !(S.sistema && S.banco);
}

/* ──────────────────────────────────────────────────────────
   CONFIRMAR MODAL — leer config y preparar paneles
────────────────────────────────────────────────────────── */
function confirmarModal () {
  ['sistema','banco'].forEach(tipo => {
    ['referencia','monto','fecha','descripcion','cuenta'].forEach(campo => {
      const sel = document.getElementById(`col-${tipo}-${campo}`);
      if (sel) S.config[tipo][campo] = sel.value;
    });
  });
  S.config.normalizarRef = document.getElementById('opt-norm-ref')?.checked ?? true;
  S.config.ignorarFecha  = document.getElementById('opt-ignorar-fecha')?.checked ?? false;
  S.config.sepDecimal    = document.getElementById('opt-sep-decimal')?.value ?? '.';
  S.config.tolerancia    = parseFloat(document.getElementById('opt-tolerancia')?.value) || 0;

  cerrarModal();

  // Mostrar datos crudos en paneles
  prepararFilasBruto('sistema');
  prepararFilasBruto('banco');
  renderPanel('sistema');
  renderPanel('banco');
  actualizarBotones();
  setStatus('listo', 'Listo para conciliar ⚡');
  toast('Archivos configurados. Presiona ⚡ Conciliar para iniciar.', 'info');
}

/* ──────────────────────────────────────────────────────────
   PREPARAR FILAS BRUTAS (antes de conciliar)
────────────────────────────────────────────────────────── */
function prepararFilasBruto (tipo) {
  const datos = S[tipo];
  if (!datos) return;
  const cfg = S.config[tipo];
  S.paneles[tipo].filas = datos.filas.map(f => ({
    _tipo:  'bruto',
    ref:    String(f[cfg.referencia] ?? ''),
    monto:  parseMonto(String(f[cfg.monto] ?? ''), S.config.sepDecimal),
    fecha:  cfg.fecha        ? String(f[cfg.fecha] ?? '')       : '',
    desc:   cfg.descripcion  ? String(f[cfg.descripcion] ?? '') : '',
    cuenta: cfg.cuenta       ? String(f[cfg.cuenta] ?? '')      : '',
    parRef: '', difMonto: null, _raw: f
  }));
}

/* ──────────────────────────────────────────────────────────
   MOTOR DE CONCILIACIÓN POR LOTES
────────────────────────────────────────────────────────── */
function ejecutarConciliacion () {
  if (!S.sistema || !S.banco) {
    toast('Carga los dos archivos primero desde 📂 Cargar', 'error'); return;
  }
  if (!S.config.sistema.referencia || !S.config.sistema.monto) {
    toast('Define la columna de referencia y monto del Sistema', 'error'); abrirModal(); return;
  }
  if (!S.config.banco.referencia || !S.config.banco.monto) {
    toast('Define la columna de referencia y monto del Banco', 'error'); abrirModal(); return;
  }

  _uid = 0;
  mostrarLoading(true, 'Normalizando registros…', 5);

  setTimeout(() => {
    // Fase 1: normalizar ambos conjuntos
    const filasS = S.sistema.filas.map(f => normFila(f, S.config.sistema, 'sistema'));
    const filasB = S.banco.filas.map(f   => normFila(f, S.config.banco,   'banco'));

    mostrarLoading(true, `Construyendo índice de ${filasB.length.toLocaleString('es-MX')} registros del banco…`, 38);

    setTimeout(() => {
      // Fase 2: HashMap del banco O(n)
      const mapaB = new Map();
      for (const fb of filasB) {
        const k = buildKey(fb);
        if (!mapaB.has(k)) mapaB.set(k, []);
        mapaB.get(k).push(fb);
      }

      // Estructuras de resultado
      const resSistema = new Map();   // uid → { fila, par, estado, difMonto }
      const resBanco   = new Map();
      const usadosB    = new Set();
      let   idx        = 0;

      // Fase 3: comparación en lotes
      function lote () {
        const fin = Math.min(idx + LOTE, filasS.length);

        for (; idx < fin; idx++) {
          const fs    = filasS[idx];
          const key   = buildKey(fs);
          const cands = mapaB.get(key) || [];
          let   match = null;

          // Buscar coincidencia exacta (dentro de tolerancia)
          for (const fb of cands) {
            if (usadosB.has(fb._uid)) continue;
            if (Math.abs(fb._monto - fs._monto) <= S.config.tolerancia) {
              match = fb; break;
            }
          }

          if (match) {
            usadosB.add(match._uid);
            const dif    = fs._monto - match._monto;
            const estado = Math.abs(dif) > 0 ? 'diff' : 'match';
            resSistema.set(fs._uid,    { fila:fs,    par:match, estado, difMonto:dif });
            resBanco.set(match._uid,   { fila:match, par:fs,    estado, difMonto:-dif });
          } else {
            // Buscar con mismo folio pero distinto monto
            const conOtroMonto = cands.find(fb => !usadosB.has(fb._uid));
            if (conOtroMonto) {
              usadosB.add(conOtroMonto._uid);
              const dif = fs._monto - conOtroMonto._monto;
              resSistema.set(fs._uid,           { fila:fs,           par:conOtroMonto, estado:'diff',    difMonto:dif });
              resBanco.set(conOtroMonto._uid,   { fila:conOtroMonto, par:fs,           estado:'diff',    difMonto:-dif });
            } else {
              // Solo en sistema
              resSistema.set(fs._uid, { fila:fs, par:null, estado:'pending', difMonto:null });
            }
          }
        }

        const pct = 40 + Math.round(idx / filasS.length * 52);
        mostrarLoading(true,
          `Comparando… ${idx.toLocaleString('es-MX')} / ${filasS.length.toLocaleString('es-MX')}`, pct);

        if (idx < filasS.length) {
          requestIdleCallback
            ? requestIdleCallback(lote, { timeout: 200 })
            : setTimeout(lote, 0);
        } else {
          // Pendientes del banco (solo en banco)
          for (const fb of filasB) {
            if (!usadosB.has(fb._uid)) {
              resBanco.set(fb._uid, { fila:fb, par:null, estado:'pending', difMonto:null });
            }
          }

          S.resultado = { resSistema, resBanco };
          mostrarLoading(true, 'Renderizando resultados…', 98);

          setTimeout(() => {
            construirFilasPaneles();
            renderPanel('sistema');
            renderPanel('banco');
            actualizarTotales();
            actualizarBotones();
            mostrarLoading(false);
            setStatus('ejecutado', 'Conciliación completada ✓');
            toast('✅ Conciliación lista. Revisa los resultados en cada panel.', 'success');
          }, 30);
        }
      }

      requestIdleCallback
        ? requestIdleCallback(lote, { timeout: 200 })
        : setTimeout(lote, 0);

    }, 20);
  }, 20);
}

/* ──────────────────────────────────────────────────────────
   CONSTRUIR FILAS DE PANEL POST-CONCILIACIÓN
────────────────────────────────────────────────────────── */
function construirFilasPaneles () {
  const { resSistema, resBanco } = S.resultado;

  S.paneles.sistema.filas = [...resSistema.values()].map(r => ({
    _uid:    r.fila._uid,
    _tipo:   r.estado,
    ref:     r.fila._refRaw,
    monto:   r.fila._monto,
    fecha:   r.fila._fechaRaw,
    desc:    r.fila._descRaw,
    cuenta:  r.fila._cuentaRaw,
    parRef:  r.par ? r.par._refRaw : '',
    difMonto:r.difMonto
  }));

  S.paneles.banco.filas = [...resBanco.values()].map(r => ({
    _uid:    r.fila._uid,
    _tipo:   r.estado,
    ref:     r.fila._refRaw,
    monto:   r.fila._monto,
    fecha:   r.fila._fechaRaw,
    desc:    r.fila._descRaw,
    cuenta:  r.fila._cuentaRaw,
    parRef:  r.par ? r.par._refRaw : '',
    difMonto:r.difMonto
  }));
}

/* ──────────────────────────────────────────────────────────
   NORMALIZACIÓN DE FILAS
────────────────────────────────────────────────────────── */
function normFila (fila, cfg, fuente) {
  _uid++;
  const f = { _uid, _fuente: fuente };

  let ref = String(fila[cfg.referencia] ?? '');
  if (S.config.normalizarRef) ref = ref.replace(/\s+/g,'').replace(/^0+/,'').toUpperCase();
  f._ref      = ref;
  f._monto    = parseMonto(String(fila[cfg.monto] ?? '0'), S.config.sepDecimal);
  f._fecha    = cfg.fecha        ? normFecha(String(fila[cfg.fecha] ?? ''))        : '';
  f._refRaw   = fila[cfg.referencia]  ?? '';
  f._montoRaw = fila[cfg.monto]       ?? '';
  f._fechaRaw = cfg.fecha        ? (fila[cfg.fecha]        ?? '') : '';
  f._descRaw  = cfg.descripcion  ? (fila[cfg.descripcion]  ?? '') : '';
  f._cuentaRaw= cfg.cuenta       ? (fila[cfg.cuenta]       ?? '') : '';
  return f;
}

function buildKey (f) {
  let k = f._ref;
  if (!S.config.ignorarFecha && f._fecha) k += '|' + f._fecha;
  return k;
}

function parseMonto (str, sep) {
  str = str.replace(/[$\s]/g, '');
  if (sep === ',') str = str.replace(/\./g,'').replace(',','.');
  else             str = str.replace(/,/g,'');
  return parseFloat(str) || 0;
}

function normFecha (str) {
  str = str.trim();
  if (/^\d{4}-\d{2}-\d{2}/.test(str)) return str.slice(0,10);
  const m = str.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/);
  if (m) return `${m[3]}-${m[2].padStart(2,'0')}-${m[1].padStart(2,'0')}`;
  return str.slice(0,10);
}

/* ──────────────────────────────────────────────────────────
   RENDER DE PANEL (paginado — máximo PAGE_SIZE filas en DOM)
────────────────────────────────────────────────────────── */
function renderPanel (tipo) {
  const estado  = S.paneles[tipo];
  const wrap    = document.getElementById(`tabla-${tipo}-wrap`);
  const emptyEl = document.getElementById(`empty-${tipo}`);
  const footer  = document.getElementById(`footer-${tipo}`);
  const pstatEl = document.getElementById(`pstat-${tipo}`);
  const infoBar = document.getElementById(`info-bar-${tipo}`);

  if (!S[tipo]) { if (emptyEl) emptyEl.style.display = ''; return; }
  if (emptyEl) emptyEl.style.display = 'none';

  const filasFiltradas = filtrarFilas(estado.filas, estado.filtro, estado.busqueda);

  // Info
  if (infoBar) infoBar.textContent = `${S[tipo].nombre} · ${S[tipo].filas.length.toLocaleString('es-MX')} reg.`;
  if (pstatEl) pstatEl.textContent = `${filasFiltradas.length.toLocaleString('es-MX')} mostrados`;

  // Paginación
  const totalFiltradas = filasFiltradas.length;
  const totalPags = Math.max(1, Math.ceil(totalFiltradas / PAGE_SIZE));
  if (estado.pag >= totalPags) estado.pag = 0;

  const ini    = estado.pag * PAGE_SIZE;
  const fin    = Math.min(ini + PAGE_SIZE, totalFiltradas);
  const pagina = filasFiltradas.slice(ini, fin);

  // Determinar si ya hay resultado de conciliación
  const conciliado = !!S.resultado;
  const parLabel   = tipo === 'sistema' ? 'Par en Banco' : 'Par en Sistema';

  // ── TABLA ──
  let html = '<table class="data-table"><thead><tr>';
  html += '<th style="width:110px">Estado</th>';
  html += '<th style="width:160px">Referencia</th>';
  html += '<th style="width:100px">Fecha</th>';
  html += '<th style="width:120px;text-align:right">Monto</th>';
  if (conciliado) html += '<th style="width:105px;text-align:right">Diferencia</th>';
  html += '<th>Descripción / Cuenta</th>';
  if (conciliado) html += `<th style="width:145px">${esc(parLabel)}</th>`;
  html += '</tr></thead><tbody>';

  if (pagina.length === 0) {
    html += `<tr><td colspan="7" style="text-align:center;padding:30px;color:var(--tx3)">
      Sin registros en esta vista</td></tr>`;
  } else {
    pagina.forEach(f => {
      const stClass = f._tipo==='match'   ? 'st-match'
                    : f._tipo==='pending' ? 'st-pending'
                    : f._tipo==='diff'    ? 'st-diff' : '';

      const badge = f._tipo==='match'
        ? '<span class="badge badge-match">✓ Conciliado</span>'
        : f._tipo==='pending'
        ? '<span class="badge badge-pending">⚠ Pendiente</span>'
        : f._tipo==='diff'
        ? '<span class="badge badge-diff">≠ Diferencia</span>'
        : '<span style="color:var(--tx3);font-size:.68rem">—</span>';

      const difHtml = (conciliado && f.difMonto !== null && f.difMonto !== undefined)
        ? `<span class="amount ${f.difMonto>0?'amount-pos':f.difMonto<0?'amount-neg':'amount-neu'}">${f.difMonto!==0?fmt(f.difMonto):'—'}</span>`
        : conciliado ? '—' : '';

      html += `<tr class="${stClass}">
        <td>${badge}</td>
        <td title="${esc(String(f.ref))}">${esc(String(f.ref).slice(0,22))}</td>
        <td>${esc(f.fecha)}</td>
        <td style="text-align:right"><span class="amount amount-neu">${fmt(f.monto)}</span></td>
        ${conciliado ? `<td style="text-align:right">${difHtml}</td>` : ''}
        <td style="color:var(--tx2)" title="${esc(f.desc||f.cuenta)}">${esc((f.desc||f.cuenta||'').slice(0,36))}</td>
        ${conciliado ? `<td style="color:var(--tx3);font-size:.7rem" title="${esc(String(f.parRef))}">${esc(String(f.parRef||'—').slice(0,22))}</td>` : ''}
      </tr>`;
    });
  }

  html += '</tbody></table>';
  wrap.innerHTML = html;

  // ── PAGINADOR ──
  if (footer) {
    footer.innerHTML = `
      <span class="pag-info">
        ${totalFiltradas.toLocaleString('es-MX')} registros
        ${estado.busqueda ? `(búsqueda de ${estado.filas.length.toLocaleString('es-MX')})` : ''}
      </span>
      <div class="pag-btns">
        <button class="pag-btn" onclick="cambiarPag('${tipo}',0)" ${estado.pag===0?'disabled':''}>«</button>
        <button class="pag-btn" onclick="cambiarPag('${tipo}',${estado.pag-1})" ${estado.pag===0?'disabled':''}>‹</button>
        <span class="pag-num">Pág ${estado.pag+1} / ${totalPags}</span>
        <button class="pag-btn" onclick="cambiarPag('${tipo}',${estado.pag+1})" ${estado.pag>=totalPags-1?'disabled':''}>›</button>
        <button class="pag-btn" onclick="cambiarPag('${tipo}',${totalPags-1})" ${estado.pag>=totalPags-1?'disabled':''}>»</button>
      </div>`;
  }
}

function cambiarPag (tipo, nuevaPag) {
  const estado = S.paneles[tipo];
  const filas  = filtrarFilas(estado.filas, estado.filtro, estado.busqueda);
  const total  = Math.max(1, Math.ceil(filas.length / PAGE_SIZE));
  estado.pag   = Math.max(0, Math.min(nuevaPag, total - 1));
  renderPanel(tipo);
}

/* ──────────────────────────────────────────────────────────
   FILTRADO DE FILAS (filtro + búsqueda + fechas)
────────────────────────────────────────────────────────── */
function filtrarFilas (filas, filtro, busqueda) {
  let f = filas;

  // Filtro de pestaña
  if (filtro === 'conciliado') f = f.filter(r => r._tipo === 'match');
  else if (filtro === 'pendiente') f = f.filter(r => r._tipo === 'pending' || r._tipo === 'diff');

  // Búsqueda de texto
  if (busqueda) {
    const b = busqueda.toLowerCase();
    f = f.filter(r =>
      (String(r.ref)+String(r.fecha)+String(r.monto)+String(r.desc)+String(r.cuenta)+String(r.parRef||''))
        .toLowerCase().includes(b)
    );
  }

  // Filtro de rango de fechas (solo si ambas están definidas y el registro tiene fecha)
  const desde = document.getElementById('fil-desde')?.value;
  const hasta = document.getElementById('fil-hasta')?.value;
  if (desde && hasta && hasta >= desde) {
    f = f.filter(r => {
      if (!r.fecha) return true;   // sin fecha → incluir
      const fn = normFecha(r.fecha);
      return !fn || (fn >= desde && fn <= hasta);
    });
  }

  // Filtro de cuenta
  const cuentaSel = document.getElementById('fil-cuenta')?.value;
  if (cuentaSel) {
    f = f.filter(r => r.cuenta === cuentaSel);
  }

  return f;
}

/* ──────────────────────────────────────────────────────────
   FILTROS DE PANEL Y BÚSQUEDA
────────────────────────────────────────────────────────── */
function initFilterBtns () {
  document.querySelectorAll('.pf-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const panel  = btn.dataset.panel;
      const filtro = btn.dataset.f;
      S.paneles[panel].filtro = filtro;
      S.paneles[panel].pag    = 0;
      btn.closest('.panel-filter-btns')
        .querySelectorAll('.pf-btn')
        .forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderPanel(panel);
    });
  });
}

const _tBusq = {};
function initPanelSearch () {
  ['sistema','banco'].forEach(tipo => {
    document.getElementById(`search-${tipo}`)?.addEventListener('input', e => {
      clearTimeout(_tBusq[tipo]);
      _tBusq[tipo] = setTimeout(() => {
        S.paneles[tipo].busqueda = e.target.value.toLowerCase();
        S.paneles[tipo].pag      = 0;
        renderPanel(tipo);
      }, 250); // Debounce: no recalcula en cada tecla
    });
  });
}

function aplicarFiltroFecha () {
  ['sistema','banco'].forEach(t => { S.paneles[t].pag = 0; renderPanel(t); });
}

/* ──────────────────────────────────────────────────────────
   TOTALES EN LA BARRA INFERIOR
────────────────────────────────────────────────────────── */
function actualizarTotales () {
  if (!S.resultado) return;
  const { resSistema, resBanco } = S.resultado;

  const vS = [...resSistema.values()];
  const vB = [...resBanco.values()];

  const totalSist  = sumar(vS.map(r => r.fila._monto));
  const totalBanco = sumar(vB.map(r => r.fila._monto));
  const concilCnt  = vS.filter(r => r.estado === 'match').length;
  const soloBanco  = vB.filter(r => r.estado === 'pending').length;
  const soloSist   = vS.filter(r => r.estado === 'pending').length;
  const diffs      = vS.filter(r => r.estado === 'diff').length;
  const brecha     = totalBanco - totalSist;

  setText('sum-sistema-total', fmt(totalSist));
  setText('sum-banco-total',   fmt(totalBanco));
  setText('sum-conciliados',   concilCnt.toLocaleString('es-MX'));
  setText('sum-solo-banco',    soloBanco.toLocaleString('es-MX'));
  setText('sum-solo-sistema',  soloSist.toLocaleString('es-MX'));
  setText('sum-diferencias',   diffs.toLocaleString('es-MX'));

  const brechaEl = document.getElementById('sum-brecha');
  if (brechaEl) {
    brechaEl.textContent = Math.abs(brecha) < 0.01 ? '✓ Sin brecha' : fmt(brecha);
    brechaEl.style.color = Math.abs(brecha) < 0.01 ? '#7debb5' : '#ffb07a';
  }
}

/* ──────────────────────────────────────────────────────────
   FILTRO DE CUENTA EN TOOLBAR
────────────────────────────────────────────────────────── */
function poblarFiltroCuenta (tipo) {
  const sel = document.getElementById('fil-cuenta');
  if (!sel || !S[tipo]) return;
  const cfg = S.config[tipo];
  if (!cfg.cuenta) return;
  const cuentas = [...new Set(S[tipo].filas.map(f => f[cfg.cuenta]).filter(Boolean))].sort();
  sel.innerHTML = '<option value="">..Todas</option>';
  cuentas.forEach(c => {
    const o = document.createElement('option');
    o.value = c; o.textContent = c;
    sel.appendChild(o);
  });
}

/* ──────────────────────────────────────────────────────────
   EXPORTAR CSV
────────────────────────────────────────────────────────── */
function exportarCSV () {
  if (!S.resultado) { toast('Concilia primero los archivos', 'error'); return; }
  const { resSistema, resBanco } = S.resultado;
  toast('Generando archivo CSV…', 'info');

  setTimeout(() => {
    const BOM = '\uFEFF';
    const cab = ['Fuente','Estado','Referencia','Fecha','Monto','Descripcion','Cuenta','Ref Par','Diferencia'];
    const lineas = [BOM + cab.join(',')];
    const lbl = { match:'Conciliado', pending:'Sin conciliar', diff:'Diferencia', bruto:'—' };

    const serializarFila = (r, fuente) => [
      fuente, lbl[r.estado] ?? r.estado,
      r.fila._refRaw, r.fila._fechaRaw,
      r.fila._monto.toFixed(2),
      r.fila._descRaw, r.fila._cuentaRaw,
      r.par ? r.par._refRaw : '',
      r.difMonto !== null && r.difMonto !== undefined ? r.difMonto.toFixed(2) : ''
    ].map(v => `"${String(v ?? '').replace(/"/g, '""')}"`).join(',');

    [...resSistema.values()].forEach(r => lineas.push(serializarFila(r, 'Sistema')));
    [...resBanco.values()].forEach(r   => lineas.push(serializarFila(r, 'Banco')));

    const blob = new Blob([lineas.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const a    = document.createElement('a');
    a.href     = URL.createObjectURL(blob);
    a.download = `conciliacion_${hoy()}.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
    toast('✓ Archivo exportado correctamente', 'success');
  }, 50);
}

/* ──────────────────────────────────────────────────────────
   DIVISOR REDIMENSIONABLE CON MOUSE
────────────────────────────────────────────────────────── */
function initDivisor () {
  const div  = document.getElementById('divider');
  const main = document.querySelector('.main-area');
  let drag = false, startY = 0, startH = 0;

  div?.addEventListener('mousedown', e => {
    drag   = true;
    startY = e.clientY;
    startH = document.getElementById('panel-sistema').offsetHeight;
    div.classList.add('dragging');
    document.body.style.cssText += 'cursor:row-resize;user-select:none';
  });

  document.addEventListener('mousemove', e => {
    if (!drag) return;
    const dy    = e.clientY - startY;
    const mainH = main.offsetHeight;
    const minH  = 100;
    const newH  = Math.max(minH, Math.min(mainH - minH - 12, startH + dy));
    document.getElementById('panel-sistema').style.flex = `0 0 ${newH}px`;
    document.getElementById('panel-banco').style.flex   = '1 1 0';
  });

  document.addEventListener('mouseup', () => {
    if (!drag) return;
    drag = false;
    div?.classList.remove('dragging');
    document.body.style.cursor    = '';
    document.body.style.userSelect= '';
  });
}

/* ──────────────────────────────────────────────────────────
   REINICIAR
────────────────────────────────────────────────────────── */
function reiniciar () {
  S.sistema = S.banco = S.resultado = null;

  ['sistema','banco'].forEach(t => {
    S.paneles[t] = { pag:0, filtro:'todos', busqueda:'', filas:[] };
    document.getElementById(`zona-${t}`)?.classList.remove('loaded');
    const info = document.getElementById(`info-${t}`);
    if (info) info.textContent = '';
    const prev = document.getElementById(`prev-${t}`);
    if (prev) prev.innerHTML = '';
    const inp  = document.getElementById(`input-${t}`);
    if (inp)   inp.value = '';
    const sec  = document.getElementById(`seccion-cols-${t}`);
    if (sec)   sec.style.display = 'none';
    const wrap = document.getElementById(`tabla-${t}-wrap`);
    if (wrap)  wrap.innerHTML = '';
    const emp  = document.getElementById(`empty-${t}`);
    if (emp)   { emp.style.display = ''; wrap.appendChild(emp); }
    const foot = document.getElementById(`footer-${t}`);
    if (foot)  foot.innerHTML = '';
    const ib   = document.getElementById(`info-bar-${t}`);
    if (ib)    ib.textContent = '';
    const ps   = document.getElementById(`pstat-${t}`);
    if (ps)    ps.textContent = '—';
  });

  document.getElementById('seccion-opciones').style.display = 'none';
  document.getElementById('btn-modal-ok').disabled = true;

  ['sum-sistema-total','sum-banco-total','sum-conciliados',
   'sum-solo-banco','sum-solo-sistema','sum-diferencias','sum-brecha'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.textContent = '—'; el.style.color = ''; }
  });

  actualizarBotones();
  setStatus('', 'Sin datos');
  toast('Herramienta reiniciada', 'info');
}

/* ──────────────────────────────────────────────────────────
   HELPERS GENERALES
────────────────────────────────────────────────────────── */
function actualizarBotones () {
  document.getElementById('btn-conciliar').disabled    = !(S.sistema && S.banco);
  document.getElementById('btn-export-excel').disabled = !S.resultado;
}

function setStatus (clase, txt) {
  const el = document.getElementById('status-badge');
  if (!el) return;
  el.className  = 'status-badge ' + (clase || '');
  el.textContent= txt;
}

function mostrarLoading (show, txt = '', pct = 0) {
  const ov  = document.getElementById('loading-overlay');
  const ltx = document.getElementById('loading-text');
  const lb  = document.getElementById('loading-bar');
  const lp  = document.getElementById('loading-pct');
  if (!ov) return;
  ov.classList.toggle('show', show);
  if (ltx) ltx.textContent = txt;
  if (lb)  lb.style.width  = pct + '%';
  if (lp)  lp.textContent  = pct + '%';
}

function toast (msg, tipo = 'info', dur = 4000) {
  const c = document.getElementById('toast-wrap');
  if (!c) return;
  const icons = { success:'✓', error:'✕', info:'ℹ' };
  const el    = document.createElement('div');
  el.className = `toast ${tipo}`;
  el.innerHTML = `<span class="toast-icon">${icons[tipo]}</span><span>${esc(msg)}</span>`;
  c.appendChild(el);
  setTimeout(() => {
    el.style.cssText = 'opacity:0;transform:translateX(60px);transition:all .3s';
    setTimeout(() => el.remove(), 300);
  }, dur);
}

function fmt (n) {
  if (n === null || n === undefined) return '—';
  return new Intl.NumberFormat('es-MX', {
    style: 'currency', currency: 'MXN', minimumFractionDigits: 2
  }).format(n);
}
function sumar (arr)    { return arr.reduce((a, b) => a + (b || 0), 0); }
function esc   (s)      { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function setText (id,v) { const e = document.getElementById(id); if (e) e.textContent = v; }
function hoy ()         { return new Date().toISOString().slice(0,10).replace(/-/g,''); }
