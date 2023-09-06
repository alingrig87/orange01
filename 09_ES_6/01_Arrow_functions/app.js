// JavaScript code
function add(a, b) {
	return a + b;
}

console.log(add(3, 5));

const addArrow = (a, b) => {
	return a + b;
};

console.log(addArrow(5, 6));

const addArrowImproved = (a, b) => a + b;

// create an object - product
const product = {
	name: 'Apple MAC M1',
	price: 200,
	image:
		'https://static.quickmobile.ro/cs-photos/products/original/macbook-pro-13-2022-m2-512gb-8gb-ram-gri_10077718_1_1656919585.webp',
};

const product2 = {
	name: 'Apple MAC M1',
	price: 200,
	image:
		'https://static.quickmobile.ro/cs-photos/products/original/macbook-pro-13-2022-m2-512gb-8gb-ram-gri_10077718_1_1656919585.webp',
};

const createCardFromProduct = (product) =>
	'<div class="card">' +
	'<h2>' +
	product.name +
	'</h2>' +
	'<img src="' +
	product.image +
	'">' +
	'<p>' +
	product.price +
	' RON ' +
	'</p>' +
	'</div>';

// div cu h4 - product name
// si img product image

document.querySelector('.container').innerHTML =
	createCardFromProduct(product) + createCardFromProduct(product2);
