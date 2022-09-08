const popupMain = document.getElementById('modal_main');
const popupsClose = Array.from(document.getElementsByClassName('modal__close'));

const showSuccess = document.getElementsByClassName('show-success');
const popupSuccess = document.getElementById('modal_success');

popupMain.className = "modal modal_active";

popupsClose.forEach((element) => {
	element.onclick = function () {
		popupMain.className = "modal";
		popupSuccess.className = "modal";
	}
});

showSuccess[0].onclick = function () {
	popupMain.className = "modal";
	popupSuccess.className = "modal modal_active";
}
