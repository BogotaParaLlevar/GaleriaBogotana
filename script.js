// script.js
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const slideWidth = slides[0].getBoundingClientRect().width;

let currentIndex = 0;

// Función para mover el carrusel
function moveCarousel() {
    currentIndex = (currentIndex + 1) % slides.length;
    const newPosition = -slideWidth * currentIndex;
    track.style.transform = `translateX(${newPosition}px)`;
}

// Configura el movimiento automático
setInterval(moveCarousel, 3000);
