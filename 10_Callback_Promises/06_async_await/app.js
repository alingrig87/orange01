// https://api.github.com/users

window.addEventListener('DOMContentLoaded', showUsersOnPage);

async function showUsersOnPage() {
	const container = document.getElementById('container');
	try {
		const users = await getUsers();
		showUsersOnContainer(users, container);
		showNcardsOnPage(container, 4);
	} catch (error) {
		show404Image(container);
	}
}

function showUsersOnContainer(users, container) {
	container.innerHTML = users.map((user) => fromUserToCard(user)).join('');
}

function show404Image(container) {
	container.innerHTML = `<img src="https://cdn.ttgtmedia.com/rms/onlineimages/404_error-h_half_column_mobile.png" />`;
}

async function getUsers() {
	const url = 'https://api.github.com/users';
	let response;
	response = await fetch(url);
	if (response.ok == false) {
		console.log('test');
		throw new Error('Serverul este jos!');
	}
	const users = await response.json();

	return users;
}

function fromUserToCard(user) {
	return `<div>
		<img width="50px" src=${user.avatar_url} />
		<br/>
		<span>${user.login}</span>
	</div>`;
}

function showNcardsOnPage(container, noOfCards) {
	container.style.display = 'grid';
	let gridTemplateColumns = '';
	for (let i = 1; i <= noOfCards; i++) {
		gridTemplateColumns += '1fr ';
	}
	container.style.gridTemplateColumns = gridTemplateColumns;
}
