// https://api.github.com/users

window.addEventListener('DOMContentLoaded', showUsersOnPage);

function showUsersOnPage() {
	const url = 'https://api.github.com/users';
	const container = document.getElementById('container');

	try {
		throw new Error('A aparut o eroare!');
	} catch (error) {
		console.log(error);
	}

	fetch(url)
		.then((response) => response.json())
		.then((users) => {
			const usersInnerHtml = users
				.map(
					(user) =>
						`
	         <div>
	            <img width="50px" src=${user.avatar_url} />
	            <br/>
	            <span>${user.login}</span>
	         </div>
	      `
				)
				.join('');
			container.innerHTML = usersInnerHtml;
			container.style.display = 'grid';
			container.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
		})
		.catch((error) => console.log(error));
}
