const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first, second, rest);

const arr = [1, 3, 4];
const arr1 = [2, 4, 8];
const merged = [...arr, ...arr1];
