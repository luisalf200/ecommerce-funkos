const entrenador = [    
    {nombre: "Rojo", edad: 20, inicial: "Charmander"},    
    {nombre: "Gold", edad: 40, inicial: "Totodile"},    
    {nombre: "Brendan", edad: 10 , inicial: "Mudkip"},    
    {nombre: "León", edad: 27, inicial: "Chimchar"},
    {nombre: "Victor", edad: 15, inicial: "scorbunny"},
    {nombre: "Florian", edad: 8, inicial: "fuecoco"},
];

const lista = []
console.log ("precio de boleto de cine: 100$")
console.log ("los entrenadores que entran al cine son:")

for (let i = 0; i < entrenador.length; i++){
    console.log (entrenador[i])

    let edad = entrenador[i].edad;
    if (edad >= 18) {
    console.log("VÁLIDO");
    } else {
    console.log("NO VÁLIDO");
    }

    let edadCliente = entrenador[i].edad;
    switch (true) {
        case (edadCliente < 18):
            precio= 100 * 0.5;
            console.log(entrenador[i].nombre +" tiene " + edadCliente + " años el y su compañero " + entrenador[i].inicial + " reciben un 50% de descuento en la entrada. Por lo que pagara: " + precio + "$");
            break;
        case (edadCliente >= 18 && edadCliente < 25):
            precio= 100 * 0.75;
            console.log(entrenador[i].nombre +" tiene " + edadCliente + " años el y su compañero " + entrenador[i].inicial + " reciben un 25% de descuento en la entrada. Por lo que pagara: " + precio + "$");
            break;
        case (edadCliente >= 25 && edadCliente < 30):
            precio= 100;
            console.log(entrenador[i].nombre +" tiene " + edadCliente + " años el y su compañero " + entrenador[i].inicial + " no reciben ningún descuento en la entrada. Por lo que pagara: " + precio + "$");
            break;
        case (edadCliente >= 30):
            precio= 100 * 0.9;
            console.log(entrenador[i].nombre +" tiene " + edadCliente + " años el y su compañero " + entrenador[i].inicial + " reciben un 10% de descuento en la entrada. Por lo que pagara: " + precio + "$");
            break;
    }
}


entrenador.forEach(function(entrenador){
    console.log("Entrenador: " + entrenador.nombre + " inicial: " + entrenador.inicial)
});

entrenador.forEach(function(entrenador) {
    if (entrenador.edad > 18) {
        console.log("Nombre: " + entrenador.nombre + ", edad: " + entrenador.edad);
    }
});

const edades = entrenador.map(function(entrenador){
    return entrenador.edad;
});

const sumaedad = edades.reduce(function(total, edad) {
    return total + edad;
});

const promedio = sumaedad/entrenador.length

console.log("Las edades son: " + edades + " sumado da: " + sumaedad + " y su promedio da: " + promedio)

entrenador.sort(function(a, b){
    if(a.nombre < b.nombre) { return -1; }
    if(a.nombre > b.nombre) { return 1; }
    return 0;
});
entrenador.forEach(function(entrenador) {
    console.log(entrenador.nombre);
});

entrenador.sort(function(a, b) {
    return b.edad - a.edad;
});

let edadmayor = Math.round(entrenador[0].edad);

console.log("El entrenador mas grande es: " + entrenador[0].nombre + " y tiene: " + edadmayor)