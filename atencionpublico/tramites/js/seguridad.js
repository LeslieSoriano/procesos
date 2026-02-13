// ============================================================
// seguridad.js - Protecciones anti-inspección
// ============================================================

document.addEventListener('contextmenu', e => { e.preventDefault(); return false; });
        document.addEventListener('keydown', e => { if(e.key==='F12'||(e.ctrlKey&&e.shiftKey&&'ICJK'.includes(e.key))||(e.ctrlKey&&e.key==='u')){e.preventDefault();return false;} });
        document.addEventListener('copy', e => { e.preventDefault(); return false; });
        document.addEventListener('selectstart', e => { e.preventDefault(); return false; });
        document.body.style.userSelect = 'none';
        history.pushState(null, null, window.location.href);
        window.addEventListener('popstate', () => { history.pushState(null, null, window.location.href); });