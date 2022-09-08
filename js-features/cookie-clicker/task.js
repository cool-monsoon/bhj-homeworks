const counter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");

const speed = document.getElementById("clicker__speed");
let firstClick = Date.now();

cookie.onclick = function () {
	counter.textContent++;
	if (+counter.textContent % 2 === 0) {
		cookie.width = 200;
	} else {
		cookie.width = 250;
	}

	let nextClick = Date.now();
	speed.textContent = (1 / ((nextClick - firstClick) / 1000)).toFixed(2);
	document.getElementById("clicker__speed") = speed;
	firstClick = Date.now();
}

