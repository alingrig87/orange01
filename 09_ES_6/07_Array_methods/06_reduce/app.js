const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i <= numbers.length - 1; i++) {
// 	sum += numbers[i];
// }

const sum = numbers.reduce(
	(accumulator, currentNumber) => accumulator + currentNumber,
	0
);

const cart = [
	{ name: 'Telefon', price: 1000, qt: 2 },
	{ name: 'Laptop', price: 2000, qt: 1 },
	{ name: 'Tabletă', price: 500, qt: 1 },
	{ name: 'Ceas', price: 300, qt: 3 },
	{ name: 'Tastatură', price: 80, qt: 4 },
	{ name: 'Imprimantă', price: 150, qt: 1 },
	{ name: 'Casti', price: 100, qt: 2 },
	{ name: 'Hard disk', price: 150, qt: 1 },
];

const totalPrice = cart.reduce(
	(accumulator, currentProduct) =>
		accumulator + currentProduct.price * currentProduct.qt,
	0
);

console.log(totalPrice);

let totalPrice1 = 0;
for (let i = 0; i < cart.length; i++) {
	const product = cart[i];
	totalPrice1 += product.price * product.qt;
}
console.log(totalPrice1);
