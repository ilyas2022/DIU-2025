// Carrusel automático
class Carousel {
    constructor() {
        this.slides = document.querySelectorAll('.carousel-slide');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.currentSlide = 0;
        this.autoRotateInterval = null;

        this.init();
    }

    init() {
        // Event listeners para los botones
        this.prevBtn.addEventListener('click', () => this.previousSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        // Iniciar auto-rotación
        this.startAutoRotate();

        // Pausar auto-rotación al pasar el mouse sobre el carrusel
        const carousel = document.querySelector('.carousel');
        carousel.addEventListener('mouseenter', () => this.stopAutoRotate());
        carousel.addEventListener('mouseleave', () => this.startAutoRotate());

        // Soporte para teclado
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.previousSlide();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
            }
        });
    }

    showSlide(index) {
        // Remover clase active de todas las slides
        this.slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Asegurar que el índice esté dentro del rango
        if (index >= this.slides.length) {
            this.currentSlide = 0;
        } else if (index < 0) {
            this.currentSlide = this.slides.length - 1;
        } else {
            this.currentSlide = index;
        }

        // Mostrar la slide actual
        this.slides[this.currentSlide].classList.add('active');
    }

    nextSlide() {
        this.showSlide(this.currentSlide + 1);
        this.resetAutoRotate();
    }

    previousSlide() {
        this.showSlide(this.currentSlide - 1);
        this.resetAutoRotate();
    }

    startAutoRotate() {
        this.autoRotateInterval = setInterval(() => {
            this.nextSlide();
        }, 5000); // Cambiar cada 5 segundos
    }

    stopAutoRotate() {
        if (this.autoRotateInterval) {
            clearInterval(this.autoRotateInterval);
            this.autoRotateInterval = null;
        }
    }

    resetAutoRotate() {
        this.stopAutoRotate();
        this.startAutoRotate();
    }
}

// Inicializar el carrusel cuando se cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
    new Carousel();
});
