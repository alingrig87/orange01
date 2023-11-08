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

async function test() {
	try {
		const result = await promise();
		console.log(result);
	} catch (error) {
		console.log('EROARE: ' + error);
	}
}
