// JavaScript code
const sum = (...numbers) => {
	let sum = 0;
	for (let i = 0; i <= numbers.length - 1; i++) {
		sum += numbers[i];
	}
	return sum;
};

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 2, 5, 5));
console.log(sum(1, 2, 2, 1, 222));
console.log(sum(1, 2));
console.log(sum(1, 23, 232));
