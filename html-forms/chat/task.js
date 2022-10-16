const widget = document.querySelector(".chat-widget");
const widgetInput = document.getElementById('chat-widget__input');
const widgetMessages = document.getElementById('chat-widget__messages');

let currentTime = new Date().toLocaleTimeString().slice(0, -3);
let botMessages = [
	"Вы не купили ни одного товарадля того, чтобы так с нами разговаривать!",
	"Кто тут?",
	"Где ваша совесть?",
	"К сожелению, все операторы сейчас заняты. Не пишите нам больше",
	"Добрый день! До свидания!",
	"Мы нечего не будем вам продавать!",
];


widget.addEventListener("click", () => {
	widget.classList.add("chat-widget_active")
})

widgetInput.addEventListener("keydown", event => {
	if (event.key == "Enter" && widgetInput.value !== "") {
		widgetMessages.innerHTML += `<div class="message message_client"> <div class="message__time">${currentTime}</div> <div class="message__text">${widgetInput.value}</div> </div>`;
		widgetInput.value = "";

		let randomBotMessage = Math.floor(Math.random() * botMessages.length);

		widgetMessages.innerHTML += `<div class="message"> <div class="message__time">${currentTime}</div> <div class="message__text">${botMessages[randomBotMessage]}</div> </div>`;

		widgetMessages.lastElementChild.scrollIntoView(top);
	}
})