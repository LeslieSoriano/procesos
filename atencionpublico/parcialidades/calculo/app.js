/* ============================================================
   app.js — Calculadora de Parcialidades SSCA
   ============================================================ */

// ── Formatters ──────────────────────────────────────────────
const fmt  = v => '$' + v.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const fmtN = v =>       v.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

// ── Helpers de UI ───────────────────────────────────────────
function mostrarError(msg) {
  const el = document.getElementById('errorMsg');
  el.textContent  = msg;
  el.style.display = 'block';
}

function ocultarError() {
  document.getElementById('errorMsg').style.display = 'none';
}

// ── Función principal ────────────────────────────────────────
function calcular() {
  ocultarError();

  // Leer valores del formulario
  const deuda    = parseFloat(document.getElementById('deuda').value);
  const anticipo = parseFloat(document.getElementById('anticipo').value);
  const numParc  = parseInt(document.getElementById('parcialidades').value);
  const tasaPct  = parseFloat(document.getElementById('tasa').value); // fija 1.26

  // ── Validaciones ─────────────────────────────────────────
  if (isNaN(deuda)    || deuda <= 0)    return mostrarError('Ingresa un monto de deuda válido.');
  if (isNaN(anticipo) || anticipo < 0)  return mostrarError('Ingresa un anticipo válido.');
  if (anticipo >= deuda)                return mostrarError('El anticipo no puede ser igual o mayor a la deuda total.');

  const pctAnticipo = (anticipo / deuda) * 100;
  if (pctAnticipo < 20) return mostrarError(`El anticipo (${pctAnticipo.toFixed(1)}%) es menor al mínimo requerido del 20%.`);
  if (isNaN(numParc) || numParc < 1)    return mostrarError('Ingresa un número de parcialidades válido (mínimo 1).');

  // ── Cálculos base ────────────────────────────────────────
  const tasa       = tasaPct / 100;          // 0.0126
  const saldoFin   = deuda - anticipo;       // monto a financiar
  const capitalFijo = saldoFin / numParc;    // capital igual cada mes

  // ── Llenar tarjetas de resumen ───────────────────────────
  document.getElementById('s-deuda').textContent    = fmt(deuda);
  document.getElementById('s-anticipo').textContent = fmt(anticipo) + ` (${pctAnticipo.toFixed(1)}%)`;
  document.getElementById('s-saldo').textContent    = fmt(saldoFin);
  document.getElementById('s-capital').textContent  = fmt(capitalFijo);
  document.getElementById('labelParcialidades').textContent = `${numParc} parcialidad${numParc > 1 ? 'es' : ''}`;

  // ── Caja de fórmulas ─────────────────────────────────────
  document.getElementById('formulaBox').innerHTML = `
    <span class="hl2">// Fórmulas aplicadas</span><br>
    Capital fijo &nbsp;&nbsp;&nbsp;= Saldo financiado ÷ Parcialidades = <span class="hl">${fmt(saldoFin)}</span> ÷ ${numParc} = <span class="hl">${fmt(capitalFijo)}</span><br>
    Interés mensual = Saldo insoluto × ${tasaPct}% = Saldo insoluto × <span class="hl">0.${tasaPct.toString().replace('.','').padEnd(4,'0')}</span><br>
    Total parcialidad = Capital + Interés
  `;

  // ── Generar filas de la tabla ────────────────────────────
  const tbody = document.getElementById('tablaBody');
  tbody.innerHTML = '';

  let saldo          = saldoFin;
  let totalIntereses = 0;
  let totalCapital   = 0;
  let totalGeneral   = 0;

  for (let i = 1; i <= numParc; i++) {
    const esUltima  = (i === numParc);
    const capActual = esUltima ? saldo : capitalFijo; // última parcialidad toma el resto exacto
    const interes   = saldo * tasa;                   // 1.26% sobre saldo insoluto actual
    const total     = capActual + interes;

    totalIntereses += interes;
    totalCapital   += capActual;
    totalGeneral   += total;

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><span class="badge-num">${i}</span></td>
      <td>${fmt(saldo)}</td>
      <td>${fmt(capActual)}</td>
      <td class="formula-cell">
        ${fmtN(saldo)} <span class="op">×</span> ${tasaPct}% <span class="op">=</span> <span class="res">${fmtN(interes)}</span>
      </td>
      <td style="color:var(--accent)">${fmt(interes)}</td>
      <td style="color:var(--text);font-weight:600">${fmt(total)}</td>
    `;
    tbody.appendChild(tr);

    saldo -= capActual;
    if (saldo < 0.01) saldo = 0; // evitar residuos de punto flotante
  }

  // ── Fila de totales ──────────────────────────────────────
  const trTotal = document.createElement('tr');
  trTotal.className = 'total-row';
  trTotal.innerHTML = `
    <td colspan="2" style="text-align:left;padding-left:1rem;font-family:'Sora',sans-serif;font-size:0.8rem;letter-spacing:0.05em;text-transform:uppercase">TOTALES</td>
    <td>${fmt(totalCapital)}</td>
    <td class="formula-cell"></td>
    <td style="color:var(--accent)">${fmt(totalIntereses)}</td>
    <td style="color:var(--accent2)">${fmt(totalGeneral)}</td>
  `;
  tbody.appendChild(trTotal);

  // ── Actualizar stats de intereses y gran total ───────────
  document.getElementById('s-intereses').textContent = fmt(totalIntereses);
  document.getElementById('s-total').textContent     = fmt(anticipo + totalGeneral);

  // ── Mostrar sección de resultados ────────────────────────
  const resumen = document.getElementById('resumen');
  resumen.style.display = 'block';
  resumen.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── Atajo de teclado: Enter para calcular ────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Enter') calcular();
});
