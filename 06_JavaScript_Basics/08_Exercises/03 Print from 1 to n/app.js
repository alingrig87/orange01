var numberInput = document.getElementById('number');
var outputParagraph = document.getElementById('output');

function printFrom1ToN() {
	outputParagraph.innerHTML = '';
	var i = 1;

	while (i <= n) {
		console.log(i);
		outputParagraph.innerHTML = outputParagraph.innerHTML + ' ' + i;
		i = i + 1;
	}
}

function printFrom1ToNUsingFor() {
	outputParagraph.innerHTML = 'Using for';
	var n = Number(numberInput.value);

	for (var i = 1; i <= n; i = i + 1) {
		console.log(i);
		outputParagraph.innerHTML = outputParagraph.innerHTML + ' ' + i;
	}
}
