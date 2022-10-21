const products = Array.from(document.querySelectorAll(".product"));
const cart = document.querySelector(".cart__products");


products.forEach(product => {
	const quantityAdd = product.querySelector(".product__quantity-control_inc");
	const quantityRemove = product.querySelector(".product__quantity-control_dec");
	const productAdd = product.querySelector(".product__add");
	let counter = Number(product.querySelector(".product__quantity-value").textContent);

	quantityAdd.addEventListener("click", () => {
		counter++;
		product.querySelector(".product__quantity-value").textContent = counter;
	});

	quantityRemove.addEventListener("click", () => {
		if (counter > 1) {
			counter--;
			product.querySelector(".product__quantity-value").textContent = counter;
		}
	});

	productAdd.addEventListener("click", () => {
		let cartProducts = Array.from(cart.querySelectorAll(".cart__product"));
		let cartProductsIndex = cartProducts.findIndex(element => element.dataset.id === product.dataset.id);

		if (cartProductsIndex === -1) {
			let insertTags = `<div class="cart__product" data-id=${product.dataset.id}> <img class="cart__product-image" src=${product.querySelector("img").getAttribute("src")}> <div class="cart__product-count">${counter}</div> </div>`;
			cart.insertAdjacentHTML("afterBegin", insertTags);
		} else {
			let cartProductsCounter = Number(cartProducts[cartProductsIndex].querySelector(".cart__product-count").textContent);
			cartProductsCounter += counter;
			cartProducts[cartProductsIndex].querySelector(".cart__product-count").textContent = cartProductsCounter;
		}
	});
});