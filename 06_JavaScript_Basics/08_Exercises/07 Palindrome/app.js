// Given an integer n, for every integer i <= n, the task is to print “FizzBuzz” if i is divisible by 3 and 5, “Fizz” if i is divisible by 3, “Buzz” if i is divisible by 5 or i (as a string) if none of the conditions are true.

// Example:

// Input: n = 3
// Output: [1 2 Fizz]

// Input: n = 5
// Output: [1 2 Fizz 4 Buzz]

// Input: n = 19
// Output: [1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz]
var firstNumberInput = document.getElementById('first-number');
var secondNumberInput = document.getElementById('second-number');
var outputParagraph = document.getElementById('output');

function fizzBuzz() {
	outputParagraph.innerHTML = '';
	var m = Number(firstNumberInput.value);
	var n = Number(secondNumberInput.value);

	for (var i = m; i <= n; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			outputParagraph.innerHTML =
				outputParagraph.innerHTML +
				'<div class="box fizz-buzz">' +
				i +
				'</div>' +
				' ';
		} else if (i % 3 === 0) {
			outputParagraph.innerHTML =
				outputParagraph.innerHTML +
				'<div class="box fizz">' +
				i +
				'</div>' +
				' ';
		} else if (i % 5 === 0) {
			outputParagraph.innerHTML =
				outputParagraph.innerHTML +
				'<div class="box buzz">' +
				i +
				'</div>' +
				' ';
		} else {
			outputParagraph.innerHTML =
				outputParagraph.innerHTML + '<div class="box">' + i + '</div>' + ' ';
		}
	}
}

function fizzBuzzV1() {
	outputParagraph.innerHTML = '';
	var m = Number(firstNumberInput.value);
	var n = Number(secondNumberInput.value);

	for (var i = m; i <= n; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			outputParagraph.innerHTML = outputParagraph.innerHTML + 'FizzBuzz' + ' ';
		} else if (i % 3 === 0) {
			outputParagraph.innerHTML = outputParagraph.innerHTML + 'Fizz' + ' ';
		} else if (i % 5 === 0) {
			outputParagraph.innerHTML = outputParagraph.innerHTML + 'Buzz' + ' ';
		} else {
			outputParagraph.innerHTML = outputParagraph.innerHTML + i + ' ';
		}
	}
}
