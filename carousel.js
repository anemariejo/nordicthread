const images = document.querySelectorAll('.carousel-image');
let activeIndex = 0;

function updateCarousel() {
    images.forEach((img, index) => {
        img.classList.remove('active', 'left', 'right');
        if (index === activeIndex) {
            img.classList.add('active');
        } else if (index === (activeIndex - 1 + images.length) % images.length) {
            img.classList.add('left');
            console.log(`Image ${index} assigned LEFT class`);
        } else if (index === (activeIndex + 1) % images.length) {
            img.classList.add('right');
            console.log(`Image ${index} assigned RIGHT class`);
        }
    });    
}

function moveLeft() {
    console.log("scrollLeft value:", moveLeft);
    activeIndex = (activeIndex - 1 + images.length) % images.length;
    console.log("activeIndex after:", activeIndex);
    updateCarousel();
}

function moveRight() {
    activeIndex = (activeIndex + 1) % images.length;
    updateCarousel();
}

updateCarousel();
