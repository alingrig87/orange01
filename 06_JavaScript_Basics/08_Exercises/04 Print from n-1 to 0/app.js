var numberInput = document.getElementById('number');
var outputParagraph = document.getElementById('output');

function printFromNminus1To0() {
	outputParagraph.innerHTML = '';
	var n = Number(numberInput.value);
	var i = n - 1;

	while (i >= 0) {
		console.log(i);
		outputParagraph.innerHTML = outputParagraph.innerHTML + ' ' + i;
		i = i - 1;
	}
}

function printFromNminus1To0UsingFor() {
	outputParagraph.innerHTML = 'Using for';
	var n = Number(numberInput.value);

	for (var i = n - 1; i >= 0; i = i - 1) {
		console.log(i);
		outputParagraph.innerHTML = outputParagraph.innerHTML + ' ' + i;
	}
}
