var a;
console.log(b);
var b = 10;

// hoisting

// var b;
// var a;
// console.log(b);
// b = 10;

console.log(c);
c = 1;

console.log(c);
var c = 2;

c = 3;
console.log(c);
var c;

var d = 1;
console.log(d);
var d = 2;
console.log(d);

// var d;
// d = 1;
// console.log(d);
// d = 2;
// console.log(d);

var x = 10;
function f() {
	if (x !== 10) {
		console.log(x);
		var x = 20;
		console.log(x);
	}

	for (var i = 1; i <= 11; i++) {}
	console.log(i);
}

f();

// error
// console.log(y);
// let y = 10;

// error
// var z = 1;
// let z = 2;

let z = 10;
function g() {
	if ((z = 11)) {
		let z = 20;
		console.log(z);
	}

	let i;
	for (i = 1; i <= 11; i++) {}
	console.log(i);
}

g();
console.log(z);

const myFirstNumber = 3;
console.log(myFirstNumber);
// error
// myFirstNumber = 4;

const laptop = {
	brand: 'dell',
	price: 2000,
};

// laptop = ....

laptop.price = 1500;
laptop.dialogala = 200;
delete laptop.brand;

console.log(laptop);

laptop = {
	brand: 'apple',
	price: 10000,
};
