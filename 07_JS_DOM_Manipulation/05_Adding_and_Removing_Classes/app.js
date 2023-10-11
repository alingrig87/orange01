var paragraph = document.getElementById('myParagraph');

function addClass() {
	paragraph.classList.add('red');
	paragraph.classList.add('blue');
}
function removeClass() {
	paragraph.classList.remove('red');
}
function toggleClass() {
	paragraph.classList.toggle('red');
}
