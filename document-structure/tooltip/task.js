const hasTooltips = Array.from(document.querySelectorAll(".has-tooltip"));
let tooltips;

hasTooltips.forEach(item => {
	item.addEventListener("click", event => {
		event.preventDefault();
		if (!tooltips) {
			hasTooltips.forEach(item => {
				const { left } = item.getBoundingClientRect(event.target);
				item.insertAdjacentHTML("afterEnd", `<div class="tooltip" style="left:${left}px">${item.getAttribute("title")}</div>`);
				tooltips = Array.from(document.querySelectorAll(".tooltip"));
			});
		};

		if (!event.target.nextElementSibling.classList.contains("tooltip_active")) {
			event.target.nextElementSibling.classList.add("tooltip_active");
		} else {
			event.target.nextElementSibling.classList.remove("tooltip_active");
		};
	});
});