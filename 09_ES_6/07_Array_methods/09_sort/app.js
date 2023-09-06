const fruits = ['pineapple', 'peach', 'apple', 'cherry'];
const numbers = [2, -1, 10, 4, 5];

console.log(fruits.sort());
console.log(fruits);

const numbersComparator = (a, b) => {
	if (a < b) {
		return -1;
	} else if (a > b) {
		return 1;
	} else {
		return 0;
	}
};

// console.log(numbers.sort(numbersComparator));
console.log(numbers.sort((a, b) => a - b));

const studenti = [
	{
		nume: 'John Doe',
		note: [9, 9, 6],
	},
	{
		nume: 'Jane Smith',
		note: [9, 9, 9],
	},
	{
		nume: 'Alex Johnson',
		note: [7, 8, 6],
	},
	{
		nume: 'Sarah Brown',
		note: [10, 9, 10],
	},
	{
		nume: 'Michael Davis',
		note: [6, 7, 8],
	},
	{
		nume: 'Emily Wilson',
		note: [9, 8, 9],
	},
	{
		nume: 'David Thompson',
		note: [7, 6, 7],
	},
	{
		nume: 'Olivia Martinez',
		note: [10, 10, 9],
	},
	{
		nume: 'Daniel Taylor',
		note: [8, 7, 8],
	},
	{
		nume: 'Sophia Rodriguez',
		note: [9, 10, 9],
	},
];

// const studentsWithAverage = studenti.map((student) => ({
// 	...student,
// 	medie: student.note.reduce(
// 		(accumulator, currentValue, index, note) =>
// 			accumulator + currentValue / note.length,
// 		0
// 	),
// }));

const studentsWithAverage = studenti.map((student) => {
	const { note } = student;
	const medie =
		note.reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
		note.length;
	return { ...student, medie: medie.toFixed(2) };
});

// console.log(
// 	studentsWithAverage.sort(
// 		(student1, student2) => student1.medie - student2.medie
// 	)
// );

window.addEventListener('load', populateTable);

function populateTable() {
	const studentsRows = studentsWithAverage
		.map(
			(student) =>
				`
      <tr>
         <td>${student.nume}</td>
         <td>${student.note[0]}</td>
         <td>${student.note[1]}</td>
         <td>${student.note[2]}</td>
         <td>${student.medie}</td>
      </tr>
      `
		)
		.join('');
	document.getElementById('table-body-students').innerHTML = studentsRows;
}

document
	.querySelector('#sort-by-name > i')
	.addEventListener('click', sortByName);
document.querySelector('#sort-by-avg > i').addEventListener('click', sortByAvg);

function sortByName(e) {
	if (e.target.className.includes('up')) {
		studentsWithAverage.sort((student1, student2) => {
			if (student1.nume < student2.nume) {
				return -1;
			} else if (student1.nume > student2.nume) {
				return 1;
			} else {
				return 0;
			}
		});
		e.target.classList.remove('fa-arrow-up');
		e.target.classList.add('fa-arrow-down');
	} else if (e.target.className.includes('down')) {
		studentsWithAverage.sort((student1, student2) => {
			if (student2.nume < student1.nume) {
				return -1;
			} else if (student2.nume > student1.nume) {
				return 1;
			} else {
				return 0;
			}
		});
		e.target.classList.remove('fa-arrow-down');
		e.target.classList.add('fa-arrow-up');
	}

	populateTable();
}

function sortByAvg(e) {
	if (e.target.className.includes('up')) {
		studentsWithAverage.sort(
			(student1, student2) => student1.medie - student2.medie
		);
		e.target.classList.remove('fa-arrow-up');
		e.target.classList.add('fa-arrow-down');
	} else if (e.target.className.includes('down')) {
		studentsWithAverage.sort(
			(student1, student2) => student2.medie - student1.medie
		);
		e.target.classList.remove('fa-arrow-down');
		e.target.classList.add('fa-arrow-up');
	}

	populateTable();
}
