// arr destrutturazione e rest
let arrElement = document.getElementById("arr");

function calc(...a){
    return a.reduce.call(arguments,(a, b) => a+b);
}

let arr = [1,5,6,7,10];

arrElement.innerHTML = "La somma dei numeri calcolati è: " + calc(...arr);

//oggetto destrutturazione
let objElement = document.getElementById("obj");

let obj = {
    name: "Mario",
    lastname: "Rossi"
}

let {name: Nome, lastname: Cognome} = obj;
objElement.innerHTML = `Ciao ${Nome} ${Cognome}`;
//oppure
let objElement2 = document.getElementById("obj2");
let nome, cognome;

({name: nome2, lastname: cognome2} = {name: "Mario",lastname: "Pesce"});

objElement2.innerHTML = `Ciao ${nome2} ${cognome2}`;