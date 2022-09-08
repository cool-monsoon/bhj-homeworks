const prevSlide = document.querySelector('.slider__arrow_prev');
const nextSlide = document.querySelector('.slider__arrow_next');

const slides = Array.from(document.querySelectorAll(".slider__item"));
const dotSlides = Array.from(document.querySelectorAll('.slider__dot'));

let currentSlide = 0;

function slider() {
	slides.forEach((element) => element.classList.remove("slider__item_active"));
	slides[currentSlide].classList.add("slider__item_active");

	dotSlides.forEach((element) => element.classList.remove("slider__dot_active"));
	dotSlides[currentSlide].classList.add("slider__dot_active");
}

prevSlide.onclick = function () {
	currentSlide !== 0 ? currentSlide-- : currentSlide = slides.length - 1;
	slider();
}

nextSlide.onclick = function () {
	currentSlide !== slides.length - 1 ? currentSlide++ : currentSlide = 0;
	slider();
}

dotSlides.forEach((element) => {
	element.onclick = function () {
		currentSlide = dotSlides.indexOf(element);
		slider();
	}
});