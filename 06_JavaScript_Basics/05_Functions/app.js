function isPositive(numberToBeVerified) {
	if (numberToBeVerified > 0) {
		return true;
	} else {
		return false;
	}
}

function isNegative(numberToBeVerified) {
	if (numberToBeVerified < 0) {
		return true;
	} else {
		return false;
	}
}

function isNull(numberToBeVerified) {
	if (numberToBeVerified === 0) {
		return true;
	} else {
		return false;
	}
}

function checkNumber(numberToBeVerified) {
	if (isPositive(numberToBeVerified) === true) {
		console.log('S-a introduc o valoare pozitiva');
	} else if (isNegative(numberToBeVerified) === true) {
		console.log('S-a introdus o valoare negativa');
	} else if (isNull(numberToBeVerified)) {
		console.log('S-a introdus o valoare nula');
	}
}

console.log(isPositive(3));
console.log(isPositive(-12));
console.log(isPositive(0));

// Se citesc doua numere. Sa de afiseze rezultatul impartirii lor. In cazul in care al doilea
// numar este nul, sa se afiseze un mesaj de eroare.
// Exemple:
// se citesc 4 si 2, se afiseaza “Rezultatul impartirii este 2”
// se citesc -6 si 2, se afiseaza “Rezultatul impartirii este -3”
// se citesc 3 si 0, se afiseaza “Operate imposibila; impartitorul este nul”

var a = 3;
var b = 0;
function divideTwoNumbers(a, b) {
	if (b !== 0) {
		console.log('Rezultatul impartirii este:', a / b);
	} else {
		console.log('Operatie imposibila, impartitorul este nul');
	}
}

divideTwoNumbers(2, 0);
divideTwoNumbers(-3, 1.5);
divideTwoNumbers(3, 4);
