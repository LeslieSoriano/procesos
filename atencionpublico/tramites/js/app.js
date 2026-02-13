// ============================================================
// app.js - Lógica principal de la aplicación
// ============================================================

const PASSWORD = "admin123";
        const URL_MENU_PRINCIPAL = "../../indexmenu.html";

let modoEdicion = false, tramiteEnEdicion = null, accionPendiente = null;
        let imagenes = [], etapas = [], conceptos = [];

function guardarDatos() { try { localStorage.setItem('tramitesData', JSON.stringify(datos)); } catch(e) { try { localStorage.clear(); localStorage.setItem('tramitesData', JSON.stringify(datos)); } catch(e2) {} } }

        function getEstadoBadge(estado) {
            if (!estado) return '';
            const e = estado.toLowerCase();
            if (e.includes('agregar')) return '<span class="estado-badge estado-agregar">Agregar</span>';
            if (e.includes('modific')) return '<span class="estado-badge estado-modifico">Modificado</span>';
            if (e.includes('igual')) return '<span class="estado-badge estado-igual">Se queda igual</span>';
            if (e.includes('elimin')) return '<span class="estado-badge estado-eliminar">Eliminar</span>';
            return '<span class="estado-badge">' + estado + '</span>';
        }

        function renderizar() {
            const container = document.getElementById('categoriasContainer');
            const fn = document.getElementById('filtroNombre').value.toLowerCase();
            const fc = document.getElementById('filtroCategoria').value;
            container.innerHTML = '';
            datos.categorias.forEach(cat => {
                if (fc && cat.id != fc) return;
                const tf = cat.tramites.filter(t => t.nombre.toLowerCase().includes(fn) || t.descripcion.toLowerCase().includes(fn) || t.clave.toString().includes(fn));
                if (!tf.length) return;
                const d = document.createElement('div'); d.className = 'categoria';
                d.innerHTML = `<div class="categoria-header"><h2>${cat.nombre} (${tf.length})</h2></div><div class="categoria-content"><div class="tramites-grid"></div></div>`;
                const g = d.querySelector('.tramites-grid');
                tf.forEach(t => {
                    const c = document.createElement('div'); c.className = 'tramite-card';
                    const hasP = t.presupuesto && (t.presupuesto.conceptosObligatorios?.length || t.presupuesto.conceptosOpcionales?.length);
                    c.innerHTML = `<h3>${t.nombre} ${getEstadoBadge(t.estado)}</h3><p>${t.descripcion.substring(0,100)}${t.descripcion.length>100?'...':''}</p><div style="font-size:12px;color:#667eea;margin:10px 0;">📋 ${t.etapas.length} etapas | 🔑 ${t.clave}${hasP?' | 💰 Presupuesto':''}</div><div class="tramite-buttons"><button class="btn-ver" onclick="verTramite(${t.clave},${cat.id})">👁️ Ver</button><button class="btn-editar" onclick="editarTramite(${t.clave},${cat.id})">✏️ Editar</button><button class="btn-eliminar" onclick="eliminarTramite(${t.clave},${cat.id})">🗑️ Eliminar</button></div>`;
                    g.appendChild(c);
                });
                container.appendChild(d);
            });
        }

        function verTramite(clave, catId) {
            const cat = datos.categorias.find(c => c.id == catId);
            const t = cat.tramites.find(x => x.clave == clave);
            let h = `<h2>${t.nombre} ${getEstadoBadge(t.estado)}</h2>
                <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:15px;margin:20px 0;">
                    <div style="padding:10px;background:#f8fafb;border-radius:6px;"><strong>Clave:</strong> ${t.clave}</div>
                    <div style="padding:10px;background:#f8fafb;border-radius:6px;"><strong>Estado:</strong> ${t.estado}</div>
                    <div style="padding:10px;background:#f8fafb;border-radius:6px;"><strong>Categoría:</strong> ${cat.nombre}</div>
                    <div style="padding:10px;background:#f8fafb;border-radius:6px;"><strong>Filtros:</strong> ${t.filtros||'N/A'}</div>
                </div>
                <h3 style="margin-top:20px;color:#2c3e50;border-bottom:2px solid #667eea;padding-bottom:10px;">Descripción</h3>
                <p style="white-space:pre-line;">${t.descripcion}</p>
                <h3 style="margin-top:20px;color:#2c3e50;border-bottom:2px solid #667eea;padding-bottom:10px;">Requisitos</h3>
                <p style="white-space:pre-line;">${t.requisitos}</p>`;

            if (t.resultado) h += `<h3 style="margin-top:20px;color:#2c3e50;border-bottom:2px solid #667eea;padding-bottom:10px;">Resultado</h3><p style="white-space:pre-line;">${t.resultado}</p>`;

            if (t.etapas?.length) {
                h += '<h3 style="margin-top:20px;color:#2c3e50;border-bottom:2px solid #667eea;padding-bottom:10px;">📍 Etapas</h3>';
                t.etapas.forEach((e, i) => { h += `<p><strong>Etapa ${i+1}:</strong> ${e.nombre}${e.descripcion?' - '+e.descripcion:''}</p>`; });
            }

            // ✅ PRESUPUESTO CON CONCEPTOS OBLIGATORIOS Y OPCIONALES
            const p = t.presupuesto;
            if (p && (p.nombre || p.conceptosObligatorios?.length || p.conceptosOpcionales?.length)) {
                h += '<h3 style="margin-top:20px;color:#2c3e50;border-bottom:2px solid #667eea;padding-bottom:10px;">💰 Presupuesto</h3>';
                h += '<div class="presupuesto-section">';
                
                if (p.nombre) {
                    h += `<div class="presupuesto-title"><h4>📄 ${p.nombre}</h4>`;
                    if (p.negociable === 'SI') h += '<span class="badge-negociable">✅ Negociable</span>';
                    else if (p.negociable) h += '<span class="badge-no-negociable">🔒 No negociable</span>';
                    h += '</div>';
                }
                if (p.metodoPago) h += `<p style="color:#5a6c7d;font-size:13px;margin-bottom:12px;">📐 Método de cálculo: <strong>${p.metodoPago}</strong></p>`;

                // Conceptos obligatorios
                if (p.conceptosObligatorios?.length) {
                    h += '<h4 style="color:#2e7d32;margin:12px 0 8px;">🟢 Conceptos Obligatorios</h4>';
                    p.conceptosObligatorios.forEach(c => {
                        const imp = buscarImporte(c.clave);
                        h += `<div class="concepto-oblig"><span class="concepto-clave">${c.clave}</span>${c.nombre}${imp > 0 ? '<span class="concepto-importe">$' + imp.toLocaleString('es-MX', {minimumFractionDigits:2}) + '</span>' : ''}</div>`;
                    });
                }

                // Conceptos opcionales
                if (p.conceptosOpcionales?.length) {
                    h += '<h4 style="color:#e65100;margin:12px 0 8px;">🟡 Conceptos Opcionales</h4>';
                    p.conceptosOpcionales.forEach(c => {
                        const imp = buscarImporte(c.clave);
                        h += `<div class="concepto-opc"><span class="concepto-clave">${c.clave}</span>${c.nombre}${imp > 0 ? '<span class="concepto-importe">$' + imp.toLocaleString('es-MX', {minimumFractionDigits:2}) + '</span>' : ''}</div>`;
                    });
                }
                h += '</div>';
            }

            // Conceptos manuales (agregados por usuario)
            if (p?.conceptos?.length) {
                h += '<h4 style="margin-top:15px;">Conceptos adicionales</h4>';
                h += '<table class="tabla-presupuesto"><thead><tr><th>Concepto</th><th>Importe</th><th>Cant</th><th>Total</th></tr></thead><tbody>';
                let tot = 0;
                p.conceptos.forEach(c => { let st = c.importe*c.cantidad; if(c.multiplicar&&p.cantidadM3) st*=p.cantidadM3; tot+=st; h+=`<tr><td>${c.nombre}</td><td>$${c.importe.toFixed(2)}</td><td>${c.cantidad}</td><td>$${st.toFixed(2)}</td></tr>`; });
                h += `<tr class="total-row"><td colspan="3">TOTAL</td><td>$${tot.toFixed(2)}</td></tr></tbody></table>`;
            }

            if (t.imagenes?.length) {
                h += '<h3 style="margin-top:20px;">📸 Imágenes</h3><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:10px;">';
                t.imagenes.forEach(img => { h += `<img src="${img}" style="cursor:zoom-in;border-radius:6px;border:2px solid #e8eaff;max-width:100%;height:120px;object-fit:cover;" onclick="abrirZoom('${img}')">`; });
                h += '</div>';
            }
            document.getElementById('detalleContenido').innerHTML = h;
            document.getElementById('modalVer').style.display = 'block';
        }

        function cerrarModalVer() { document.getElementById('modalVer').style.display = 'none'; }
        function abrirAgregar() { modoEdicion=false; limpiarFormulario(); document.getElementById('tituloModal').textContent='➕ Agregar Trámite'; document.getElementById('modalEditar').style.display='block'; actualizarSelects(); }
        function actualizarSelects() { const s=document.getElementById('categoriaTramite'),f=document.getElementById('filtroCategoria'); s.innerHTML=''; f.innerHTML='<option value="">Todas</option>'; datos.categorias.forEach(c=>{s.innerHTML+=`<option value="${c.id}">${c.nombre}</option>`;f.innerHTML+=`<option value="${c.id}">${c.nombre}</option>`;}); }
        function limpiarFormulario() { ['nombreTramite','claveTramite','filtrosTramite','descripcionTramite','resultadoTramite','requisitosTramite','ordenesTrabajo'].forEach(id=>document.getElementById(id).value=''); document.getElementById('estadoTramite').value='Agregar'; document.getElementById('nombrePresupuesto').value=''; document.getElementById('cantidadM3').value=''; imagenes=[]; etapas=[{nombre:'',descripcion:''}]; conceptos=[]; renderizarEtapas();renderizarConceptos();renderizarImagenes();actualizarResumen(); document.getElementById('claveTramite').disabled=false; document.getElementById('categoriaTramite').disabled=false; }
        function cambiarTab(tab) { document.querySelectorAll('.tab-content').forEach(el=>el.classList.remove('active')); document.querySelectorAll('.tab').forEach(el=>el.classList.remove('active')); document.getElementById(tab).classList.add('active'); event.target.classList.add('active'); }
        function renderizarEtapas() { const c=document.getElementById('etapasContainer'); c.innerHTML=''; etapas.forEach((e,i)=>{c.innerHTML+=`<div style="margin-bottom:10px;padding:10px;background:#f8fafb;border-radius:6px;border:2px solid #e8eaff;"><label style="display:block;font-weight:600;margin-bottom:5px;">Etapa ${i+1}</label><input type="text" placeholder="Nombre" value="${e.nombre||''}" onchange="etapas[${i}].nombre=this.value;" style="width:100%;padding:8px;margin-bottom:5px;border:2px solid #e8eaff;border-radius:4px;"><input type="text" placeholder="Descripción" value="${e.descripcion||''}" onchange="etapas[${i}].descripcion=this.value;" style="width:100%;padding:8px;border:2px solid #e8eaff;border-radius:4px;"></div>`;}); }
        function agregarEtapa() { etapas.push({nombre:'',descripcion:''}); renderizarEtapas(); }
        function renderizarConceptos() { const c=document.getElementById('conceptosContainer'); c.innerHTML=''; conceptos.forEach((co,i)=>{ let opts='<option value="">-- Selecciona --</option>'; CONCEPTOS_DISPONIBLES.forEach(cd=>{opts+=`<option value="${cd.nombre}" ${co.nombre===cd.nombre?'selected':''}>${cd.clave} - ${cd.nombre} ($${cd.importe})</option>`;}); c.innerHTML+=`<div class="concepto-item"><select onchange="conceptos[${i}].nombre=this.value;actualizarResumen();">${opts}</select><input type="number" value="${co.importe||0}" step="0.01" onchange="conceptos[${i}].importe=parseFloat(this.value)||0;actualizarResumen();"><input type="number" value="${co.cantidad||1}" step="0.01" onchange="conceptos[${i}].cantidad=parseFloat(this.value)||1;actualizarResumen();"><label><input type="checkbox" ${co.multiplicar?'checked':''} onchange="conceptos[${i}].multiplicar=this.checked;actualizarResumen();">×m³</label><button class="btn-eliminar-concepto" onclick="conceptos.splice(${i},1);renderizarConceptos();actualizarResumen();">✕</button></div>`;}); }
        function agregarConcepto() { conceptos.push({nombre:'',importe:0,cantidad:1,multiplicar:false}); renderizarConceptos(); }
        function actualizarResumen() { const c=document.getElementById('resumenPresupuesto'); const m3=parseFloat(document.getElementById('cantidadM3').value)||0; let t=0; conceptos.forEach(co=>{let st=(co.importe||0)*(co.cantidad||1);if(co.multiplicar&&m3>0)st*=m3;t+=st;}); c.innerHTML=`<div class="resumen-fila"><span class="resumen-label">Conceptos:</span><span class="resumen-valor">${conceptos.length}</span></div><div class="resumen-total"><span class="resumen-label">TOTAL:</span><span class="resumen-valor">$${t.toFixed(2)}</span></div>`; }
        function agregarImagenes(e) { const f=Array.from(e.target.files); f.slice(0,5-imagenes.length).forEach(file=>{const r=new FileReader();r.onload=ev=>{imagenes.push(ev.target.result);renderizarImagenes();};r.readAsDataURL(file);}); }
        function renderizarImagenes() { const c=document.getElementById('imagenesContainer'); c.innerHTML=''; imagenes.forEach((img,i)=>{c.innerHTML+=`<div class="imagen-item"><img src="${img}" onclick="abrirZoom('${img}')"><button class="btn-eliminar-img" onclick="imagenes.splice(${i},1);renderizarImagenes();">✕</button></div>`;}); document.getElementById('contadorImagenes').textContent=`${imagenes.length}/5`; }
        function abrirZoom(s) { document.getElementById('zoomImg').src=s; document.getElementById('zoomModal').style.display='block'; }
        function cerrarZoom() { document.getElementById('zoomModal').style.display='none'; }
        function guardarTramite() { const n=document.getElementById('nombreTramite').value.trim(),cl=parseInt(document.getElementById('claveTramite').value),ci=parseInt(document.getElementById('categoriaTramite').value),d=document.getElementById('descripcionTramite').value.trim(),r=document.getElementById('requisitosTramite').value.trim(); if(!n||!cl||!ci||!d||!r){alert('Completa campos obligatorios');return;} const cat=datos.categorias.find(c=>c.id==ci); if(!modoEdicion&&cat.tramites.find(t=>t.clave==cl)){alert('Clave duplicada');return;} accionPendiente='guardar'; document.getElementById('passwordInput').value=''; document.getElementById('passwordModal').style.display='block'; }
        function verificarPassword() { if(document.getElementById('passwordInput').value!==PASSWORD){alert('Contraseña incorrecta');return;} if(accionPendiente==='eliminar'){const cat=datos.categorias.find(c=>c.id==tramiteEnEdicion.catId);const i=cat.tramites.findIndex(t=>t.clave==tramiteEnEdicion.clave);if(i!==-1){alert('✅ Eliminado: '+cat.tramites[i].nombre);cat.tramites.splice(i,1);}guardarDatos();cerrarPassword();renderizar();return;} const t={clave:parseInt(document.getElementById('claveTramite').value),nombre:document.getElementById('nombreTramite').value.trim(),estado:document.getElementById('estadoTramite').value,filtros:document.getElementById('filtrosTramite').value.trim(),descripcion:document.getElementById('descripcionTramite').value.trim(),resultado:document.getElementById('resultadoTramite').value.trim(),requisitos:document.getElementById('requisitosTramite').value.trim(),ordenesTrabajo:document.getElementById('ordenesTrabajo').value.split(',').map(o=>o.trim()).filter(o=>o),etapas:etapas.filter(e=>e.nombre.trim()),presupuesto:{nombre:document.getElementById('nombrePresupuesto').value?document.getElementById('nombrePresupuesto').options[document.getElementById('nombrePresupuesto').selectedIndex].text:'',cantidadM3:parseFloat(document.getElementById('cantidadM3').value)||0,conceptosObligatorios:[],conceptosOpcionales:[],conceptos},imagenes}; const ci=parseInt(document.getElementById('categoriaTramite').value); const cat=datos.categorias.find(c=>c.id==ci); if(modoEdicion){const old=cat.tramites.find(x=>x.clave==tramiteEnEdicion.clave); if(old?.presupuesto){t.presupuesto.conceptosObligatorios=old.presupuesto.conceptosObligatorios||[];t.presupuesto.conceptosOpcionales=old.presupuesto.conceptosOpcionales||[];t.presupuesto.negociable=old.presupuesto.negociable;t.presupuesto.metodoPago=old.presupuesto.metodoPago;} const idx=cat.tramites.findIndex(x=>x.clave==tramiteEnEdicion.clave);cat.tramites[idx]=t;alert('✅ Actualizado');} else{cat.tramites.push(t);alert('✅ Agregado');} guardarDatos();cerrarModalEditar();cerrarPassword();renderizar(); }
        function cerrarPassword() { document.getElementById('passwordModal').style.display='none'; }
        function editarTramite(clave,catId) { const cat=datos.categorias.find(c=>c.id==catId); const t=cat.tramites.find(x=>x.clave==clave); modoEdicion=true; tramiteEnEdicion={clave,catId}; document.getElementById('nombreTramite').value=t.nombre; document.getElementById('claveTramite').value=t.clave; document.getElementById('claveTramite').disabled=true; document.getElementById('estadoTramite').value=t.estado; document.getElementById('categoriaTramite').value=catId; document.getElementById('categoriaTramite').disabled=true; document.getElementById('filtrosTramite').value=t.filtros||''; document.getElementById('descripcionTramite').value=t.descripcion; document.getElementById('resultadoTramite').value=t.resultado||''; document.getElementById('requisitosTramite').value=t.requisitos; document.getElementById('ordenesTrabajo').value=(t.ordenesTrabajo||[]).join(', '); etapas=t.etapas?t.etapas.map(e=>({...e})):[{nombre:'',descripcion:''}]; imagenes=t.imagenes?[...t.imagenes]:[]; if(t.presupuesto){document.getElementById('cantidadM3').value=t.presupuesto.cantidadM3||'';conceptos=t.presupuesto.conceptos?t.presupuesto.conceptos.map(c=>({...c})):[];}else{conceptos=[];} renderizarEtapas();renderizarConceptos();renderizarImagenes();actualizarResumen(); document.getElementById('tituloModal').textContent='✏️ Editar Trámite'; document.getElementById('modalEditar').style.display='block'; }
        function eliminarTramite(clave,catId) { accionPendiente='eliminar'; tramiteEnEdicion={clave,catId}; document.getElementById('passwordInput').value=''; document.getElementById('passwordModal').style.display='block'; }
        function cerrarModalEditar() { document.getElementById('modalEditar').style.display='none'; modoEdicion=false; }
        function filtrar() { renderizar(); }
        function limpiarFiltros() { document.getElementById('filtroNombre').value=''; document.getElementById('filtroCategoria').value=''; renderizar(); }
        function cargarDatosIniciales() { localStorage.removeItem('tramitesData'); localStorage.setItem('tramitesVersion', 'v2_conceptos'); inicializarTramites(); actualizarSelects(); renderizar(); document.getElementById('btnCargarDatos').style.display='none'; alert('✅ '+datos.categorias.reduce((s,c)=>s+c.tramites.length,0)+' trámites cargados con conceptos obligatorios y opcionales'); }
        function descargarExcel() { let csv='\uFEFFClave,Nombre,Categoría,Estado,Descripción,Requisitos,Conceptos Obligatorios,Conceptos Opcionales,Etapas,Resultado\n'; datos.categorias.forEach(cat=>{cat.tramites.forEach(t=>{const ob=(t.presupuesto?.conceptosObligatorios||[]).map(c=>`(${c.clave}) ${c.nombre}`).join(' | ')||'N/A'; const op=(t.presupuesto?.conceptosOpcionales||[]).map(c=>`(${c.clave}) ${c.nombre}`).join(' | ')||'N/A'; const et=t.etapas.map((e,i)=>`${i+1}. ${e.nombre}`).join(' | ')||'N/A'; csv+=[t.clave,`"${t.nombre}"`,`"${cat.nombre}"`,`"${t.estado}"`,`"${t.descripcion.replace(/"/g,'""')}"`,`"${t.requisitos.replace(/"/g,'""')}"`,`"${ob.replace(/"/g,'""')}"`,`"${op.replace(/"/g,'""')}"`,`"${et.replace(/"/g,'""')}"`,`"${(t.resultado||'').replace(/"/g,'""')}"`].join(',')+`\n`;});}); const b=new Blob([csv],{type:'text/csv;charset=utf-8;'}); const l=document.createElement('a'); l.href=URL.createObjectURL(b); l.download=`tramites_2026_${new Date().toISOString().split('T')[0]}.csv`; document.body.appendChild(l); l.click(); document.body.removeChild(l); }
        function solicitarSalir() { const p=prompt('🔐 Contraseña:'); if(p===null)return; if(p!==PASSWORD){alert('❌ Incorrecta');return;} document.body.innerHTML='<div style="display:flex;justify-content:center;align-items:center;height:100vh;background:linear-gradient(135deg,#667eea,#764ba2);color:white;font-size:24px;font-weight:bold;">Sesión finalizada.</div>'; }
        function volverAlMenu() { document.getElementById('modalMenuPrincipal').style.display='block'; document.getElementById('inputPasswordMenu').value=''; document.getElementById('errorMsgMenu').style.display='none'; }
        function cerrarModalMenu() { document.getElementById('modalMenuPrincipal').style.display='none'; }
        function verificarPasswordMenu() { if(document.getElementById('inputPasswordMenu').value===PASSWORD){document.getElementById('modalMenuPrincipal').style.display='none';window.location.href=URL_MENU_PRINCIPAL;}else{document.getElementById('errorMsgMenu').textContent='❌ Incorrecta';document.getElementById('errorMsgMenu').style.display='block';document.getElementById('inputPasswordMenu').value='';} }
        document.addEventListener('DOMContentLoaded',()=>{document.getElementById('inputPasswordMenu')?.addEventListener('keypress',e=>{if(e.key==='Enter')verificarPasswordMenu();});});
        // Datos originales del código fuente (respaldo)
        const DATOS_ORIGINALES = JSON.parse(JSON.stringify(datos));

        // Sincronizar TODOS los campos del código fuente con los datos del localStorage
        // Esto garantiza que cualquier cambio en datos.js se refleje aunque haya localStorage
        function fusionarDatos(datosActuales) {
            DATOS_ORIGINALES.categorias.forEach(catOrig => {
                const catAct = datosActuales.categorias.find(c => c.id === catOrig.id);
                if (!catAct) return;
                catOrig.tramites.forEach(tOrig => {
                    const tAct = catAct.tramites.find(t => t.clave === tOrig.clave);
                    if (!tAct) return;
                    // Sincronizar TODOS los campos del código fuente
                    tAct.nombre = tOrig.nombre;
                    tAct.estado = tOrig.estado;
                    tAct.descripcion = tOrig.descripcion;
                    tAct.requisitos = tOrig.requisitos;
                    tAct.etapas = tOrig.etapas;
                    tAct.filtros = tOrig.filtros;
                    tAct.resultado = tOrig.resultado;
                    // Presupuesto completo del código fuente
                    if (tOrig.presupuesto) {
                        if (!tAct.presupuesto) tAct.presupuesto = {};
                        tAct.presupuesto.nombre = tOrig.presupuesto.nombre || tAct.presupuesto.nombre;
                        tAct.presupuesto.metodoPago = tOrig.presupuesto.metodoPago || tAct.presupuesto.metodoPago;
                        tAct.presupuesto.negociable = tOrig.presupuesto.negociable || tAct.presupuesto.negociable;
                        tAct.presupuesto.conceptosObligatorios = tOrig.presupuesto.conceptosObligatorios || [];
                        tAct.presupuesto.conceptosOpcionales = tOrig.presupuesto.conceptosOpcionales || [];
                    }
                    // Conservar del localStorage: imágenes y conceptos manuales del usuario
                    // (esos son datos que el usuario agrega desde la interfaz)
                });
            });
        }

        window.onload = function() {
            // SIEMPRE partir de los datos del archivo datos.js
            // Solo rescatar del localStorage: imágenes y conceptos manuales que el usuario haya agregado
            const s = localStorage.getItem('tramitesData');
            if (s) {
                try {
                    const datosGuardados = JSON.parse(s);
                    // Rescatar solo datos del USUARIO (imágenes, conceptos manuales)
                    datosGuardados.categorias.forEach(catG => {
                        const catD = datos.categorias.find(c => c.id === catG.id);
                        if (!catD) return;
                        catG.tramites.forEach(tG => {
                            const tD = catD.tramites.find(t => t.clave === tG.clave);
                            if (!tD) return;
                            // Solo rescatar lo que el usuario agrega desde la interfaz
                            if (tG.imagenes && tG.imagenes.length) tD.imagenes = tG.imagenes;
                            if (tG.presupuesto && tG.presupuesto.conceptos && tG.presupuesto.conceptos.length) {
                                if (!tD.presupuesto) tD.presupuesto = {};
                                tD.presupuesto.conceptos = tG.presupuesto.conceptos;
                            }
                        });
                    });
                } catch(e) {}
            }
            guardarDatos();
            actualizarSelects();
            renderizar();
            const t = datos.categorias.reduce((s,c) => s + (c.tramites ? c.tramites.length : 0), 0);
            if (t > 0) document.getElementById('btnCargarDatos').style.display = 'none';
        };