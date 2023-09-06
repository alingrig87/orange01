// fetch('https://646e37ce9c677e23218b4b89.mockapi.io/students')
// 	.then((result) => result.json())
// 	.then(studentsToCards);
// .then(
// 	(students) =>
// 		(document.getElementById('students').innerHTML = students
// 			.map(
// 				(student) => `
//       <div>
//          <h2>${student.firstName}</h2>
//          <img src=${student.image}/>
//       </div>
//       `
// 			)
// 			.join(' '))
// );

const URL = 'https://646e37ce9c677e23218b4b89.mockapi.io/students';

document.getElementById('get').addEventListener('click', loadAllStudentOnPage);

function loadAllStudentOnPage() {
	fetch(URL)
		.then((result) => result.json())
		.then(studentsToCards);
}

function studentsToCards(students) {
	document.getElementById('students').innerHTML = students
		.map(
			(student) => `
         <div>
            <h2>${student.firstName}</h2>
            <img src=${student.image} />
         </div>
         `
		)
		.join(' ');
}

document.getElementById('post').addEventListener('click', addNewStudent);

const student = {
	firstName: 'Alin',
	lastName: 'Grigorescu',
	grades: [8, 9, 10],
	average: 9,
	image:
		'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/286.jpg',
};

console.log(JSON.stringify(student));

function addNewStudent() {
	fetch(URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(student),
	});
}

document.getElementById('put').addEventListener('click', updateStudent);

function updateStudent() {
	fetch(URL + '/1', {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			image:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/640px-Donald_Trump_official_portrait.jpg',
		}),
	});
}

document.getElementById('delete').addEventListener('click', deleteStudent);

function deleteStudent() {
	fetch(URL + '/3', {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	});
}
