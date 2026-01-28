/**
 * Archivo de ejemplo para demostrar gestión de tareas pendientes
 * Este archivo muestra cómo marcar y resolver TODOs en código
 */

// Utilidades de validación
const Validaciones = {

    // Validación de email con expresión regular
    validarEmail: function(email) {
        if (!email) return false;
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(email.trim());
    },

    // Validación de teléfono mexicano (10 dígitos)
    validarTelefono: function(telefono) {
        if (!telefono) return false;
        // Remover espacios, guiones y paréntesis
        const soloNumeros = telefono.replace(/[\s\-\(\)]/g, '');
        // Verificar que sean exactamente 10 dígitos
        return /^\d{10}$/.test(soloNumeros);
    },

    // Validación de texto no vacío (ya implementada)
    validarTextoNoVacio: function(texto) {
        return texto && texto.trim().length > 0;
    }
};

// Calcula el porcentaje con manejo de casos especiales
function calcularPorcentaje(valor, total) {
    // Validar que total no sea cero para evitar división por cero
    if (total === 0) return 0;
    // Usar valores absolutos para manejar negativos correctamente
    const resultado = (Math.abs(valor) / Math.abs(total)) * 100;
    return Math.round(resultado * 100) / 100; // Redondear a 2 decimales
}

// Exportar módulo
if (typeof module !== 'undefined') {
    module.exports = { Validaciones, calcularPorcentaje };
}
