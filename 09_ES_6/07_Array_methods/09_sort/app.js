const names = ['Ion', 'Maria', 'Andrei', 'Costel'];
const numbers = [1, 11, 12, 4, 5, 6, 8];

console.log(names.sort());

const numbersComparator = (a, b) => {
	if (a > b) {
		return 1;
	} else if (a < b) {
		return -1;
	} else {
		return 0;
	}
};

// console.log(numbers.sort(numbersComparator));
const sortNumbers = (numbers, type) => {
	if (type === 'ASC') {
		numbers.sort((a, b) => a - b);
	} else if (type === 'DESC') {
		numbers.sort((a, b) => b - a);
	}

	return numbers;
};

console.log(sortNumbers(numbers, 'DESC'));
console.log(sortNumbers(numbers, 'ASC'));
console.log(sortNumbers(numbers, 'DESC'));

console.log(numbers.sort((a, b) => a - b));

const masini = [
	{
		brand: 'Audi',
		nume: 'A4',
		pret: 25000,
		anFabricatie: 2020,
		nrKilometri: 15000,
	},
	{
		brand: 'BMW',
		nume: 'X5',
		pret: 35000,
		anFabricatie: 2019,
		nrKilometri: 20000,
	},
	{
		brand: 'Mercedes',
		nume: 'C-Class',
		pret: 30000,
		anFabricatie: 2021,
		nrKilometri: 10000,
	},
	{
		brand: 'Toyota',
		nume: 'Corolla',
		pret: 20000,
		anFabricatie: 2022,
		nrKilometri: 5000,
	},
	{
		brand: 'Ford',
		nume: 'Fusion',
		pret: 18000,
		anFabricatie: 2018,
		nrKilometri: 30000,
	},
	{
		brand: 'Honda',
		nume: 'Civic',
		pret: 22000,
		anFabricatie: 2020,
		nrKilometri: 12000,
	},
	{
		brand: 'Nissan',
		nume: 'Altima',
		pret: 19000,
		anFabricatie: 2021,
		nrKilometri: 15000,
	},
	{
		brand: 'Chevrolet',
		nume: 'Cruze',
		pret: 17000,
		anFabricatie: 2019,
		nrKilometri: 25000,
	},
	{
		brand: 'Hyundai',
		nume: 'Elantra',
		pret: 20000,
		anFabricatie: 2022,
		nrKilometri: 8000,
	},
	{
		brand: 'Kia',
		nume: 'Optima',
		pret: 21000,
		anFabricatie: 2020,
		nrKilometri: 13000,
	},
];

console.log(masini.sort((masina1, masina2) => masina1.pret - masina2.pret));

const pachetDeCarti = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 5, 5, 6, 8, 9];
// schufle
pachetDeCarti.sort((carte1, carte2) => Math.random() - 0.5);

console.log(Math.random() - 0.5);
console.log(pachetDeCarti);
