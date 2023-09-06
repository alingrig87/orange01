// state -> pending, fullfilled -> operation succesfull
// -> pending, rejected -> thrown an error -> operation unsuccesfull

// const promise = new Promise((resolve, reject) => {
// 	// resolve('pizza');
// 	setTimeout(() => resolve('pizza'), 3000);
// 	// reject('A luat foc pizzeria!');
// });

// setTimeout(() => console.log(promise), 3500);

const promise = Promise.resolve('margherita');

promise
	.then((margherita) => margherita + ' paste')
	.then((margheritaSiPaste) => margheritaSiPaste + ' 3 sosuri')
	.then((result) => {
		throw new Error('Nu avem sosuri!');
	})
	.catch((err) => {
		console.log('Something went wrong!' + err);
		return 'Va rugam sa incercati in 10 min, ne vine marfa';
	})
	.then((result) => console.log(result))
	.finally(() => console.log('Va multumim pentru alegerea facuta!'));

// Promise.all([
// 	Promise.resolve('pizza taraneasca'),
// 	new Promise((resolve, reject) =>
// 		setTimeout(() => resolve('ketchup maioneza'), 3000)
// 	),
// 	Promise.resolve('paste carbonara'),
// ]).then((result) =>
// 	console.log({ pizza: result[0], sosuri: result[1], paste: result[2] })
// );
