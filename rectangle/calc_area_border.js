function kiszamit() {
const egyik = document.getElementById('A');
const masik = document.getElementById('B');
const a = parseFloat(egyik.value);
const b = parseFloat(masik.value);

if(!a || !b || isNaN(value) || !(typeof a === 'number') || !(typeof b === 'number')  {
	alert("Baromságokat írt be");
}

let szoveg = "";

const K = 2 * (a + b);
const T = a * b;

szoveg += "Kerület: " + K.toFixed(2) + "<br>";
szoveg += "Terület: " + T.toFixed(2);

const kimenet = document.querySelector('#output span');
kimenet.innerHTML = szoveg;

}



T.toString() + "\n"  + K.toString();

