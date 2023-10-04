var elev = {
	nume: 'Ion',
	medie: 9.85,
};

console.log(elev.nume, elev['medie']);
console.log(elev.medie);

var elevi = [
	{ nume: 'Ion', medie: 9.15 },
	{ nume: 'Maria', medie: 8.75 },
	{ nume: 'Andrei', medie: 7.9 },
	{ nume: 'Elena', medie: 9.2 },
	{ nume: 'Mihai', medie: 6.5 },
	{ nume: 'Ana', medie: 9.6 },
	{ nume: 'Alex', medie: 9.85 },
	{ nume: 'Diana', medie: 7.3 },
	{ nume: 'Cristian', medie: 8.9 },
	{ nume: 'Laura', medie: 7.7 },
	{ nume: 'Florin', medie: 9.85 },
	{ nume: 'Gabriela', medie: 8.25 },
	{ nume: 'Sorin', medie: 7.1 },
	{ nume: 'Mihaela', medie: 8.65 },
	{ nume: 'George', medie: 6.75 },
	{ nume: 'Adriana', medie: 9.0 },
	{ nume: 'Robert', medie: 7.85 },
	{ nume: 'Daniela', medie: 9.85 },
	{ nume: 'Radu', medie: 6.0 },
	{ nume: 'Larisa', medie: 9.85 },
];

console.log(elevi); // Afișează array-ul cu elevi

var mediaMaxima = elevi[0].medie;
for (var i = 1; i <= elevi.length - 1; i++) {
	if (elevi[i].medie > mediaMaxima) {
		mediaMaxima = elevi[i].medie;
	}
}

var numeleElevilorCuMedieMaxima = [];
for (var i = 0; i <= elevi.length - 1; i++) {
	if (mediaMaxima === elevi[i].medie) {
		numeleElevilorCuMedieMaxima.push(elevi[i].nume);
	}
}

console.log(numeleElevilorCuMedieMaxima);
