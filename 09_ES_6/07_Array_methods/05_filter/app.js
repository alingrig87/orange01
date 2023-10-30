const numbers = [1, 2, 3, 18, 19, 21, 33];
const evenNumbers = numbers.filter((number) => number % 2 == 0);
const oddNumbers = numbers.filter((number) => number % 2 == 1);

console.log(evenNumbers);
console.log(oddNumbers);

const names = ['Ana', 'Costel', 'Andreea', 'Alin', 'Alexandru', 'Mihai'];
const startWithANames = names.filter(
	(name) => name[0] === 'A' || name[0] === 'a'
);
console.log(startWithANames);

const listaProduseElectronice = [
	{ nume: 'Televizor Smart', pret: 1499.99 },
	{ nume: 'Laptop Gaming', pret: 2999.99 },
	{ nume: 'Telefon Mobil', pret: 799.99 },
	{ nume: 'Tabletă', pret: 499.99 },
	{ nume: 'Cameră DSLR', pret: 1299.99 },
	{ nume: 'Sistem Audio Bluetooth', pret: 199.99 },
	{ nume: 'Smartwatch', pret: 249.99 },
	{ nume: 'Router Wi-Fi', pret: 79.99 },
	{ nume: 'Mouse Gaming', pret: 49.99 },
	{ nume: 'Tastatură Mecanică', pret: 89.99 },
];

const priceLessThan200Products = listaProduseElectronice.filter(
	(product) => product.pret < 200
);

console.log(priceLessThan200Products);
