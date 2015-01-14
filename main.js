function updateClock () {
	var today = new Date();
	var hours = today.getHours();
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();

	var hoursElement = document.getElementById("hours");
	hoursElement.innerHTML = hours + ":";
	
	var minutesElement = document.getElementById("minutes");
	minutesElement.innerHTML = minutes + ":";

	var secondsElement = document.getElementById("seconds");
	secondsElement.innerHTML = seconds;

	var AMPMElement = document.getElementById("am_pm");

	if (hours < 10) {
		hoursElement.innerHTML = "0" + hours + ":";
	}

	if (minutes < 10) {
		minutesElement.innerHTML = "0" + minutes + ":";
	}

	if (seconds < 10) {
		secondsElement.innerHTML = "0" + seconds;
	}

	if (hours < 12) {
		AMPMElement.innerHTML = "AM";
	} else {
		AMPMElement.innerHTML = "PM";
		hoursElement.innerHTML = (hours - 12) + ":";
	}
}
window.setInterval(updateClock, 1000);