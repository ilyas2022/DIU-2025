// Diálogos y Confirmaciones del Sistema SIT-Almería
// Según bocetos textuales y especificaciones del proyecto

/**
 * Sistema de diálogos modales para confirmaciones
 */
class DialogSystem {
    constructor() {
        this.createDialogContainer();
    }

    createDialogContainer() {
        // Crear contenedor de diálogos si no existe
        if (!document.getElementById('dialog-overlay')) {
            const overlay = document.createElement('div');
            overlay.id = 'dialog-overlay';
            overlay.className = 'dialog-overlay';
            overlay.innerHTML = `
                <div class="dialog-box">
                    <h3 id="dialog-title"></h3>
                    <p id="dialog-message"></p>
                    <div class="dialog-buttons" id="dialog-buttons"></div>
                </div>
            `;
            document.body.appendChild(overlay);

            // Cerrar al hacer clic fuera
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    this.closeDialog();
                }
            });
        }
    }

    showDialog(options) {
        const {
            title = '',
            message = '',
            confirmText = 'Confirmar',
            cancelText = 'Cancelar',
            onConfirm = null,
            onCancel = null,
            type = 'confirm' // 'confirm', 'alert', 'success', 'error'
        } = options;

        const overlay = document.getElementById('dialog-overlay');
        const dialogBox = overlay.querySelector('.dialog-box');
        const titleEl = document.getElementById('dialog-title');
        const messageEl = document.getElementById('dialog-message');
        const buttonsEl = document.getElementById('dialog-buttons');

        // Configurar contenido
        titleEl.textContent = title;
        messageEl.textContent = message;
        buttonsEl.innerHTML = '';

        // Aplicar clase de tipo
        dialogBox.className = 'dialog-box dialog-' + type;

        // Crear botones según el tipo
        if (type === 'alert' || type === 'success' || type === 'error') {
            const okBtn = document.createElement('button');
            okBtn.className = type === 'error' ? 'btn-secondary' : 'btn-primary';
            okBtn.textContent = 'Aceptar';
            okBtn.onclick = () => {
                this.closeDialog();
                if (onConfirm) onConfirm();
            };
            buttonsEl.appendChild(okBtn);
        } else {
            // Botón cancelar
            const cancelBtn = document.createElement('button');
            cancelBtn.className = 'btn-secondary';
            cancelBtn.textContent = cancelText;
            cancelBtn.onclick = () => {
                this.closeDialog();
                if (onCancel) onCancel();
            };
            buttonsEl.appendChild(cancelBtn);

            // Botón confirmar
            const confirmBtn = document.createElement('button');
            confirmBtn.className = 'btn-primary';
            confirmBtn.textContent = confirmText;
            confirmBtn.onclick = () => {
                this.closeDialog();
                if (onConfirm) onConfirm();
            };
            buttonsEl.appendChild(confirmBtn);
        }

        // Mostrar overlay
        overlay.classList.add('active');
    }

    closeDialog() {
        const overlay = document.getElementById('dialog-overlay');
        overlay.classList.remove('active');
    }

    // U-061: Favorito (alta) - Confirmación para añadir favorito
    confirmarAgregarFavorito(elemento) {
        return new Promise((resolve) => {
            this.showDialog({
                title: 'Añadir a favoritos',
                message: `¿Deseas añadir "${elemento.nombre}" a tus favoritos?`,
                confirmText: 'Añadir',
                cancelText: 'Cancelar',
                onConfirm: () => resolve(true),
                onCancel: () => resolve(false)
            });
        });
    }

    // U-062: Favorito (Eliminación) - Confirmación para eliminar favorito
    confirmarEliminarFavorito(elemento) {
        return new Promise((resolve) => {
            this.showDialog({
                title: 'Eliminar favorito',
                message: `¿Eliminar "${elemento}" de favoritos?`,
                confirmText: 'Eliminar',
                cancelText: 'Cancelar',
                onConfirm: () => resolve(true),
                onCancel: () => resolve(false)
            });
        });
    }

    // U-082: Cerrar sesión (confirmación)
    confirmarCerrarSesion() {
        return new Promise((resolve) => {
            this.showDialog({
                title: 'Cerrar sesión',
                message: '¿Estás seguro de que deseas cerrar sesión?',
                confirmText: 'Cerrar sesión',
                cancelText: 'Cancelar',
                onConfirm: () => resolve(true),
                onCancel: () => resolve(false)
            });
        });
    }

    // U-073: Recarga (confirmación) - Confirmación de recarga exitosa
    mostrarRecargaExitosa(datos) {
        const fechaHora = new Date().toLocaleString('es-ES');
        this.showDialog({
            title: '¡Recarga completada!',
            message: `Tu recarga de ${datos.importe.toFixed(2)} € se ha procesado correctamente.\n\nFecha: ${fechaHora}\nNuevo saldo: ${datos.saldoActualizado.toFixed(2)} €`,
            type: 'success',
            onConfirm: () => showPage('perfil')
        });
    }

    // U-083: Perfil (confirmación de guardado)
    mostrarPerfilGuardado() {
        const fechaHora = new Date().toLocaleString('es-ES');
        this.showDialog({
            title: 'Perfil actualizado',
            message: `Tus datos se han guardado correctamente.\n\nÚltima actualización: ${fechaHora}`,
            type: 'success'
        });
    }

    // U-101: Mensaje (confirmación)
    mostrarMensajeEnviado(idMensaje) {
        const fechaHora = new Date().toLocaleString('es-ES');
        this.showDialog({
            title: 'Mensaje enviado',
            message: `Tu mensaje ha sido enviado correctamente.\n\nID: ${idMensaje}\nFecha: ${fechaHora}\nEstado: Enviado\n\nRecibirás la respuesta en tu correo electrónico.`,
            type: 'success',
            onConfirm: () => showPage('inicio')
        });
    }

    // Mostrar error genérico
    mostrarError(mensaje) {
        this.showDialog({
            title: 'Error',
            message: mensaje,
            type: 'error'
        });
    }

    // Mostrar éxito genérico
    mostrarExito(titulo, mensaje) {
        this.showDialog({
            title: titulo,
            message: mensaje,
            type: 'success'
        });
    }

    // Mostrar alerta
    mostrarAlerta(titulo, mensaje) {
        this.showDialog({
            title: titulo,
            message: mensaje,
            type: 'alert'
        });
    }

    // Feedback de favorito añadido
    mostrarFavoritoAñadido() {
        this.mostrarExito('Añadido a favoritos', 'El elemento se ha guardado en tus favoritos correctamente.');
    }

    // Feedback de favorito eliminado
    mostrarFavoritoEliminado() {
        this.mostrarExito('Eliminado de favoritos', 'El elemento se ha eliminado de tus favoritos.');
    }

    // Favorito duplicado (U-061)
    mostrarFavoritoDuplicado() {
        this.mostrarAlerta('Ya está en favoritos', 'Este elemento ya se encuentra en tu lista de favoritos.');
    }
}

// Crear instancia global
const dialogSystem = new DialogSystem();

// Hacer disponible globalmente
window.dialogSystem = dialogSystem;
