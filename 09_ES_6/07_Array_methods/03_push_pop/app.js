const numbers = [1, 2, 3, 5, 6];
numbers.push(8);
numbers.push(2);

// console.log(numbers);

let last = numbers.pop();
console.log(last);
numbers.pop();
numbers.pop();

// console.log(numbers);

// create an array with random integer numbers using Math.random
const createRandomArray = (length) => {
	const arr = [];
	for (let i = 1; i <= length; i++) {
		arr.push(Math.floor(Math.random() * 100));
	}
	return arr;
};

const multiplePush = (arr, ...elements) => {
	elements.forEach((element) => arr.push(element));
	// arr.push(...elements);
};

const multiplePop = (arr, noOfElements) => {
	const popedNumbers = [];
	for (let i = 1; i <= noOfElements; i++) {
		const popedNumber = arr.pop();
		popedNumbers.push(popedNumber);
	}
	return popedNumbers.reverse();
};

const arr = createRandomArray(5);
multiplePush(arr, 11, 12, 13);
// multiplePush(arr, 1, 2, 3, 4, 5);

console.log(arr);
console.log(multiplePop(arr, 4));

// console.log(createRandomArray(5));
