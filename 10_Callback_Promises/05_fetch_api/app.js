const getBtn = document.getElementById('get');
getBtn.addEventListener('click', showProductsCards);

function showProductsCards() {
	fetch('https://654bc6c15b38a59f28efb3a2.mockapi.io/products')
		.then((response) => response.json())
		.then(
			(products) =>
				(document.getElementById('products').innerHTML = products
					.map(
						(product) =>
							`
                  <div>
                     <h2>${product.name}</h2>
                     <img src=${product.imageURL} />
                     <p>${product.price}</p>
                  </div>
                  `
					)
					.join(''))
		);
}

const postBtn = document.getElementById('post');
postBtn.addEventListener('click', addNewProduct);

function addNewProduct() {
	const url = 'https://654bc6c15b38a59f28efb3a2.mockapi.io/products';

	const product = {
		name: 'ACG Alin',
		imageURL:
			'https://auchan.vtexassets.com/arquivos/ids/164754-1200-auto?v=637985891528600000&width=1200&height=auto&aspect=true',
		price: 3.35,
		description: 'Apa carbogazoasa minerala naturala Tusnad, 2l',
	};

	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(product),
	};

	fetch(url, options).then((response) => console.log(response));
}

const putBtn = document.getElementById('put');
putBtn.addEventListener('click', updateImg);

function updateImg() {
	const url = 'https://654bc6c15b38a59f28efb3a2.mockapi.io/products/1';

	const product = {
		imageURL:
			'https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_GEO_09142021_inline.jpg.slideshow-large_2x.jpg',
	};

	const options = {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(product),
	};

	fetch(url, options).then((response) => console.log(response));
}

const deleteBtn = document.getElementById('delete');
deleteBtn.addEventListener('click', deleteProduct);

function deleteProduct() {
	const url = 'https://654bc6c15b38a59f28efb3a2.mockapi.io/products/20';

	const options = {
		method: 'DELETE',
	};

	fetch(url, options).then((response) => console.log(response));
}
