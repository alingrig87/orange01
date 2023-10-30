const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.slice(1, 4);

console.log(newNumbers, numbers);

// const newNumbers2 = numbers.splice(1, 4);
// console.log(newNumbers2, numbers);

const newNumbers3 = numbers.splice(1, 4, 999);
console.log(newNumbers3, numbers);
