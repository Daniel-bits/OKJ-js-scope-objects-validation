function calcTimeOfDay() {
	let timeToday = new Date().getHours();

	timeToday = Math.floor(timeToday / 6);

	let greeting = "";
	switch (timeToday) {
		case 0: greeting += "Éjszaka dolgozik?";
			break;
		case 1: greeting += "Jó reggelt kívánok!";
			break;
		case 2: greeting += "Jó napot kívánok!";
			break;
		case 3: greeting += "Jó estét kívánok!";
			break;
		default:
			console.log("Error");
			break;
	}
	openWindow(greeting);
}
let openWindow = (greeting) => {
	const newWindow = window.open('', '', 'width=300, height=300');
	newWindow.document.writeln("<div></div>", greeting);
	setTimeout(function(){newWindow.close()}, 3000);
}