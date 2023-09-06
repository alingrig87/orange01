document
	.getElementById('ro')
	.addEventListener('change', () => (document.cookie = 'language=ro'));

document
	.getElementById('en')
	.addEventListener('change', () => (document.cookie = 'language=en'));

function cookieToJavaScriptObject() {
	const cookieObj = {};
	const cookies = document.cookie.split('; ');
	console.log(cookies);

	for (let i = 0; i <= cookies.length - 1; i++) {
		const key = cookies[i].split('=')[0];
		const value = cookies[i].split('=')[1];
		cookieObj[key] = value;
	}
	return cookieObj;
}

const cookieObject = cookieToJavaScriptObject();
const language = cookieObject['language'];

window.addEventListener('DOMContentLoaded', () => {
	const languageRadioButton = document.getElementById(language);
	console.log(languageRadioButton);
	if (languageRadioButton != null) {
		languageRadioButton.checked = true;
	}
});
