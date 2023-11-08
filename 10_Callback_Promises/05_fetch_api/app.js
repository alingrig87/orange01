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
