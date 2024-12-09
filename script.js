const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const images = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 600; // Ajusta el desplazamiento según el nuevo ancho
    images.forEach(img => {
        img.style.transform = `translateX(${offset}px)`;
    });
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

updateCarousel();