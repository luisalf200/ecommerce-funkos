var nombre = "Luis";
console.log(nombre);
var apellido = "Mantilla";
console.log(apellido);
var edad = 24;
console.log(edad);
var esMayorDeEdad = true;
console.log(esMayorDeEdad);
var persona = {nombre: "Luis", edad: 24, esMayorDeEdad: true};
console.log(persona);
var numeros = [1, 2, 3, 4, 5];
console.log(numeros);
var saludo = `Hola, mi nombre es ${nombre} ${apellido} y tengo ${edad} años`;
console.log(saludo);

var num1 = parseInt(prompt("Ingresa un número:"));
var num2 = parseInt(prompt("Ingresa otro número:"));

var suma = num1 + num2;
var resta = num1 - num2;
var multiplicacion = num1 * num2;
var division = num1 / num2;
var calculos = `sumandolos da:${suma}, restandolos:${resta}, multiplicandolos:${multiplicacion} y dividiendolos:${division}`;
alert (calculos)
console.log(calculos);
if (num1 > num2) {
    console.log(`${num1} es mayor que ${num2}`);
} else if (num1 < num2) {
    console.log(`${num1} es menor que ${num2}`);
} else {
    console.log(`${num1} y ${num2} son iguales`);
}
