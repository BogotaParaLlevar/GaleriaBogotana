document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    let currentIndex = 0;

    const updateCarousel = () => {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    };

    const moveToNextSlide = () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    };

    // Set automatic slide transition every 3 seconds
    setInterval(moveToNextSlide, 3000);
});
