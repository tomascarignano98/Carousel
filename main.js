const prevBtn = document.querySelector("#carousel-btn-prev");
const nextBtn = document.querySelector("#carousel-btn-next");
const slides = document.querySelectorAll(".carousel-item");
let slidePosition = 0;
const totalSlides = slides.length;

prevBtn.addEventListener("click", moveToPrevSlide);
nextBtn.addEventListener("click", moveToNextSlide);

function moveToPrevSlide() {
  slides[slidePosition].classList.remove(
    "carousel-item-visible",
    "fade-left",
    "fade-right"
  );

  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else slidePosition--;

  slides[slidePosition].classList.add("carousel-item-visible", "fade-left");
}

function moveToNextSlide() {
  slides[slidePosition].classList.remove(
    "carousel-item-visible",
    "fade-left",
    "fade-right"
  );

  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else slidePosition++;

  slides[slidePosition].classList.add("carousel-item-visible", "fade-right");
}
