var input = document.getElementById('produs');
var addItemButton = document.getElementById('addButton');
var productsListElement = document.getElementById('myList');

addItemButton.addEventListener('click', adaugareProdusLaLista);

function adaugareProdusLaLista(e) {
	var inputValue = input.value;
	console.log(inputValue);
	var productListItem = document.createElement('li');
	productListItem.innerHTML = inputValue;
	console.log(productListItem);
	productsListElement.appendChild(productListItem);
}
