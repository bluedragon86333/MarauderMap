function getPeriod() {
	let date = new Date();
	let schoolStart = new Date(date.getYear(),date.getMonth(),date.getDate(),7,50);
	let schoolEnd = new Date(date.getYear(),date.getMonth(),date.getDate(),15,20);
	if (date < schoolStart) {
		return -1; //time is before school starts
	}
	if (date > schoolEnd) {
		return 10; //time is after end of school day
	}
	let perStart = new Date(date.getYear(),date.getMonth(),date.getDate(),7,50);
	let perEnd = new Date(date.getYear(),date.getMonth(),date.getDate(),8,32);
	if (perStart <= date && date <= perEnd) {
		return 0;
	}
	perStart = new Date(date.getYear(),date.getMonth(),date.getDate(),8,35);
	perEnd = new Date(date.getYear(),date.getMonth(),date.getDate(),9,20);
	if (perStart <= date && date <= perEnd) {
		return 1;
	}
	perStart = new Date(date.getYear(),date.getMonth(),date.getDate(),9,23);
	perEnd = new Date(date.getYear(),date.getMonth(),date.getDate(),10,5);
	if (perStart <= date && date <= perEnd) {
		return 2;
	}
	perStart = new Date(date.getYear(),date.getMonth(),date.getDate(),10,8);
	perEnd = new Date(date.getYear(),date.getMonth(),date.getDate(),10,50);
	if (perStart <= date && date <= perEnd) {
		return 3;
	}
	perStart = new Date(date.getYear(),date.getMonth(),date.getDate(),10,53);
	perEnd = new Date(date.getYear(),date.getMonth(),date.getDate(),11,35);
	if (perStart <= date && date <= perEnd) {
		return 4;
	}
}