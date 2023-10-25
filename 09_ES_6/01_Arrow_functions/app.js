function add(a, b) {
	return a + b;
}

const sum = add(2, 3);
const sum1 = add(3, 5);

console.log(sum, sum1);

// const addArrow = (a, b) => {
// 	return a + b;
// };

const addArrow = (a, b) => a + b;
const isEven = (n) => n % 2 === 0;

console.log(addArrow(8, 12));
