// Sa se calculeze viteza medie de deplasare, dupa ce se introduce distanta parcursa(in
//    kilometri) si durata calatoriei(in ore). Viteza medie este distanta impartita la timp. In cazul
//    in care durata este 0, sa se afiseze un mesaj de eroare. Atentie! Viteza nu are voie sa fie
//    negativa!
//    Exemple:
//    se citesc 100 si 2, se afiseaza “Viteza medie a fost 50 km/ora”
//    se citesc 60 si 0, se afiseaza “Felicitari! Se pare ca ai inventat teleportarea!”
//    se citesc -30 si 3, se afiseaza “Distanta parcursa si durata trebuie sa fie pozitive”
//    se citesc 30 si -3, se afiseaza “Distanta parcursa si durata trebuie sa fie pozitive”
//    se citesc -30 si -3, se afiseaza “Distanta parcursa si durata trebuie sa fie pozitive”
var outputParagraph = document.getElementById('output');
var distantaInput = document.getElementById('distanta');
var timpInput = document.getElementById('timp');

function calculeazaVitezaMedie() {
	var distanta = Number(distantaInput.value);
	var timp = Number(timpInput.value);
	var vitezaMedie = 0;

	if (isNaN(distanta) || isNaN(timp)) {
		outputParagraph.innerHTML =
			'Distanta si timpul trebuie sa fie obligatoriu numere!';
	} else if (timp === 0) {
		outputParagraph.innerHTML = 'Felicitari, ai invetat teleportarea!';
	} else if (distanta < 0 || timp < 0) {
		outputParagraph.innerHTML =
			'Distanta parcursa si durata trebuie sa fie pozitive';
	} else {
		vitezaMedie = distanta / timp;
		outputParagraph.innerHTML =
			'Viteza medie a fost ' + vitezaMedie.toFixed(2) + ' km/ora';
	}
}
