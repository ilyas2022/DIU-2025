// App principal SIT-Almería
// Implementa TODAS las validaciones y confirmaciones según especificaciones

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    inicializarTemplates();
    cargarLineas();
    cargarBonos();
    cargarAvisos();
    cargarFavoritos();
    cargarPerfil();
});

// Cargar templates en todas las páginas
function inicializarTemplates() {
    const pages = document.querySelectorAll('.page');
    const headerTemplate = document.getElementById('header-template').content;
    const navbarTemplate = document.getElementById('navbar-template').content;
    const footerTemplate = document.getElementById('footer-template').content;

    pages.forEach(page => {
        const headerContainer = page.querySelector('.page-header');
        const navbarContainer = page.querySelector('.page-navbar');
        const footerContainer = page.querySelector('.page-footer');

        if (headerContainer) {
            headerContainer.appendChild(headerTemplate.cloneNode(true));
        }
        if (navbarContainer) {
            navbarContainer.appendChild(navbarTemplate.cloneNode(true));
        }
        if (footerContainer) {
            footerContainer.appendChild(footerTemplate.cloneNode(true));
        }
    });
}

// ========== LÍNEAS Y PARADAS ==========

// Cargar líneas en la página (U-020)
function cargarLineas() {
    const lineasList = document.getElementById('lineas-list');
    if (!lineasList) return;

    lineasList.innerHTML = '';

    if (sitData.lineas.length === 0) {
        // Mensaje cuando no hay líneas
        lineasList.innerHTML = `
            <div class="empty-state">
                <p>No hay líneas disponibles en este momento</p>
            </div>
        `;
        return;
    }

    sitData.lineas.forEach(linea => {
        const lineaCard = document.createElement('div');
        lineaCard.className = 'linea-card';
        lineaCard.style.borderLeftColor = linea.color;
        lineaCard.onclick = () => mostrarDetalleLinea(linea.id);

        lineaCard.innerHTML = `
            <h3>${linea.nombre}</h3>
            <p>${linea.destino}</p>
            <div class="linea-info-row">
                <span>Horario: ${linea.horario}</span>
                <span>Frecuencia: ${linea.frecuencia}</span>
            </div>
        `;

        lineasList.appendChild(lineaCard);
    });

    // Funcionalidad de búsqueda (U-020)
    const searchInput = document.getElementById('lineas-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const cards = lineasList.querySelectorAll('.linea-card');

            cards.forEach(card => {
                const text = card.textContent.toLowerCase();
                card.style.display = text.includes(searchTerm) ? 'block' : 'none';
            });
        });
    }
}

// Mostrar detalle de línea (U-021)
function mostrarDetalleLinea(lineaId) {
    const linea = sitData.lineas.find(l => l.id === lineaId);
    if (!linea) return;

    const lineasContainer = document.getElementById('linea-info-container');
    if (!lineasContainer) return;

    lineasContainer.innerHTML = `
        <div class="linea-card" style="border-left-color: ${linea.color}">
            <h2>${linea.nombre}</h2>
            <p><strong>Destino:</strong> ${linea.destino}</p>
            <div class="linea-info-row">
                <span><strong>Horario:</strong> ${linea.horario}</span>
                <span><strong>Frecuencia:</strong> ${linea.frecuencia}</span>
            </div>
            <button class="btn-primary" style="margin-top: 16px;" onclick="agregarLineaFavorita(${linea.id})">
                Guardar línea como favorita
            </button>
        </div>
    `;

    // Cargar paradas de la línea (U-022)
    const paradas = sitData.paradas[lineaId] || [];
    const paradasList = document.getElementById('paradas-list');

    if (paradasList) {
        paradasList.innerHTML = '';

        if (paradas.length > 0) {
            paradas.forEach(parada => {
                const paradaItem = document.createElement('div');
                paradaItem.className = 'parada-item';
                paradaItem.innerHTML = `
                    <div>
                        <div class="parada-nombre">${parada.nombre}</div>
                    </div>
                    <div class="parada-eta">
                        ${parada.eta} <span>min</span>
                    </div>
                `;
                paradasList.appendChild(paradaItem);
            });
        } else {
            paradasList.innerHTML = '<p style="padding: 20px;">No hay información de paradas disponible</p>';
        }
    }

    showPage('linea-detalle');
}

// ========== BONOS ==========

// Cargar bonos (U-040)
function cargarBonos() {
    const bonosList = document.getElementById('bonos-list');
    if (!bonosList) return;

    bonosList.innerHTML = '';

    if (sitData.bonos.length === 0) {
        bonosList.innerHTML = `
            <div class="empty-state">
                <p>No hay bonos disponibles en este momento</p>
            </div>
        `;
        return;
    }

    sitData.bonos.forEach(bono => {
        const bonoCard = document.createElement('div');
        bonoCard.className = 'bono-card';

        bonoCard.innerHTML = `
            <div class="bono-header">
                <h3>${bono.nombre}</h3>
                <div class="bono-precio">${bono.precio.toFixed(2)} €</div>
            </div>
            <div class="bono-info">
                <p><strong>Viajes:</strong> ${bono.viajes}</p>
                <p><strong>Condiciones:</strong> ${bono.condiciones}</p>
                <p><strong>Vigencia:</strong> ${bono.vigencia}</p>
                <p class="last-updated">Válido desde ${bono.fechaInicio} hasta ${bono.fechaFin}</p>
            </div>
        `;

        bonosList.appendChild(bonoCard);
    });
}

// ========== AVISOS Y NOTICIAS ==========

// Cargar avisos y noticias (U-050)
function cargarAvisos() {
    const avisosList = document.getElementById('avisos-list');
    if (!avisosList) return;

    avisosList.innerHTML = '';

    if (sitData.avisos.length === 0) {
        // U-050: "No hay avisos o noticias activos"
        avisosList.innerHTML = `
            <div class="empty-state">
                <p>No hay avisos o noticias activos</p>
            </div>
        `;
        return;
    }

    // Ordenar por fecha más reciente (U-050)
    const avisosOrdenados = [...sitData.avisos].sort((a, b) => {
        return new Date(b.fecha) - new Date(a.fecha);
    });

    avisosOrdenados.forEach(aviso => {
        const avisoCard = document.createElement('div');
        avisoCard.className = `aviso-card ${aviso.tipo}`;

        avisoCard.innerHTML = `
            <div class="aviso-header">
                <h3>${aviso.titulo}</h3>
                <span class="aviso-fecha">${aviso.fecha}</span>
            </div>
            <div class="aviso-linea">${aviso.linea}</div>
            <div class="aviso-descripcion">${aviso.descripcion}</div>
        `;

        avisosList.appendChild(avisoCard);
    });
}

// ========== FAVORITOS ==========

// Cargar favoritos (U-060)
function cargarFavoritos() {
    const favoritosList = document.getElementById('favoritos-list');
    if (!favoritosList) return;

    favoritosList.innerHTML = '';

    if (sitData.favoritos.length === 0) {
        // U-060: "Aún no tienes favoritos"
        favoritosList.innerHTML = `
            <div class="empty-state">
                <p>Aún no tienes favoritos</p>
                <button class="btn-secondary" onclick="showPage('lineas')">
                    Explorar líneas
                </button>
            </div>
        `;
        return;
    }

    sitData.favoritos.forEach((favorito, index) => {
        const favoritoItem = document.createElement('div');
        favoritoItem.className = 'favorito-item';

        favoritoItem.innerHTML = `
            <div class="favorito-info">
                <h4>${favorito.nombre}</h4>
                <span class="favorito-tipo">${favorito.tipo}</span>
            </div>
            <button class="btn-eliminar" onclick="eliminarFavorito(${index}, '${favorito.nombre}')">
                Eliminar
            </button>
        `;

        favoritosList.appendChild(favoritoItem);
    });
}

// U-061: Favorito (alta) con confirmación
async function agregarLineaFavorita(lineaId) {
    const linea = sitData.lineas.find(l => l.id === lineaId);
    if (!linea) return;

    const elemento = {
        nombre: `${linea.nombre} - ${linea.destino}`,
        tipo: 'LÍNEA',
        idElemento: lineaId
    };

    // Verificar duplicados (U-061)
    const duplicado = sitData.favoritos.some(f =>
        f.tipo === 'LÍNEA' && f.idElemento === lineaId
    );

    if (duplicado) {
        dialogSystem.mostrarFavoritoDuplicado();
        return;
    }

    // Confirmar añadir (U-061)
    const confirmar = await dialogSystem.confirmarAgregarFavorito(elemento);

    if (confirmar) {
        // Añadir a favoritos con fecha
        sitData.favoritos.push({
            id: 'fav' + Date.now(),
            tipo: 'linea',
            idElemento: lineaId,
            nombre: elemento.nombre,
            fechaGuardado: new Date().toLocaleString('es-ES')
        });

        dialogSystem.mostrarFavoritoAñadido();
        cargarFavoritos();
    }
}

// U-062: Favorito (Eliminación) con confirmación
async function eliminarFavorito(index, nombre) {
    const confirmar = await dialogSystem.confirmarEliminarFavorito(nombre);

    if (confirmar) {
        sitData.favoritos.splice(index, 1);
        dialogSystem.mostrarFavoritoEliminado();
        cargarFavoritos();
    }
}

// ========== PLANIFICADOR DE VIAJES ==========

// U-010 y U-011: Buscar ruta con validación
function buscarRuta() {
    const origen = document.getElementById('origen-input');
    const destino = document.getElementById('destino-input');

    // Limpiar errores previos
    origen.parentElement.classList.remove('error');
    destino.parentElement.classList.remove('error');

    const origenEl = origen.parentElement.querySelector('.validation-message');
    const destinoEl = destino.parentElement.querySelector('.validation-message');
    if (origenEl) origenEl.remove();
    if (destinoEl) destinoEl.remove();

    let valid = true;

    // Validar origen (RF-2)
    if (!origen.value.trim()) {
        mostrarError(origen.parentElement, 'El origen es obligatorio');
        valid = false;
    }

    // Validar destino (RF-2)
    if (!destino.value.trim()) {
        mostrarError(destino.parentElement, 'El destino es obligatorio');
        valid = false;
    }

    if (!valid) return;

    // Simular búsqueda de rutas (U-011)
    const resultadosContainer = document.getElementById('resultados-rutas');
    const rutasList = document.getElementById('rutas-list');

    if (!resultadosContainer || !rutasList) return;

    // Datos de ejemplo ordenados por duración (U-011)
    const rutasEjemplo = [
        {
            duracion: '25 min',
            salida: '10:15',
            llegada: '10:40',
            lineas: 'Línea 1',
            transbordos: 'Directo'
        },
        {
            duracion: '32 min',
            salida: '10:20',
            llegada: '10:52',
            lineas: 'Línea 2 → Línea 4',
            transbordos: '1 transbordo'
        },
        {
            duracion: '38 min',
            salida: '10:25',
            llegada: '11:03',
            lineas: 'Línea 3',
            transbordos: 'Directo'
        }
    ];

    rutasList.innerHTML = '';

    rutasEjemplo.forEach(ruta => {
        const rutaCard = document.createElement('div');
        rutaCard.className = 'ruta-card';

        rutaCard.innerHTML = `
            <div class="ruta-header">
                <div class="ruta-duracion">${ruta.duracion}</div>
                <div>${ruta.salida} - ${ruta.llegada}</div>
            </div>
            <div class="ruta-detalles">
                <p><strong>Líneas:</strong> ${ruta.lineas}</p>
                <p><strong>Transbordos:</strong> ${ruta.transbordos}</p>
            </div>
        `;

        rutasList.appendChild(rutaCard);
    });

    resultadosContainer.style.display = 'block';
    resultadosContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ========== RECARGA ==========

// U-070, U-071, U-073: Procesar recarga con validación completa
async function procesarRecarga() {
    const importeInput = document.getElementById('importe-recarga');
    const metodoInput = document.getElementById('metodo-pago');

    // Limpiar errores
    importeInput.parentElement.classList.remove('error');
    const errorEl = importeInput.parentElement.querySelector('.validation-message');
    if (errorEl) errorEl.remove();

    const importe = parseFloat(importeInput.value);
    const metodo = metodoInput.value;

    // Validaciones según U-070
    if (!importeInput.value || isNaN(importe)) {
        mostrarError(importeInput.parentElement, 'Introduce un importe válido');
        return;
    }

    if (importe < 5) {
        mostrarError(importeInput.parentElement, 'El importe mínimo de recarga es 5,00 €');
        return;
    }

    if (importe > 100) {
        mostrarError(importeInput.parentElement, 'El importe máximo de recarga es 100,00 €');
        return;
    }

    // Confirmar recarga (U-071)
    const confirmar = await new Promise((resolve) => {
        dialogSystem.showDialog({
            title: 'Confirmar recarga',
            message: `¿Confirmar recarga de ${importe.toFixed(2)} € mediante ${metodo}?\n\nLa operación se finalizará en una pasarela de pago segura.`,
            confirmText: 'Continuar al pago',
            cancelText: 'Cancelar',
            onConfirm: () => resolve(true),
            onCancel: () => resolve(false)
        });
    });

    if (!confirmar) return;

    // Simular procesamiento de pago (U-071)
    setTimeout(() => {
        // U-073: Recarga exitosa
        const saldoAnterior = sitData.usuario.saldo;
        sitData.usuario.saldo += importe;

        dialogSystem.mostrarRecargaExitosa({
            importe: importe,
            saldoActualizado: sitData.usuario.saldo,
            idRecarga: 'REC' + Date.now()
        });

        // Limpiar formulario
        importeInput.value = '';

        // Actualizar perfil
        cargarPerfil();
    }, 1000);
}

// ========== MENSAJES / CONTACTO ==========

// U-100, U-101: Enviar mensaje con validación
async function enviarMensaje() {
    const asuntoInput = document.getElementById('mensaje-asunto');
    const mensajeInput = document.getElementById('mensaje-texto');

    // Limpiar errores
    asuntoInput.parentElement.classList.remove('error');
    mensajeInput.parentElement.classList.remove('error');

    const asuntoError = asuntoInput.parentElement.querySelector('.validation-message');
    const mensajeError = mensajeInput.parentElement.querySelector('.validation-message');
    if (asuntoError) asuntoError.remove();
    if (mensajeError) mensajeError.remove();

    let valid = true;

    // Validar asunto (U-100)
    if (!asuntoInput.value.trim()) {
        mostrarError(asuntoInput.parentElement, 'El asunto es obligatorio');
        valid = false;
    }

    // Validar mensaje (U-100)
    if (!mensajeInput.value.trim()) {
        mostrarError(mensajeInput.parentElement, 'El mensaje es obligatorio');
        valid = false;
    }

    if (!valid) return;

    // Confirmar envío
    const confirmar = await new Promise((resolve) => {
        dialogSystem.showDialog({
            title: 'Enviar mensaje',
            message: '¿Enviar mensaje de contacto?',
            confirmText: 'Enviar',
            cancelText: 'Cancelar',
            onConfirm: () => resolve(true),
            onCancel: () => resolve(false)
        });
    });

    if (!confirmar) return;

    // U-101: Mensaje enviado con confirmación
    const idMensaje = 'MSG' + Date.now();
    dialogSystem.mostrarMensajeEnviado(idMensaje);

    // Limpiar formulario
    asuntoInput.value = '';
    mensajeInput.value = '';
}

// ========== PERFIL ==========

// U-080: Cargar perfil
function cargarPerfil() {
    // Actualizar datos en la página de perfil
    const nombreEl = document.getElementById('perfil-nombre');
    const emailEl = document.getElementById('perfil-email');
    const telefonoEl = document.getElementById('perfil-telefono');
    const tarjetaEl = document.getElementById('perfil-tarjeta');
    const saldoEl = document.getElementById('perfil-saldo');

    if (nombreEl) nombreEl.textContent = sitData.usuario.nombre;
    if (emailEl) emailEl.textContent = sitData.usuario.email;
    if (telefonoEl) telefonoEl.textContent = sitData.usuario.telefono;
    if (tarjetaEl) {
        tarjetaEl.textContent = sitData.usuario.tarjetaId || 'Sin tarjeta asociada';
    }
    if (saldoEl) saldoEl.textContent = sitData.usuario.saldo.toFixed(2) + ' €';
}

// U-082: Cerrar sesión con confirmación
async function cerrarSesion() {
    const confirmar = await new Promise((resolve) => {
        dialogSystem.showDialog({
            title: 'Cerrar sesión',
            message: '¿Estás seguro de que quieres cerrar sesión?\n\nSerás redirigido a la página de inicio de sesión.',
            confirmText: 'Cerrar sesión',
            cancelText: 'Cancelar',
            onConfirm: () => resolve(true),
            onCancel: () => resolve(false)
        });
    });

    if (confirmar) {
        // Simular cierre de sesión
        dialogSystem.showDialog({
            title: 'Sesión cerrada',
            message: 'Has cerrado sesión correctamente.\n\nRedirigiendo al inicio de sesión...',
            type: 'success',
            confirmText: 'Aceptar',
            onConfirm: () => {
                showPage('login');
            }
        });
    }
}

// ========== AUTENTICACIÓN ==========

// U-000: Iniciar sesión con validación
async function iniciarSesion() {
    const emailInput = document.getElementById('login-email');
    const passwordInput = document.getElementById('login-password');

    // Limpiar errores previos
    emailInput.parentElement.classList.remove('error');
    passwordInput.parentElement.classList.remove('error');

    const emailError = emailInput.parentElement.querySelector('.validation-message');
    const passwordError = passwordInput.parentElement.querySelector('.validation-message');
    if (emailError) emailError.remove();
    if (passwordError) passwordError.remove();

    let valid = true;

    // Validar email
    if (!emailInput.value.trim()) {
        mostrarError(emailInput.parentElement, 'El correo electrónico es obligatorio');
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        mostrarError(emailInput.parentElement, 'Introduce un correo electrónico válido');
        valid = false;
    }

    // Validar contraseña
    if (!passwordInput.value) {
        mostrarError(passwordInput.parentElement, 'La contraseña es obligatoria');
        valid = false;
    }

    if (!valid) return;

    // Simular autenticación exitosa
    dialogSystem.showDialog({
        title: 'Sesión iniciada',
        message: 'Has iniciado sesión correctamente.\n\n¡Bienvenido a SIT-Almería!',
        type: 'success',
        confirmText: 'Continuar',
        onConfirm: () => {
            emailInput.value = '';
            passwordInput.value = '';
            showPage('inicio');
        }
    });
}

// U-013: Crear cuenta con validación completa
async function crearCuenta() {
    const nombreInput = document.getElementById('registro-nombre');
    const emailInput = document.getElementById('registro-email');
    const passwordInput = document.getElementById('registro-password');
    const confirmPasswordInput = document.getElementById('registro-confirm-password');

    // Limpiar errores previos
    [nombreInput, emailInput, passwordInput, confirmPasswordInput].forEach(input => {
        input.parentElement.classList.remove('error');
        const errorEl = input.parentElement.querySelector('.validation-message');
        if (errorEl) errorEl.remove();
    });

    let valid = true;

    // Validar nombre
    if (!nombreInput.value.trim()) {
        mostrarError(nombreInput.parentElement, 'El nombre completo es obligatorio');
        valid = false;
    } else if (nombreInput.value.trim().length < 3) {
        mostrarError(nombreInput.parentElement, 'El nombre debe tener al menos 3 caracteres');
        valid = false;
    }

    // Validar email
    if (!emailInput.value.trim()) {
        mostrarError(emailInput.parentElement, 'El correo electrónico es obligatorio');
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        mostrarError(emailInput.parentElement, 'Introduce un correo electrónico válido');
        valid = false;
    }

    // Validar contraseña
    if (!passwordInput.value) {
        mostrarError(passwordInput.parentElement, 'La contraseña es obligatoria');
        valid = false;
    } else if (passwordInput.value.length < 8) {
        mostrarError(passwordInput.parentElement, 'La contraseña debe tener mínimo 8 caracteres');
        valid = false;
    }

    // Validar confirmación de contraseña
    if (!confirmPasswordInput.value) {
        mostrarError(confirmPasswordInput.parentElement, 'Confirma tu contraseña');
        valid = false;
    } else if (passwordInput.value !== confirmPasswordInput.value) {
        mostrarError(confirmPasswordInput.parentElement, 'Las contraseñas no coinciden');
        valid = false;
    }

    if (!valid) return;

    // Confirmar creación de cuenta
    const confirmar = await new Promise((resolve) => {
        dialogSystem.showDialog({
            title: 'Crear cuenta',
            message: `¿Confirmar registro con el correo:\n${emailInput.value}?`,
            confirmText: 'Crear cuenta',
            cancelText: 'Cancelar',
            onConfirm: () => resolve(true),
            onCancel: () => resolve(false)
        });
    });

    if (!confirmar) return;

    // Simular creación de cuenta
    dialogSystem.showDialog({
        title: 'Cuenta Creada',
        message: 'Tu cuenta ha sido creada exitosamente.\n\nSe ha enviado un correo de confirmación a tu dirección de email.',
        type: 'success',
        confirmText: 'Ir a iniciar sesión',
        onConfirm: () => {
            nombreInput.value = '';
            emailInput.value = '';
            passwordInput.value = '';
            confirmPasswordInput.value = '';
            showPage('login');
        }
    });
}

// U-005: Recuperar contraseña con validación
async function recuperarContrasena() {
    const emailInput = document.getElementById('recuperar-email');

    // Limpiar errores previos
    emailInput.parentElement.classList.remove('error');
    const errorEl = emailInput.parentElement.querySelector('.validation-message');
    if (errorEl) errorEl.remove();

    // Validar email
    if (!emailInput.value.trim()) {
        mostrarError(emailInput.parentElement, 'El correo electrónico es obligatorio');
        return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        mostrarError(emailInput.parentElement, 'Introduce un correo electrónico válido');
        return;
    }

    // Confirmar envío
    const confirmar = await new Promise((resolve) => {
        dialogSystem.showDialog({
            title: 'Recuperar contraseña',
            message: `¿Enviar instrucciones de recuperación a:\n${emailInput.value}?`,
            confirmText: 'Enviar',
            cancelText: 'Cancelar',
            onConfirm: () => resolve(true),
            onCancel: () => resolve(false)
        });
    });

    if (!confirmar) return;

    // Simular envío de correo
    dialogSystem.showDialog({
        title: 'Instrucciones Enviadas',
        message: `Se han enviado las instrucciones para recuperar tu contraseña al correo:\n\n${emailInput.value}\n\nRevisa tu bandeja de entrada y sigue las instrucciones.`,
        type: 'success',
        confirmText: 'Entendido',
        onConfirm: () => {
            emailInput.value = '';
            showPage('login');
        }
    });
}

// ========== EDICIÓN DE PERFIL ==========

// Editar perfil - Función global
window.editarPerfil = function() {
    console.log('Función editarPerfil llamada');

    const nombreEl = document.getElementById('perfil-nombre');
    const emailEl = document.getElementById('perfil-email');
    const telefonoEl = document.getElementById('perfil-telefono');

    if (!nombreEl || !emailEl || !telefonoEl) {
        console.error('No se encontraron los elementos del perfil');
        alert('Error: No se pudieron cargar los datos del perfil');
        return;
    }

    const nombre = nombreEl.textContent;
    const email = emailEl.textContent;
    const telefono = telefonoEl.textContent;

    console.log('Datos del perfil:', {nombre, email, telefono});

    // Crear formulario de edición
    const formHtml = `
        <div class="form-group">
            <label>Nombre completo</label>
            <input type="text" id="edit-nombre" class="form-input" value="${nombre}">
        </div>
        <div class="form-group">
            <label>Correo electrónico</label>
            <input type="email" id="edit-email" class="form-input" value="${email}">
        </div>
        <div class="form-group">
            <label>Teléfono</label>
            <input type="tel" id="edit-telefono" class="form-input" value="${telefono}">
        </div>
    `;

    // Mostrar diálogo de edición personalizado
    const dialog = document.createElement('div');
    dialog.className = 'dialog-overlay';
    dialog.innerHTML = `
        <div class="dialog">
            <h3>Editar Perfil</h3>
            ${formHtml}
            <div class="dialog-actions">
                <button class="btn-secondary" onclick="cerrarDialogoEdicion()">Cancelar</button>
                <button class="btn-primary" onclick="guardarCambiosPerfil()">Guardar cambios</button>
            </div>
        </div>
    `;
    document.body.appendChild(dialog);

    console.log('Diálogo de edición creado');
};

// Cerrar diálogo de edición
window.cerrarDialogoEdicion = function() {
    const overlay = document.querySelector('.dialog-overlay');
    if (overlay) {
        overlay.remove();
    }
};

// Guardar cambios del perfil - Función global
window.guardarCambiosPerfil = function() {
    console.log('Guardando cambios del perfil...');

    const nuevoNombre = document.getElementById('edit-nombre').value.trim();
    const nuevoEmail = document.getElementById('edit-email').value.trim();
    const nuevoTelefono = document.getElementById('edit-telefono').value.trim();

    console.log('Nuevos datos:', {nuevoNombre, nuevoEmail, nuevoTelefono});

    // Validaciones básicas
    if (!nuevoNombre || !nuevoEmail || !nuevoTelefono) {
        alert('Todos los campos son obligatorios');
        return;
    }

    if (nuevoNombre.length < 3) {
        alert('El nombre debe tener al menos 3 caracteres');
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nuevoEmail)) {
        alert('Introduce un correo electrónico válido');
        return;
    }

    // Actualizar datos en la interfaz
    document.getElementById('perfil-nombre').textContent = nuevoNombre;
    document.getElementById('perfil-email').textContent = nuevoEmail;
    document.getElementById('perfil-telefono').textContent = nuevoTelefono;

    // Actualizar datos en memoria
    if (typeof sitData !== 'undefined' && sitData.usuario) {
        sitData.usuario.nombre = nuevoNombre;
        sitData.usuario.email = nuevoEmail;
        sitData.usuario.telefono = nuevoTelefono;
    }

    // Cerrar diálogo
    const overlay = document.querySelector('.dialog-overlay');
    if (overlay) {
        overlay.remove();
    }

    // Mostrar confirmación
    if (typeof dialogSystem !== 'undefined') {
        dialogSystem.showDialog({
            title: 'Perfil actualizado',
            message: 'Tus datos han sido actualizados correctamente.',
            type: 'success'
        });
    } else {
        alert('Perfil actualizado correctamente');
    }

    console.log('Cambios guardados exitosamente');
};

// ========== UTILIDADES ==========

// Mostrar error de validación
function mostrarError(formGroup, mensaje) {
    formGroup.classList.add('error');

    const errorMsg = document.createElement('span');
    errorMsg.className = 'validation-message';
    errorMsg.textContent = mensaje;

    formGroup.appendChild(errorMsg);
}

// Hacer funciones globales
window.mostrarDetalleLinea = mostrarDetalleLinea;
window.agregarLineaFavorita = agregarLineaFavorita;
window.eliminarFavorito = eliminarFavorito;
window.buscarRuta = buscarRuta;
window.procesarRecarga = procesarRecarga;
window.enviarMensaje = enviarMensaje;
window.cerrarSesion = cerrarSesion;
window.iniciarSesion = iniciarSesion;
window.crearCuenta = crearCuenta;
window.recuperarContrasena = recuperarContrasena;
