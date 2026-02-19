// ============================================================
//  COMPARADOR DE ARCHIVOS EXCEL — comparador.js
//  Optimizado para archivos pesados (varios MB)
// ============================================================

const CONTRASEÑA_CORRECTA = '013201';

// Límite de filas que se renderizan en pantalla (para no bloquear el DOM)
// El resto igual se descarga completo en Excel
const MAX_RENDER = 500;

let file1Data  = null;
let file2Data  = null;
let allData1   = null;
let allData2   = null;
let currentComparison = null;

// ============================================================
//  BLOQUEOS DE SEGURIDAD (sin debugger → ese era el bug)
// ============================================================
window.history.pushState(null, null, window.location.href);
window.addEventListener('popstate', () => {
    window.history.pushState(null, null, window.location.href);
});

window.addEventListener('beforeunload', (e) => {
    e.preventDefault();
    e.returnValue = '';
    return '';
});

// Bloquear clic derecho
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    showWarning('⚠️ Acceso denegado');
    return false;
});

// Bloquear atajos de herramientas de desarrollo
document.addEventListener('keydown', (e) => {
    const bloqueados = [
        e.keyCode === 123,                               // F12
        e.ctrlKey && e.shiftKey && e.keyCode === 73,    // Ctrl+Shift+I
        e.ctrlKey && e.shiftKey && e.keyCode === 74,    // Ctrl+Shift+J
        e.ctrlKey && e.shiftKey && e.keyCode === 67,    // Ctrl+Shift+C
        e.ctrlKey && e.keyCode === 85,                  // Ctrl+U
    ];
    if (bloqueados.some(Boolean)) {
        e.preventDefault();
        return false;
    }
});

// ============================================================
//  INICIALIZACIÓN
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    setupFileUpload(1);
    setupFileUpload(2);
});

// ============================================================
//  CONFIGURACIÓN DE ZONAS DE CARGA (drag & drop + click)
// ============================================================
function setupFileUpload(fileNumber) {
    const uploadArea = document.getElementById(`uploadArea${fileNumber}`);
    const fileInput  = document.getElementById(`fileInput${fileNumber}`);

    // Click en el área (evita abrir el diálogo si ya hay archivo)
    uploadArea.addEventListener('click', () => {
        const yaHayArchivo = (fileNumber === 1 && file1Data) || (fileNumber === 2 && file2Data);
        if (!yaHayArchivo) fileInput.click();
    });

    // Drag over
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        const yaHayArchivo = (fileNumber === 1 && file1Data) || (fileNumber === 2 && file2Data);
        if (!yaHayArchivo) uploadArea.classList.add('dragover');
    });

    uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('dragover'));

    // Drop
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        const file = e.dataTransfer.files[0];
        if (file) handleFile(file, fileNumber);
    });

    // Selección normal
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) handleFile(file, fileNumber);
    });
}

// ============================================================
//  LECTURA DE ARCHIVOS
//  Se usa setTimeout(fn, 0) para ceder el hilo al navegador
//  entre la lectura y el parseo, así no congela la UI
// ============================================================
function handleFile(file, fileNumber) {
    // Mostrar progreso de lectura
    mostrarProgreso(`Leyendo ${file.name}...`, 10);

    const reader = new FileReader();

    reader.onload = function(e) {
        // Ceder el hilo antes del parseo (operación pesada)
        setTimeout(() => {
            try {
                actualizarProgreso(40, `Procesando hoja de cálculo...`);

                // { dense: true } usa arrays en lugar de objetos → menos memoria
                const data     = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array', dense: true });
                const sheet    = workbook.Sheets[workbook.SheetNames[0]];

                // header:1 → primera fila como encabezados, resto como arrays
                const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '' });

                actualizarProgreso(80, `Archivo listo (${jsonData.length - 1} filas)`);

                if (fileNumber === 1) {
                    allData1  = jsonData;
                    file1Data = file;
                    document.getElementById('fileName1').textContent = `📄 ${file.name} (${jsonData.length - 1} filas)`;
                } else {
                    allData2  = jsonData;
                    file2Data = file;
                    document.getElementById('fileName2').textContent = `📄 ${file.name} (${jsonData.length - 1} filas)`;
                }

                actualizarProgreso(100, '✅ Archivo cargado');

                // Si ambos archivos están listos, mostrar selector de columnas
                if (file1Data && file2Data) {
                    setTimeout(() => {
                        ocultarProgreso();
                        populateColumnSelectors();
                    }, 400);
                } else {
                    setTimeout(ocultarProgreso, 800);
                }

            } catch (error) {
                ocultarProgreso();
                showError(`Error al leer archivo ${fileNumber}: ${error.message}`);
            }
        }, 0); // setTimeout(0) → cede el hilo antes de parsear
    };

    reader.onerror = () => {
        ocultarProgreso();
        showError(`No se pudo leer el archivo ${fileNumber}.`);
    };

    reader.readAsArrayBuffer(file);
}

// ============================================================
//  SELECTOR DE COLUMNAS
// ============================================================
function populateColumnSelectors() {
    const cont1    = document.getElementById('columns1');
    const cont2    = document.getElementById('columns2');
    const headers1 = allData1[0] || [];
    const headers2 = allData2[0] || [];

    cont1.innerHTML = '';
    cont2.innerHTML = '';

    headers1.forEach((header, index) => {
        cont1.appendChild(crearCheckbox(`col1_${index}`, index, header || `Columna ${index + 1}`));
    });

    headers2.forEach((header, index) => {
        cont2.appendChild(crearCheckbox(`col2_${index}`, index, header || `Columna ${index + 1}`));
    });

    document.getElementById('columnSelector').classList.add('active');
}

// Genera un elemento <div class="checkbox-item">
function crearCheckbox(id, value, label) {
    const div = document.createElement('div');
    div.className = 'checkbox-item';
    div.innerHTML = `
        <input type="checkbox" id="${id}" value="${value}">
        <label for="${id}">${label}</label>
    `;
    return div;
}

// ============================================================
//  COMPARACIÓN OPTIMIZADA CON Set (O(n) en vez de O(n²))
//
//  LÓGICA:
//  1. Convierte data2 a un Set de strings "val1|val2|..."
//  2. Por cada fila de data1, busca en el Set → O(1) por búsqueda
//  3. Resultado final: O(n + m) en vez de O(n * m)
//
//  Ejemplo con 10,000 filas c/u:
//    Antes: 10,000 × 10,000 = 100,000,000 operaciones  ← se traba
//    Ahora: 10,000 + 10,000 = 20,000 operaciones       ← instantáneo
// ============================================================
function compareFiles() {
    const selCols1 = getSelectedColumns('#columns1', allData1);
    const selCols2 = getSelectedColumns('#columns2', allData2);

    if (selCols1.length === 0 || selCols2.length === 0) {
        showError('Debes seleccionar al menos una columna de cada archivo.');
        return;
    }

    mostrarProgreso('Preparando datos...', 5);

    // Ceder el hilo antes de procesar (archivos grandes)
    setTimeout(() => {
        try {
            // Extraer solo las columnas seleccionadas (saltamos la fila de encabezados con slice(1))
            actualizarProgreso(20, 'Extrayendo columnas...');
            const data1 = allData1.slice(1).map(row => selCols1.map(col => String(row[col.index] ?? '')));
            const data2 = allData2.slice(1).map(row => selCols2.map(col => String(row[col.index] ?? '')));

            // Convertir data2 a un Set para búsquedas O(1)
            actualizarProgreso(40, 'Indexando archivo 2...');
            const set2 = new Map(); // key: "val1|val2", value: conteo de veces que aparece

            data2.forEach((row) => {
                const key = row.join('|');
                set2.set(key, (set2.get(key) || 0) + 1);
            });

            // Convertir data1 a Map también
            actualizarProgreso(55, 'Indexando archivo 1...');
            const set1 = new Map();
            data1.forEach((row) => {
                const key = row.join('|');
                set1.set(key, (set1.get(key) || 0) + 1);
            });

            actualizarProgreso(70, 'Buscando coincidencias...');

            const matches     = [];
            const differences = [];

            // Buscar coincidencias: filas que están en set1 Y en set2
            set1.forEach((count1, key) => {
                if (set2.has(key)) {
                    const row = key.split('|');
                    matches.push({ row1: row, row2: row, count: Math.min(count1, set2.get(key)) });
                }
            });

            actualizarProgreso(85, 'Calculando diferencias...');

            // Diferencias: filas de data1 que NO están en data2
            set1.forEach((count, key) => {
                if (!set2.has(key)) {
                    differences.push({ row: key.split('|'), source: 'archivo1', count });
                }
            });

            // Diferencias: filas de data2 que NO están en data1
            set2.forEach((count, key) => {
                if (!set1.has(key)) {
                    differences.push({ row: key.split('|'), source: 'archivo2', count });
                }
            });

            actualizarProgreso(95, 'Mostrando resultados...');

            currentComparison = { selCols1, selCols2, matches, differences };

            setTimeout(() => {
                ocultarProgreso();
                displayResults(currentComparison);
            }, 200);

        } catch (err) {
            ocultarProgreso();
            showError(`Error durante la comparación: ${err.message}`);
        }
    }, 0);
}

// Obtiene las columnas seleccionadas con su índice y encabezado
function getSelectedColumns(selector, data) {
    return Array.from(document.querySelectorAll(`${selector} input[type="checkbox"]:checked`)).map(cb => ({
        index : parseInt(cb.value),
        header: data[0][parseInt(cb.value)] || `Col ${parseInt(cb.value) + 1}`
    }));
}

// ============================================================
//  MOSTRAR RESULTADOS
//  Renderiza máximo MAX_RENDER filas para no bloquear el DOM
//  El Excel de descarga incluye TODOS los datos
// ============================================================
function displayResults(results) {
    document.getElementById('totalMatches').textContent     = results.matches.length.toLocaleString();
    document.getElementById('totalDifferences').textContent = results.differences.length.toLocaleString();

    const list = document.getElementById('comparisonList');
    list.innerHTML = '';

    if (results.matches.length === 0 && results.differences.length === 0) {
        list.innerHTML = '<div class="no-results">✅ No hay datos para comparar</div>';
    } else {
        // Fragment para hacer una sola inserción al DOM (más rápido)
        const fragment = document.createDocumentFragment();

        // Coincidencias
        const matchLimit = Math.min(results.matches.length, MAX_RENDER);
        results.matches.slice(0, matchLimit).forEach((item, idx) => {
            fragment.appendChild(crearItemCoincidencia(item, idx, results));
        });

        // Diferencias
        const diffLimit = Math.min(results.differences.length, MAX_RENDER - matchLimit);
        results.differences.slice(0, Math.max(0, diffLimit)).forEach((item) => {
            fragment.appendChild(crearItemDiferencia(item, results));
        });

        list.appendChild(fragment);

        // Aviso si se cortó el renderizado
        const totalRender = matchLimit + Math.max(0, diffLimit);
        const totalItems  = results.matches.length + results.differences.length;
        if (totalItems > MAX_RENDER) {
            const aviso = document.createElement('div');
            aviso.className = 'more-results-notice';
            aviso.textContent = `⚠️ Se muestran ${totalRender.toLocaleString()} de ${totalItems.toLocaleString()} resultados. Descarga el Excel para ver todos.`;
            list.appendChild(aviso);
        }
    }

    document.getElementById('results').classList.add('active');
}

function crearItemCoincidencia(item, idx, results) {
    const div = document.createElement('div');
    div.className = 'comparison-item match';
    div.innerHTML = `
        <div class="item-label">✅ Coincidencia ${idx + 1} (aparece ${item.count} vez/veces)</div>
        <div class="item-content">
            <div class="item-column">
                <strong>Archivo 1:</strong>
                ${item.row1.map((val, i) => `<div>${results.selCols1[i]?.header}: ${val}</div>`).join('')}
            </div>
            <div class="item-column">
                <strong>Archivo 2:</strong>
                ${item.row2.map((val, i) => `<div>${results.selCols2[i]?.header}: ${val}</div>`).join('')}
            </div>
        </div>
    `;
    return div;
}

function crearItemDiferencia(item, results) {
    const div    = document.createElement('div');
    div.className = 'comparison-item';
    const source = item.source === 'archivo1' ? 'Archivo 1' : 'Archivo 2';
    const cols   = item.source === 'archivo1' ? results.selCols1 : results.selCols2;
    div.innerHTML = `
        <div class="item-label">❌ Solo en ${source} — aparece ${item.count} vez/veces</div>
        <div class="item-column">
            <strong>${source}:</strong>
            ${item.row.map((val, i) => `<div>${cols[i]?.header}: ${val}</div>`).join('')}
        </div>
    `;
    return div;
}

// ============================================================
//  DESCARGA DE RESULTADOS (TODOS los datos, sin límite)
// ============================================================
function downloadResults() {
    if (!currentComparison) return;

    mostrarProgreso('Generando Excel...', 30);

    setTimeout(() => {
        try {
            const { selCols1, selCols2, matches, differences } = currentComparison;

            const rows = [];

            // Encabezado de coincidencias
            rows.push(['TIPO', ...selCols1.map(c => `${c.header} (Archivo 1)`), ...selCols2.map(c => `${c.header} (Archivo 2)`), 'REPETICIONES']);

            matches.forEach(item => {
                rows.push(['✅ Coincidencia', ...item.row1, ...item.row2, item.count]);
            });

            // Separador
            rows.push([]);
            rows.push(['TIPO', 'FUENTE', 'REPETICIONES', ...selCols1.map(c => c.header)]);

            differences.forEach(item => {
                const fuente = item.source === 'archivo1' ? 'Archivo 1' : 'Archivo 2';
                rows.push(['❌ Diferencia', fuente, item.count, ...item.row]);
            });

            actualizarProgreso(70, 'Escribiendo archivo...');

            const ws = XLSX.utils.aoa_to_sheet(rows);
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, 'Comparación');

            actualizarProgreso(95, 'Descargando...');
            XLSX.writeFile(wb, 'resultados_comparacion.xlsx');

            setTimeout(() => {
                ocultarProgreso();
                showSuccess('✅ Archivo descargado correctamente');
            }, 300);

        } catch (err) {
            ocultarProgreso();
            showError(`Error al generar Excel: ${err.message}`);
        }
    }, 0);
}

// ============================================================
//  RESET
// ============================================================
function resetFiles() {
    file1Data  = null;
    file2Data  = null;
    allData1   = null;
    allData2   = null;
    currentComparison = null;

    document.getElementById('fileInput1').value  = '';
    document.getElementById('fileInput2').value  = '';
    document.getElementById('fileName1').textContent = '';
    document.getElementById('fileName2').textContent = '';
    document.getElementById('columnSelector').classList.remove('active');
    document.getElementById('results').classList.remove('active');
    ocultarProgreso();
}

// ============================================================
//  BARRA DE PROGRESO
// ============================================================
function mostrarProgreso(texto, porcentaje) {
    const cont = document.getElementById('progressContainer');
    cont.classList.add('active');
    actualizarProgreso(porcentaje, texto);
}

function actualizarProgreso(porcentaje, texto) {
    document.getElementById('progressBar').style.width    = `${porcentaje}%`;
    document.getElementById('progressStatus').textContent = texto;
}

function ocultarProgreso() {
    document.getElementById('progressContainer').classList.remove('active');
    document.getElementById('progressBar').style.width    = '0%';
    document.getElementById('progressStatus').textContent = '';
}

// ============================================================
//  MENSAJES
// ============================================================
function showError(msg)   { showMessage(msg, 'error'); }
function showSuccess(msg) { showMessage(msg, 'success'); }
function showWarning(msg) { showMessage(msg, 'error'); }

function showMessage(msg, type) {
    const div = document.createElement('div');
    div.className = type;
    div.textContent = msg;
    document.querySelector('.container').appendChild(div);
    setTimeout(() => div.remove(), 5000);
}

// ============================================================
//  MODAL CONTRASEÑA
// ============================================================
function solicitarContraseña() {
    document.getElementById('modalContraseña').classList.add('active');
    document.getElementById('inputContraseña').value = '';
    document.getElementById('errorMsg').style.display = 'none';
    document.getElementById('inputContraseña').focus();
}

function verificarContraseña() {
    const input    = document.getElementById('inputContraseña').value;
    const errorMsg = document.getElementById('errorMsg');

    if (input === CONTRASEÑA_CORRECTA) {
        document.getElementById('modalContraseña').classList.remove('active');
        window.location.href = '../indexmenu.html';
    } else {
        errorMsg.textContent   = '❌ Contraseña incorrecta. Intenta nuevamente.';
        errorMsg.style.display = 'block';
        document.getElementById('inputContraseña').value = '';
        document.getElementById('inputContraseña').focus();
    }
}

function cancelarAcceso() {
    document.getElementById('modalContraseña').classList.remove('active');
    document.getElementById('inputContraseña').value = '';
    document.getElementById('errorMsg').style.display = 'none';
}
