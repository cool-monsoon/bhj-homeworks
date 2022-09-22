const reveal = Array.from(document.querySelectorAll('.reveal'));

function isVisible(element) {
	const { top, bottom } = element.getBoundingClientRect();
	if (bottom < 0) {
		element.classList.remove('reveal_active');
	}
	if (top > window.innerHeight) {
		element.classList.remove('reveal_active');
	}
	element.classList.add('reveal_active');
}

window.addEventListener('scroll', () => { reveal.forEach((element) => { isVisible(element) }) });
