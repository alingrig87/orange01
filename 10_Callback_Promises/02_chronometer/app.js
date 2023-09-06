let seconds = 58;
let minutes = 0;
let timerId;

const startButton = document.querySelector('#start');
startButton.addEventListener('click', startTimer);

function startTimer() {
	timerId = setInterval(() => {
		showSeconds(seconds);
		showMinutes(minutes);
		seconds++;
		if (seconds == 60) {
			seconds = 0;
			minutes++;
		}
	}, 1000);
	console.log(timerId);
}

function showSeconds(value) {
	const secondsSpan = document.querySelector('#seconds-span');
	if (value < 10) {
		value = '0' + value;
	}
	secondsSpan.innerHTML = value;
}

function showMinutes(value) {
	const minutesSpan = document.querySelector('#minutes-span');
	if (value < 10) {
		value = '0' + value;
	}
	minutesSpan.innerHTML = value;
}

const stopButton = document.querySelector('#stop');
stopButton.addEventListener('click', stopTimer);

function stopTimer() {
	clearInterval(timerId);
}

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', resetTimer);

function resetTimer() {
	seconds = 0;
	minutes = 0;
	const secondsSpan = document.querySelector('#seconds-span');
	const minutesSpan = document.querySelector('#minutes-span');
	secondsSpan.innerHTML = '00';
	minutesSpan.innerHTML = '00';
	clearInterval(timerId);
	startTimer();
}
