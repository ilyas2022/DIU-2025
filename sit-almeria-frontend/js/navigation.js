// Sistema de navegación entre páginas (SPA - Single Page Application)

// Función para mostrar una página específica
function showPage(pageId) {
    // Ocultar todas las páginas
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Mostrar la página solicitada
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');

        // Scroll al inicio de la página
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Actualizar estado activo en los botones de navegación
    updateNavigation(pageId);
}

// Función para actualizar el estado activo de la navegación
function updateNavigation(activePageId) {
    const navbars = document.querySelectorAll('.navbar');
    navbars.forEach(navbar => {
        const navButtons = navbar.querySelectorAll('.nav-button');
        navButtons.forEach(button => {
            button.classList.remove('active');
            const buttonPageId = button.getAttribute('onclick')?.match(/showPage\('(.+?)'\)/)?.[1];
            if (buttonPageId === activePageId) {
                button.classList.add('active');
            }
        });
    });

    // Si estamos en una página de autenticación, no resaltar ningún botón
    if (['login', 'registro', 'recuperar-contrasena'].includes(activePageId)) {
        const navbars = document.querySelectorAll('.navbar');
        navbars.forEach(navbar => {
            const navButtons = navbar.querySelectorAll('.nav-button');
            navButtons.forEach(button => button.classList.remove('active'));
        });
    }
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Asegurarse de que la página de inicio esté visible
    const inicioPage = document.getElementById('inicio');
    if (inicioPage) {
        inicioPage.classList.add('active');
    }
});

// Hacer la función global para que pueda ser llamada desde onclick
window.showPage = showPage;
