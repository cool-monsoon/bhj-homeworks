/*
let counter = function () {
	const countdown = document.getElementById('timer');
	countdown.textContent--;

	if (countdown.textContent === '0') {
		alert('Вы победили в конкурсе');
		clearInterval(countdownTimer);

	}
}

let countdownTimer = setInterval(counter, 1000);
*/



//          Задачи #1 и #2

const hours = document.getElementById('hours__counter');
const minutes = document.getElementById('minutes__counter');
const seconds = document.getElementById('timer');

const url = "https://u.netology.ngcdn.ru/backend/uploads/lms/attachments/files/data/36034/BHJ-43__%D0%92%D0%BE%D0%B7%D0%BC%D0%BE%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D0%B8_JavaScript_%D0%B2_%D0%B1%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%80%D0%B5.pdf"

let hoursCounter = function () {
	seconds.textContent--;
	if (seconds.textContent.length === 1) {
		seconds.textContent = '0' + seconds.textContent;
	}

	if (seconds.textContent === '-1') {
		seconds.textContent = '59';
		minutes.textContent--;
	}

	if (minutes.textContent.length === 1) {
		minutes.textContent = '0' + minutes.textContent;
	}

	if (minutes.textContent === '-1') {
		minutes.textContent = '59';
		hours.textContent--;
	}

	if (hours.textContent.length === 1) {
		hours.textContent = '0' + hours.textContent;
	}

	if (hours.textContent === '00' && minutes.textContent === '00' && seconds.textContent === '00') {
		alert('Вы победили в конкурсе');
		clearInterval(countdownHoursTimer);
		document.location.assign(url);
	}
}

let countdownHoursTimer = setInterval(hoursCounter, 1000);

