var list = document.getElementById('myList');
list.style.background = 'lightblue';
var removeButton = document.getElementById('removeButton');

removeButton.addEventListener('click', removeListItem);

function removeListItem() {
	var item1 = document.querySelector('#myList li:first-child');
	item1.remove();
}

var removeAllButton = document.getElementById('removeAllButton');
removeAllButton.addEventListener('click', removeAllItems);

function removeAllItems() {
	var items = document.querySelectorAll('#myList li');
	for (var i = 0; i <= items.length - 1; i++) {
		items[i].remove();
	}
}

list.addEventListener('click', handleClick);

function handleClick(e) {
	if (e.target.classList.contains('delete-item')) {
		e.target.parentElement.remove();
	} else if (e.target.classList.contains('item')) {
		e.target.classList.toggle('viewed');
	}
}
