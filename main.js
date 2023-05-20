const framerate = 30;

function init() {
}

function process() {
	if (getPeriod() == 10) {
		document.getElementById("currentPeriod").innerHTML = "It is currently after period 9";
	} else if (getPeriod() == -1) {
		document.getElementById("currentPeriod").innerHTML = "It is currently before period 0";
	} else {
		document.getElementById("currentPeriod").innerHTML = "It is currently period: <b>" + getPeriod() + "</b>";
	}
}
















var mainloop = setInterval(function() {
	process();
	
	if (1 == 0) {
		clearInterval(mainloop);
	}
},framerate);