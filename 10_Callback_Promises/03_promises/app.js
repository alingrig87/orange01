const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		const randomNumber = Math.random();
		if (randomNumber > 0.5) {
			resolve(randomNumber);
		} else {
			reject('Eroare: mai incearca!');
		}
	}, 2000);
});

promise
	.then((result) => console.log(result))
	.catch((error) => console.log(error));
