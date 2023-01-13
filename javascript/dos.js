function sumatres(a, b, c) {
var result = a + b + c;
console.log(result);
}
sumatres(2, 8, 5);

function compara(a, b) {
if (a > b) {
    console.log(a + " es mayor que " + b);
} else if (a < b) {
    console.log(a + " es menor que " + b);
} else if (a === b) {
    console.log(a + " es igual a " + b);
} else {
    console.log(a + " es diferente de " + b);
}
}
compara(5, 10);

const sumafle = (a, b, c) => {
    let result = a + b + c;
    console.log(result);
}

sumafle(9, 3, 5);

const comparafle = (a, b) => {
    if (a > b) {
    console.log(`${a} es mayor que ${b}`);
    } else if (a < b) {
    console.log(`${a} es menor que ${b}`);
    } else if (a === b) {
    console.log(`${a} es igual a ${b}`);
    } else {
    console.log(`${a} es diferente de ${b}`);
    }
}

comparafle(7, 2);

const player = {
    nombre: "Red",
    edad: 10,
    origen: "kanto",
    estus: "Campeon",
    inicial: "Pikachu"
};

const { nombre, origen, inicial } = player;
console.log("Entrenador: " + nombre);
console.log("De: " + origen);
console.log("Compañero: " + inicial);


const starter= ["Oro", 155, 158, ["cyndaquill","totodile"]];

const [entrenador, poke1, poke2, [fuego,agua]] = starter;
console.log("Entrenador: " + entrenador);
console.log("cual starter eligio: " + fuego + " numero: " + poke1);

