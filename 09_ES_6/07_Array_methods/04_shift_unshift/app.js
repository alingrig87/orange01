const arr = [1, 2, 3, 5, 6];

arr.unshift(23);
console.log(arr);

const a = arr.shift();
const b = arr.shift();

console.log('arr = ', arr);
console.log('a = ', a);
console.log('b = ', b);
