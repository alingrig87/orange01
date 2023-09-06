const str = 'Ana are mere';
console.log(str.split(' '));
console.log('1,2,3,4,5'.split(','));
console.log(['1', '2', '3', '4', '5'].map((element) => Number(element) * 2));

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.join('->'));

console.log('Ana are mere'.split(' ').join('--->'));
console.log('Ana are mere'.replaceAll(' ', '!'));
