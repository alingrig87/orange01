const numbers = [1, 4, 5, 6];
const squaredNumbers = numbers.map((number) => number * number);
console.log(squaredNumbers);

const products = [
	{
		name: 'Tricou alb',
		price: 39.99,
		image:
			'https://img2.ans-media.com/i/540x813/AW22-TSM13D_00X_F1.jpg@webp?v=1661505224',
	},
	{
		name: 'Pantaloni negri',
		price: 79.99,
		image:
			'https://www.atmospherefashion.ro/admin/galerie/server/php/files/6440/pantaloni-negri-drepti-p-919-10.jpg',
	},
	{
		name: 'Geantă de mână',
		price: 149.99,
		image:
			'https://img2.ans-media.com/i/540x813/AW22-TOM00N_99X_F1.jpg@webp?v=1654838846',
	},
	{
		name: 'Cămașă albastră',
		price: 59.99,
		image:
			'https://img01.ztat.net/article/spp-media-p1/e5c7a9632a3440e09b6ff973bb950a6d/339e249dcde14863bc2956b9e2f8af5a.jpg?imwidth=1800',
	},
	{
		name: 'Papuci de casă',
		price: 29.99,
		image:
			'https://c.cdnmp.net/796159473/p/m/8/papuci-de-casa-lana-alpaca-merinos~808.jpg',
	},
];

const productsInnerHTML = products
	.map(
		(product) => `
   <div class="card">
      <h2>${product.name}</h2>
      <img src=${product.image} />
      <p>${product.price} RON </p>
   </div>
`
	)
	.join('');

document.getElementById('container').innerHTML = productsInnerHTML;
