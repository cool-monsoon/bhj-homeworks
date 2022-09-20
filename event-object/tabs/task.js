const tabs = Array.from(document.querySelectorAll(".tab"));
const tabsContent = Array.from(document.querySelectorAll(".tab__content"))
tabs.forEach(element => {
	element.addEventListener("click", (event) => {
		tabs.forEach(element => element.classList.remove("tab_active"))
		element.classList.toggle("tab_active");
		tabsContent.forEach(element => element.classList.remove("tab__content_active"))
		tabsContent[tabs.indexOf(event.target)].classList.toggle("tab__content_active")
	})
});