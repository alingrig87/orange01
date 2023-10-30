const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i <= numbers.length - 1; i++) {
// 	sum = sum + numbers[i];
// }

const sum = numbers.reduce(
	(accumulator, currentValue) => accumulator + currentValue,
	0
);

console.log(sum);

const listaProduseElectronice = [
	{ nume: 'Televizor Smart', pret: 1499.99, cantitate: 2 },
	{ nume: 'Laptop Gaming', pret: 2999.99, cantitate: 6 },
	{ nume: 'Telefon Mobil', pret: 799.99, cantitate: 9 },
	{ nume: 'Tabletă', pret: 499.99, cantitate: 1 },
	{ nume: 'Cameră DSLR', pret: 1299.99, cantitate: 15 },
	{ nume: 'Sistem Audio Bluetooth', pret: 199.99, cantitate: 4 },
	{ nume: 'Smartwatch', pret: 249.99, cantitate: 2 },
	{ nume: 'Router Wi-Fi', pret: 79.99, cantitate: 1 },
	{ nume: 'Mouse Gaming', pret: 49.99, cantitate: 4 },
	{ nume: 'Tastatură Mecanică', pret: 89.99, cantitate: 5 },
];

const totalPrice = listaProduseElectronice.reduce(
	(acc, product) => acc + product.cantitate * product.pret,
	0
);
console.log(totalPrice.toFixed(2));
