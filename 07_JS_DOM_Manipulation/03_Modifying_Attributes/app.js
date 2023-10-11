var imageElement = document.getElementById('myImage');

function changeImageSource() {
	console.log('Before', imageElement.src);
	imageElement.src =
		'https://s13emagst.akamaized.net/products/48592/48591222/images/res_12362c60d3c74a4ac96f0ae792cf673b.jpg?width=720&height=720&hash=09657356F1E530DE333F224A09D667D5';
	console.log('after', imageElement.src);
}

var passwordInput = document.getElementById('input-password');

function changeInputType() {
	passwordInput.type = 'text';
}
