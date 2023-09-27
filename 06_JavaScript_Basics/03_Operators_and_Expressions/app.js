// arithmetic operators
console.log(2 + 3);
console.log(2 - 1);
console.log(4 * 4);
console.log(4 / 3);
console.log(4 % 3);

var a = 10;
var isEven = a % 2 === 0;
console.log(isEven);
console.log(!isEven);

// comparision operators
console.log(2 > 3);
console.log(5 > 2);
console.log(2 >= 2);
console.log(3 <= 5);

console.log(2 == '2');
console.log(2 === '2');
console.log(3 != '3', 'diferit');
console.log(3 !== '3');

// logical operator
console.log(true || false);
console.log(false || true);
console.log(true || true);
console.log(false || false);

console.log(true && false);
console.log(false && true);
console.log(true && true);
console.log(false && false);

console.log(!true);
console.log(!false);

// typeof
var a = 10;
var s = 'ana are mere';
var b = true;
console.log(typeof a, typeof s, typeof b);

var age = 20;

//ternary operators
var canDrive = age > 18;
var canDriveMessage = canDrive ? 'poate conduce' : 'ia-ti permis';
