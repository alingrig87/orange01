const arr = [1, 5, 6, 9];

// const arrSum = (arr) => {
// 	let sum = 0;
// 	for (let i = 0; i <= arr.length; i++) {
// 		sum = sum + arr[i];
// 	}
// 	return sum;
// };

const showNumber = (a) => {
	console.log('Valoarea numarului este: ', a);
};

const arrSum = (numbers) => {
	let sum = 0;
	numbers.forEach((number) => (sum = sum + number));
	return sum;
};

arr.forEach((number) => console.log(number));

console.log(arrSum([4, 8, 9, 2]));
