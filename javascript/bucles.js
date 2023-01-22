

const entrenador = [    
    {nombre: "Rojo", edad: 20, inicial: "Charmander"},    
    {nombre: "Gold", edad: 40, inicial: "Totodile"},    
    {nombre: "Brendan", edad: 10 , inicial: "Mudkip"},    
    {nombre: "León", edad: 28, inicial: "Chimchar"},
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
            console.log(entrenador[i].nombre +" tiene " + edadCliente + " años y recibe un 50% de descuento en la entrada. Por lo que pagara: " + precio + "$");
            break;
        case (edadCliente >= 18 && edadCliente < 25):
            precio= 100 * 0.75;
            console.log(entrenador[i].nombre +" tiene " + edadCliente + " años y recibe un 25% de descuento en la entrada. Por lo que pagara: " + precio + "$");
            break;
        case (edadCliente >= 25 && edadCliente < 30):
            precio= 100;
            console.log(entrenador[i].nombre +" tiene " + edadCliente + " años y no recibe ningún descuento en la entrada. Por lo que pagara: " + precio + "$");
            break;
        case (edadCliente >= 30):
            precio= 100 * 0.9;
            console.log(entrenador[i].nombre +" tiene " + edadCliente + " años y recibe un 10% de descuento en la entrada. Por lo que pagara: " + precio + "$");
            break;
    }
}
