var numberInput = document.getElementById('number');
var outputParagraph = document.getElementById('output');

function printFrom1ToN() {
	outputParagraph.innerHTML = '';
	var i = 1;
	var n = Number(numberInput.value);

	while (i <= n) {
		console.log(i);
		outputParagraph.innerHTML = outputParagraph.innerHTML + ' ' + i;
		i = i + 1;
	}
}
