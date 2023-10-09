var strInput = document.getElementById('string');
var outputParagraph = document.getElementById('output');

function checkPalindrome() {
	var str = strInput.value;
	var i = 0;
	var j = str.length - 1;
	while (i < j) {
		if (str[i] !== str[j]) {
			outputParagraph.innerHTML = str + ' nu este palindrom';
			return;
		}
		i++;
		j--;
	}
	outputParagraph.innerHTML = str + ' este palindrom';
}
