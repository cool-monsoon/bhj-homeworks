const sizeButtons = Array.from(document.querySelectorAll('.book__control_font-size a'));
const book = document.querySelector('.book');

const mediumText = document.querySelector('.font-size_active');
mediumText.classList.add('font-size_medium');

function changeSize(element) {
	element.addEventListener('click', (event) => {

		event.preventDefault();

		sizeButtons.forEach(item => item.classList.remove('font-size_active'));

		element.classList.add('font-size_active');

		if (element.classList.contains('font-size_active') && element.classList.contains('font-size_small')) {
			book.classList.add('book_fs-small')
			book.classList.remove('book_fs-big')
		}

		if (element.classList.contains('font-size_active') && element.classList.contains('font-size_medium')) {
			book.classList.add(null)
			book.classList.remove('book_fs-small')
			book.classList.remove('book_fs-big')
		}

		if (element.classList.contains('font-size_active') && element.classList.contains('font-size_big')) {
			book.classList.add('book_fs-big')
			book.classList.remove('book_fs-small')
		}
	})
}

sizeButtons.forEach(element => changeSize(element));
