// JavaScript code
const person = {
	name: 'Costel',
	age: 30,
	city: 'Bucuresti',
};

console.log(person.name, person.age, person.city);

// const name = person.name;
// const age = person.age;
// const city = person.city;

const { name, age, city } = person;

console.log(name, age, city);

const createCard = (product) => {
	const { name, image, price } = product;
	return `<div class="card">
   <h2>${name}</h2>
   <img src="${image}">
   <p>${price} RON </p>
	</div>`;
};

const product = {
	name: 'Pantaloni negri',
	price: 79.99,
	image:
		'https://www.atmospherefashion.ro/admin/galerie/server/php/files/6440/pantaloni-negri-drepti-p-919-10.jpg',
};

// const cart = {
// 	name: product.name,
// 	price: product.price,
// 	image: product.image,
// 	quantity: 2,
// };
const cart = { ...product, quantity: 2 };
const discountedProduct = { ...product, price: product.price * 0.8 };
console.log(product, discountedProduct);
console.log(cart);

// arrays destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first, second, rest);
