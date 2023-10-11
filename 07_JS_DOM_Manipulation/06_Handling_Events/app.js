var inputElement = document.getElementById('myInput');
var paragraphElement = document.getElementById('myParagraph');

inputElement.addEventListener('mouseout', onInput);

function onInput(event) {
	paragraphElement.innerHTML = event.target.value;
}

var inputColor = document.getElementById('input-color');
var myDiv = document.getElementById('myDiv');

inputColor.addEventListener('input', changeDivColor);

function changeDivColor(e) {
	console.log(e.target.value);
	document.body.style.backgroundColor = e.target.value;
}

// function setRandomColorToBody() {
// 	var randomColor = Math.floor(Math.random() * 16777215).toString(16);
// 	console.log(randomColor);
// 	document.body.style.backgroundColor = '#' + randomColor;
// }

// setTimeout(() => {
// 	setRandomColorToBody();
// }, 1000);
