let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const totalSlides = slides.length;

function updateSlide() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlide();
}

/* Auto slide */
setInterval(nextSlide, 2000);
