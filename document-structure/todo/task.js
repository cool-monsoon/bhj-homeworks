const input = document.getElementById('task__input');
const list = document.getElementById('tasks__list');
const form = document.getElementById('tasks__form');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	
	if (input.value.trim() !== '') {
		list.insertAdjacentHTML('beforeEnd', `<div class="task"> <div class="task__title">${input.value}</div> <a href="#" class="task__remove">&times;</a> </div>`);

		list.lastElementChild.lastElementChild.addEventListener('click', (event) => {
			event.preventDefault();
			event.currentTarget.parentNode.remove();
		});

		input.value = '';
	}
});