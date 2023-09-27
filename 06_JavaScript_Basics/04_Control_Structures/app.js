// IF IF-ELSE sau IF-ELSEIF-ELSE
var a = 3;
if (a > 0) {
	console.log('S-a introdus o valoare pozitiva');
}

// Se citesc doua numere. Sa de afiseze rezultatul impartirii lor. In cazul in care al doilea
// numar este nul, sa se afiseze un mesaj de eroare.
// Exemple:
// se citesc 4 si 2, se afiseaza “Rezultatul impartirii este 2”
// se citesc -6 si 2, se afiseaza “Rezultatul impartirii este -3”
// se citesc 3 si 0, se afiseaza “Operate imposibila; impartitorul este nul”

var a = 3;
var b = 0;
if (b !== 0) {
	console.log('Rezultatul impartirii este:', a / b);
} else {
	console.log('Operatie imposibila, impartitorul este nul');
}
