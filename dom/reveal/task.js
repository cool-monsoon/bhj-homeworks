const reveal = Array.from(document.querySelectorAll('.reveal'));

function isVisible(element) {
	const { top, bottom } = element.getBoundingClientRect();
	if (top > 0 && bottom < window.innerHeight) {
		element.classList.add('reveal_active');
	} else {
		element.classList.remove('reveal_active');
	}

}

window.addEventListener('scroll', () => { reveal.forEach((element) => { isVisible(element) }) });
