const list = document.querySelector(".dropdown__list");
const item = document.querySelectorAll(".dropdown__item");
const value = document.querySelector(".dropdown__value");
const dropdown = document.querySelector(".dropdown");


dropdown.addEventListener("click", (event) => {
	if (event.target.className === "dropdown__value") {
		event.target.nextElementSibling.classList.add("dropdown__list_active");
	}

	if (event.target.className === "dropdown__item") {
		event.target.className("dropdown__value").textContent = event.target.textContent;

		if (event.target.firstElementChild) {
			event.preventDefault();
		}

		event.target.className("dropdown__list").classList.remove("dropdown__list_active");
	}
})


value.addEventListener("click", (event) => {
	list.classList.add("dropdown__list_active");
});


item.forEach(element => {
	element.addEventListener("click", (event) => {
		value.textContent = element.textContent;

		if (element.firstElementChild) {
			event.preventDefault();
		}

		list.classList.remove("dropdown__list_active");
	});
});