//tarea de semana 5 JavaScript Básico

var nombre = "Luis";
console.log(nombre);
var apellido = "Mantilla";
console.log(apellido);
var edad = 24;
console.log(edad);
var esMayorDeEdad = true;
console.log(esMayorDeEdad);
var persona = { nombre: "Luis", edad: 24, esMayorDeEdad: true };
console.log(persona);
var numeros = [1, 2, 3, 4, 5];
console.log(numeros);
var saludo = `Hola, mi nombre es ${nombre} ${apellido} y tengo ${edad} años`;
console.log(saludo);

var num1 = 20;
var num2 = 30;

var suma = num1 + num2;
var resta = num1 - num2;
var multiplicacion = num1 * num2;
var division = num1 / num2;
var calculos = `sumandolos da:${suma}, restandolos:${resta}, multiplicandolos:${multiplicacion} y dividiendolos:${division}`;
console.log(calculos);
if (num1 > num2) {
  console.log(`${num1} es mayor que ${num2}`);
} else if (num1 < num2) {
  console.log(`${num1} es menor que ${num2}`);
} else {
  console.log(`${num1} y ${num2} son iguales`);
}

//tarea de semana 6 Funciones, Array, Objetos, JSON

function sumatres(a, b, c) {
  let result = a + b + c;
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
};

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
};

comparafle(7, 2);

const player = {
  nombre1: "Red",
  edad: 10,
  origen: "kanto",
  estus: "Campeon",
  inicial: "Pikachu",
};

const { nombre1, origen, inicial } = player;
console.log("Entrenador: " + nombre);
console.log("De: " + origen);
console.log("Compañero: " + inicial);

const starter = ["Oro", 155, 158, ["cyndaquill", "totodile"]];

const [entrenador2, poke1, poke2, [fuego, agua]] = starter;
console.log("Entrenador: " + entrenador2);
console.log("cual starter eligio: " + fuego + " numero: " + poke1);

//tarea de semana 7 Bucles

const entrenador = [
  { nombre: "Rojo", edad: 20, inicial: "Charmander", IQ:10, total:0},
  { nombre: "Gold", edad: 40, inicial: "Totodile", IQ:10, total:0},
  { nombre: "Brendan", edad: 10, inicial: "Mudkip", IQ:10, total:0},
  { nombre: "León", edad: 27, inicial: "Chimchar", IQ:10, total:0},
  { nombre: "Victor", edad: 15, inicial: "scorbunny", IQ:10, total:0},
  { nombre: "Florian", edad: 8, inicial: "fuecoco", IQ:10, total:0},
];


for (let i = 0; i < entrenador.length; i++) {
  let obj = entrenador[i];
  obj.total = obj.edad * obj.IQ;
}

const lista = [];
console.log("precio de boleto de cine: 100$");
console.log("los entrenadores que entran al cine son:");

for (let i = 0; i < entrenador.length; i++) {
  console.log(entrenador[i]);
  
  if (entrenador[i].edad >= 18) {
    console.log("VÁLIDO");
  } else {
    console.log("NO VÁLIDO");
  }

  let edadCliente = entrenador[i].edad;
  switch (true) {
    case edadCliente < 18:
      precio = 100 * 0.5;
      console.log(
        entrenador[i].nombre +
          " tiene " +
          edadCliente +
          " años el y su compañero " +
          entrenador[i].inicial +
          " reciben un 50% de descuento en la entrada. Por lo que pagara: " +
          precio +
          "$"
      );
      break;
    case edadCliente >= 18 && edadCliente < 25:
      precio = 100 * 0.75;
      console.log(
        entrenador[i].nombre +
          " tiene " +
          edadCliente +
          " años el y su compañero " +
          entrenador[i].inicial +
          " reciben un 25% de descuento en la entrada. Por lo que pagara: " +
          precio +
          "$"
      );
      break;
    case edadCliente >= 25 && edadCliente < 30:
      precio = 100;
      console.log(
        entrenador[i].nombre +
          " tiene " +
          edadCliente +
          " años el y su compañero " +
          entrenador[i].inicial +
          " no reciben ningún descuento en la entrada. Por lo que pagara: " +
          precio +
          "$"
      );
      break;
    case edadCliente >= 30:
      precio = 100 * 0.9;
      console.log(
        entrenador[i].nombre +
          " tiene " +
          edadCliente +
          " años el y su compañero " +
          entrenador[i].inicial +
          " reciben un 10% de descuento en la entrada. Por lo que pagara: " +
          precio +
          "$"
      );
      break;
  }
}

//tarea de semana 8 Funciones de orden superior

entrenador.forEach(function (entrenador) {
  console.log(
    "Entrenador: " + entrenador.nombre + " inicial: " + entrenador.inicial
  );
});

entrenador.forEach(function (entrenador) {
  if (entrenador.edad > 18) {
    console.log("Nombre: " + entrenador.nombre + ", edad: " + entrenador.edad);
  }
});

const edades = entrenador.map(function (entrenador) {
  return entrenador.edad;
});

const sumaedad = edades.reduce(function (total, edad) {
  return total + edad;
});

const promedio = sumaedad / entrenador.length;

console.log(
  "Las edades son: " +
    edades +
    " sumado da: " +
    sumaedad +
    " y su promedio da: " +
    promedio
);

entrenador.sort(function (a, b) {
  if (a.nombre < b.nombre) {
    return -1;
  }
  if (a.nombre > b.nombre) {
    return 1;
  }
  return 0;
});
entrenador.forEach(function (entrenador) {
  console.log(entrenador.nombre);
});

entrenador.sort(function (a, b) {
  return b.edad - a.edad;
});

let edadmayor = Math.round(entrenador[0].edad);

console.log(
  "El entrenador mas grande es: " +
    entrenador[0].nombre +
    " y tiene: " +
    edadmayor
);

//tarea de semana 9 DOM, Eventos y Storage

const h1 = document.querySelector("h1");
h1.textContent = "Hola Mexico";

const Elemento = document.getElementById("Elemento");
const Mostrar = document.getElementById("Mostrar");
const Ocultar = document.getElementById("Ocultar");

Mostrar.addEventListener("click", function () {
  Elemento.style.display = "block";
});

Ocultar.addEventListener("click", function () {
  Elemento.style.display = "none";
});

entrenador.forEach((element) => {
  Elemento.innerHTML += `
    <div class="elemento">
        <span class="estilo">Entrenador:</span>
        <span> ${element.nombre}</span>
        <br>
        <span class="estilo">Edad:</span>
        <span> ${element.edad}</span>
        <br>
        <span class="estilo">Entrenador:</span>
        <span> ${element.inicial}</span>
        <span class="estilo">Total:</span>
        <span> ${element.total}</span>
      </div>
    `;
});

const Mensaje = document.getElementById("Mensaje");
const acanom = document.getElementById("acanom");
const Enviar = document.getElementById("Enviar");
const Borrar = document.getElementById("Borrar");

let usuario = localStorage.getItem("usuario");
if (usuario) {
  Mensaje.innerHTML = `Bienvenido nuevamente, ${usuario}`;
  Borrar.style.display = "inline-block";

} else {
  acanom.style.display = "block";
  Enviar.style.display = "block";
  Borrar.style.display ="none";

  Enviar.addEventListener("click", function () {
    usuario = acanom.value;
    localStorage.setItem("usuario", usuario);
    Mensaje.innerHTML = `Bienvenido, ${usuario}`;
    acanom.style.display = "none";
    Enviar.style.display = "none";
    Borrar.style.display = "block";
  });
}

Borrar.addEventListener("click", function () {
  localStorage.removeItem("usuario");
  Mensaje.innerHTML = "";
  acanom.style.display = "block";
  Enviar.style.display = "block"; 
  Borrar.style.display = "none";
  location.reload();
});
