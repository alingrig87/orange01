var numberInput = document.getElementById('number');
var outputParagraph = document.getElementById('output');

function squareFillPattern() {
	var n = Number(numberInput.value);
	var output = '';

	for (var i = 1; i <= n; i++) {
		for (var j = 1; j <= n; j++) {
			output = output + '<div class="circle orange"></div>';
		}
		output = output + '<br>';
	}
	outputParagraph.innerHTML = output;
}

function squareHollowPattern() {
	var n = Number(numberInput.value);
	var output = '';

	for (var i = 1; i <= n; i++) {
		for (var j = 1; j <= n; j++) {
			if (i === 1 || j === 1 || i === n || j === n) {
				output = output + '<div class="circle orange"></div>';
			} else {
				output = output + '<div class="circle transparent"></div>';
			}
		}
		output = output + '<br>';
	}
	outputParagraph.innerHTML = output;
}

function rightHalfPiramid() {
	var n = Number(numberInput.value);
	var output = '';

	for (var i = 1; i <= n; i++) {
		for (var j = 1; j <= i; j++) {
			output = output + '<div class="circle orange"></div>';
		}
		output = output + '<br>';
	}
	outputParagraph.innerHTML = output;
}
