const execution = document.querySelector('button');
execution.onclick = () => {

	const days = document.getElementById('napok');
	let dayValue = parseInt(days.value.trim());

	let output;
	switch (dayValue) {
		case 1:
			output = "Hétfő";
			break;
		case 2:
			output = "Kedd";
			break;
		case 3:
			output = "Szerda";
			break;
		case 4:
			output = "Csütörtök";
			break;
		case 5:
			output = "Péntek";
			break;
		case 6:
			output = "Szombat";
			break;
		case 7:
			output = "Vasárnap";
			break;
		default:
			confirm("Nem megfelelő számot adott meg");
			output = "";
			break;
	}
	const op = document.querySelector('#output span');
	op.innerHTML = output;

}
