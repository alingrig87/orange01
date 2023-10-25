const myProduct = {
	name: 'apple',
	price: 2000,
	imageURL:
		'https://s13emagst.akamaized.net/products/60458/60457156/images/res_968c9ac33392707226842f4933552b0c.jpg?width=450&height=450&hash=6AE6D92415FC14231EA23EE81A2F6AEA',
};

// function createProductCard(product) {
// 	return `
//       <div class="card">
//          <h2>${product.name}</h2>
//          <img src=${product.imageURL} />
//          <p>${product.price}</p>
//       </div>
//    `;
// }

const productToHtmlCard = (product) =>
	`
      <div class="card">
         <h2>${product.name}</h2>
         <img src=${product.imageURL} />
         <p>${product.price}</p> 
      </div>
   `;

document.querySelector('.container').innerHTML = productToHtmlCard(myProduct);
