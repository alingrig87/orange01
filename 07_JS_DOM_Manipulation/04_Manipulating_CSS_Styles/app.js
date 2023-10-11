var paragraphElement = document.getElementById('myParagraph');

function toggleRedColor() {
	if (paragraphElement.style.color !== 'red') {
		paragraphElement.style.color = 'red';
	} else {
		paragraphElement.style.color = 'black';
	}
}
