function kiszamit() {
	const aOldal = document.getElementById('A');
	const bOldal = document.getElementById('B');
	const cOldal = document.getElementById('C');
	const a = parseFloat(aOldal.value);
	const b = parseFloat(bOldal.value);
	const c = parseFloat(cOldal.value);

	const result = validate(a, b, c);
	if (!result) return;

	let szoveg = "";

	const K = a + b + c;
	const s = K / 2;
	const T = Math.sqrt(s * (s - a)*(s - b)*(s - c));

	szoveg += "Kerület: " + K.toFixed(2) + "<br>";
	szoveg += "Terület: " + T.toFixed(2);

	const kimenet = document.querySelector('#output span');
	kimenet.innerHTML = szoveg + " hosszúságegység";

}

let validate = (a, b, c) => {
	if (!a || !b || !c || Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c)) {
		alert("Baromságokat írt be");
		return false;
	}
	if ((a + b <= c) || (b + c <= a) || (c + a <= b)) {
		alert("Nem háromszöget adott meg");
		return false;
	}
	return true;
}