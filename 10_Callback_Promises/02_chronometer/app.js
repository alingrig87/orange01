let minutes = 0;
let seconds = 55;
let timerId;

const startBtn = document.getElementById('start');
startBtn.addEventListener('click', startTimer);

function startTimer() {
	timerId = setInterval(() => {
		updateSeconds();
		updateMinutes();
	}, 1000);
}

function updateSeconds() {
	seconds++;

	document.getElementById('seconds-span').innerHTML =
		seconds < 10 ? '0' + seconds : seconds == 60 ? '00' : '' + seconds;
}

function updateMinutes() {
	if (seconds === 60) {
		seconds = 0;
		minutes++;
	}
	document.getElementById('minutes-span').innerHTML =
		minutes < 10 ? '0' + minutes : '' + minutes;
}

const stop = document.getElementById('stop');
stop.addEventListener('click', stopTimer);

function stopTimer() {
	clearInterval(timerId);
}
