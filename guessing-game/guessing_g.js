const loading = document.querySelector("body");
loading.onload = () => {
	setTimeout(welcome, 2000);
	function welcome() {confirm("Üdvözlet a játékban!\nÚJ JÁTÉK: szám generáltatása\nMEHET: tipp beküldése\nMUTAT: súgó a számról");}
};

let text = "";

function mainGame() {

 	const szam = Math.floor(Math.random() * 100) + 1;

	let outputTag = document.getElementById("output");
	const clickButton = document.querySelector("input[name='generate-result']");

	clickButton.addEventListener('click', function(){

	let tipp = document.querySelector("[id='user-input']");
		tipp = parseInt(tipp.value.trim());
		tipp = isNaN(tipp) ? 0 : tipp;

		if (!tipp || tipp < 1 || tipp > 100) {
			text = "Rosszat adott meg\nÍrjon be újat!";
			container.style.backgroundColor = 'Red';
			outputTag.textContent = "";
		}
		else if (tipp == szam) {
			text = "Bingo!";
			container.style.backgroundColor = 'Green';
			outputTag.textContent = "";
			let restart = () => confirm("Új játékhoz nyomja meg az indítás gombot");
			setTimeout (restart, 2000);
		}
		else if (tipp < szam) {
			text = "Nagyobb";
			container.style.backgroundColor = 'Blue';
			outputTag.textContent = "";
		}
		else {
			text = "Kisebb";
			container.style.backgroundColor = 'Yellow';
			outputTag.textContent = "";
		}

	});
}


//uj jatek - mehet - mutasd || mehet - mutasd || csak mehet
const DISPLAY = document.querySelector("input[name='display']");
DISPLAY.onclick = () => {
	const outputTag = document.getElementById("output");
	outputTag.textContent = text;
	container.style.backgroundColor = "";
}
