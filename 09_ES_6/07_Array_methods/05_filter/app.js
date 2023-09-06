const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((number) => number % 2 == 0);

const names = ['Ana', 'Costel', 'Adrian', 'Mihai', 'Alina'];
const startsWithANames = names.filter((name) => name[0] === 'A');

console.log(startsWithANames);

// create an array of products
const produse = [
	{ nume: 'Telefon', pret: 1000 },
	{ nume: 'Laptop', pret: 2000 },
	{ nume: 'Televizor', pret: 1500 },
	{ nume: 'Cameră foto', pret: 800 },
	{ nume: 'Tabletă', pret: 500 },
	{ nume: 'Ceas', pret: 300 },
	{ nume: 'Mouse', pret: 50 },
	{ nume: 'Tastatură', pret: 80 },
	{ nume: 'Boxe', pret: 200 },
	{ nume: 'Imprimantă', pret: 150 },
	{ nume: 'Monitor', pret: 400 },
	{ nume: 'Casti', pret: 100 },
	{ nume: 'Router', pret: 120 },
	{ nume: 'Hard disk', pret: 150 },
];

const filterByPrice = (products, price) => {
	const filteredProducts = products.filter((product) => product.pret <= price);

	return filteredProducts;
};

console.log(filterByPrice(produse, 100));
