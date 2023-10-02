var normaDePoluareDropDown = document.getElementById('norme-poluare');
var outputParagraph = document.getElementById('output');

function calculeazaTaxaPoluare(normaDePoluare) {
	// if (normaDePoluare === '0') {
	// 	console.log('Aveti de platit 1000 lei');
	// } else if (normaDePoluare === '1') {
	// 	console.log('Aveti de platit 800 lei');
	// } else if (normaDePoluare === '2') {
	// 	console.log('Aveti de platit 600 lei');
	// } else if (normaDePoluare === '3') {
	// 	console.log('Aveti de platit 400 lei');
	// } else if (
	// 	normaDePoluare === '4' ||
	// 	normaDePoluare === '5' ||
	// 	normaDePoluare === '6'
	// ) {
	// 	console.log('Aveti de platit 10 lei');
	// } else {
	// 	console.log('Norma de poluare invalida!');
	// }
	var taxaDePoluare = 0;
	switch (normaDePoluare) {
		case '0':
			taxaDePoluare = 1000;
			break;
		case '1':
			taxaDePoluare = 800;
			break;
		case '2':
			taxaDePoluare = 600;
			break;
		case '3':
			taxaDePoluare = 400;
			break;
		case '4':
		case '5':
		case '6':
			taxaDePoluare = 10;
			break;
		default:
			taxaDePoluare = undefined;
	}

	if (taxaDePoluare === undefined) {
		outputParagraph.innerHTML = 'Norma de poluare invalida';
	} else {
		outputParagraph.innerHTML = 'Aveti de platit ' + taxaDePoluare + ' lei';
	}
}

function afiseazaTaxaDePoluare() {
	calculeazaTaxaPoluare(normaDePoluareDropDown.value);
}

calculeazaTaxaPoluare('2'); // 1000 lei
calculeazaTaxaPoluare('8'); // invalid input
