var myParagraph = document.querySelector('#myParagraph');

function changeParagraphContent() {
	// myParagraph.innerHTML = new Date();
	myParagraph.innerHTML =
		'<span style="color:blue; font-size:200px">Test</span> Lorem Ipsum';
}

var products = [
	{
		name: 'Laptop Acer Aspire 3 A315-59 cu procesor Intel® Core™ i5-1235U pana la 4.40 GHz, 15.6',
		imageURL:
			'https://s13emagst.akamaized.net/products/51816/51815060/images/res_0890cfac25b468d3c89cd0fd3b769d05.jpg?width=720&height=720&hash=8CDFD894328B62A52386276D8F335B2A',
	},
	{
		name: 'Laptop ASUS Zenbook Pro Duo 15 UX582ZW cu procesor Intel® Core™ i7-12700H ',
		imageURL:
			'https://s13emagst.akamaized.net/products/47303/47302554/images/res_61eb9c0e0acefb92a96a3e7554944d5b.jpg?width=720&height=720&hash=F267EBC760D6845DC022BF74115D170C',
	},
	{
		name: 'Laptop 2-in-1 HP Spectre x360 16-f1002nn cu procesor Intel® Core™ i7-1260P',
		imageURL:
			'https://s13emagst.akamaized.net/products/48955/48954751/images/res_51671477b72d09792bda7bfebbf2c97c.jpg?width=720&height=720&hash=157C16B2509BE1658AD2560ED678913B',
	},
	{
		name: 'Laptop Acer Aspire 3 A315-59 cu procesor Intel® Core™ i5-1235U pana la 4.40 GHz, 15.6',
		imageURL:
			'https://s13emagst.akamaized.net/products/51816/51815060/images/res_0890cfac25b468d3c89cd0fd3b769d05.jpg?width=720&height=720&hash=8CDFD894328B62A52386276D8F335B2A',
	},
	{
		name: 'Laptop ASUS Zenbook Pro Duo 15 UX582ZW cu procesor Intel® Core™ i7-12700H ',
		imageURL:
			'https://s13emagst.akamaized.net/products/47303/47302554/images/res_61eb9c0e0acefb92a96a3e7554944d5b.jpg?width=720&height=720&hash=F267EBC760D6845DC022BF74115D170C',
	},
	{
		name: 'Laptop 2-in-1 HP Spectre x360 16-f1002nn cu procesor Intel® Core™ i7-1260P',
		imageURL:
			'https://s13emagst.akamaized.net/products/48955/48954751/images/res_51671477b72d09792bda7bfebbf2c97c.jpg?width=720&height=720&hash=157C16B2509BE1658AD2560ED678913B',
	},
];

var productsDiv = document.querySelector('#products');
function showProducts() {
	var productsHtmlContent = '';
	for (var i = 0; i <= products.length - 1; i++) {
		productsHtmlContent += `
      <div class="product">
         <p>${products[i].name}
         <img src=${products[i].imageURL} />   
      </div>
   `;
	}

	productsDiv.innerHTML = productsHtmlContent;
}

// '<div class="product">' +
// '<img ' +
// 'src=' +
// products[0].imageURL +
// '/>' +
// '</div>';
