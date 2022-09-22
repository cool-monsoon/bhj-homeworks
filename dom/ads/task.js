const rotator = Array.from(document.querySelectorAll('.rotator'));
const rotatorCase = Array.from(document.querySelectorAll(".rotator__case"));
let indexCounter = 0;

function rotate() {
	rotatorCase[indexCounter].classList.remove("rotator__case_active");
	indexCounter < rotatorCase.length - 1 ? indexCounter++ : indexCounter = 0;
	rotatorCase[indexCounter].classList.add("rotator__case_active");
}

setInterval(() => { rotator.forEach(element => rotate(element)) }, 1000)
