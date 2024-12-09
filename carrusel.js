const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function moveCarousel() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    const offset = -currentIndex * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

setInterval(moveCarousel, 3000); // Cambia de imagen cada 3 segundos