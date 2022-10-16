const interests = Array.from(document.querySelectorAll('.interest__check'));

interests.forEach(item => {
	item.addEventListener("change", () => {
		if (!item.closest('.interests_active')) {
			const subInterest = Array.from(item.closest('.interest').querySelectorAll('.interest__check'));
			if (item.checked) {
				subInterest.forEach(element => element.checked = true);
			} else {
				subInterest.forEach(element => element.checked = false);
			};
		}
	})
})