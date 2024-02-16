/*//Ejercicio 1.1
let userInput = prompt("Ingrese un número entre 1 y 100:");
let numero = Number(userInput);

if (numero >= 1 && numero <= 100 && Number.esEntero(numero)) {
    for (let i = numero; i >= 0; i--) {
        console.log(i);
    }
} else {
    console.error("Entrada inválida. Por favor, ingrese un número entero entre 1 y 100.");
}

//Ejercicio 1.2
let userInput = prompt("Ingrese un número entre 1 y 10:");
let numero = Number(userInput);

if (numero >= 1 && numero <= 10 && Number.esEntero(numero)) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} x ${numero} = ${i * numero}`);
    }
} else {
    console.error("Entrada inválida. Por favor, ingrese un número entero entre 1 y 10.");
}

//Ejercicio 1.3
let suma = 0;
let numero;

while (true) {
    let entrada = prompt("Ingrese un número (0 para terminar):");
    numero = Number(entrada);

    if (!Number.esEntero(numero)) {
        console.error("Entrada inválida. Por favor, ingrese un número válido.");
        continue;
    }
    
    if (numero === 0) {
        break;
    }
    
    suma += numero;
}

console.log("La suma de los números ingresados es:", suma);

//Ejercicio 1.4
let suma = 0;
let numero;

do {
    let entrada = prompt("Ingrese un número (0 para terminar):");
    numero = Number(entrada);

    if (numero === null) {
        console.error("Entrada inválida. Por favor, ingrese un número válido.");
        continue;
    }
    
    suma += numero;
} while (numero !== 0);

console.log("La suma de los números ingresados es:", suma);

//Ejercicio 1.5
let persona = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 30,
    ciudad: "Madrid",
    profesion: "Ingeniero"
}
for (let key in persona) {
    console.log(key);
}

//Ejercicio 1.6
let persona = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 30,
    ciudad: "Madrid",
    profesion: "Ingeniero"
}
for (let clave in persona) {
    console.log(persona[clave]);
}

//Ejercicio 2.1
let secretNumber = sumaImpares; 
let attempts = 0;

while (true) {
    let userInput = prompt("Ingrese un número:");
    let guess = +userInput;

    if (!Number.isFinite(guess)) {
        console.error("Entrada inválida. Por favor, ingrese un número válido.");
        continue;
    }

    attempts++;

    if (guess === secretNumber) {
        console.log(`¡Lo has adivinado! El número secreto era ${secretNumber} y has realizado ${attempts} intentos.`);
        break;
    } else if (guess > secretNumber) {
        console.log("El número ingresado es mayor que el secreto.");
    } else {
        console.log("El número ingresado es menor que el secreto.");
    }
}

//Ejercicio 2.2
let number = prompt("Ingrese un número:");
let num = +number;

if (!Number.esEntero(num) || num <= 0) {
    console.error("Entrada inválida. Por favor, ingrese un número válido mayor que cero.");
} else {
    console.log(`Los divisores de ${num} son:`);
    for (let i = num; i >= 1; i--) {
        if (num % i === 0) {
            console.log(i);
        }
    }
}

//Ejercicio 2.3
function sonarCampana() {
    return "Ding Dong, ";
}

let resultado = "";

for (let i = 0; i < 5; i++) {
    resultado += sonarCampana();
}

console.log(resultado);

//Ejercicio 2.4
const fechaLimite = new Date('2024-12-31');
const fechas = ["1984-02-18", "1998-03-02", "1973-07-15", "2024-10-31", "2081-09-01"];

for (const fecha of fechas) {
    if (fecha >= fechaLimite) {
        console.log(fecha);
    }
}

//Ejercicio2.5
const colores = ["Rojo", "Verde", "Azul", "Amarillo", "Naranja"];

for (const color of colores) {
    console.log(color);
}

//Ejercicio 2.6
function imprimirColores(array) {
    for (const elemento of array) {
        console.log(elemento);
    }
}

const colores = ["Rojo", "Verde", "Azul", "Amarillo", "Naranja"];
imprimirColores(colores);

//Ejercicio 2.7
const numeros = [5, 7, 1, 3, 50];

for (const numero of numeros) {
    const doble = numero * 2;
    console.log(`El número es ${numero} y su doble es ${doble}`);
}

//Ejercicio 2.8
const familia = [
    { nombre: "Juan", edad: 40, relacion: "Padre" },
    { nombre: "María", edad: 38, relacion: "Madre" },
    { nombre: "Pedro", edad: 18, relacion: "Hijo" },
    { nombre: "Ana", edad: 15, relacion: "Hija" }
];

function presentarFamilia(miembros) {
    for (const miembro of miembros) {
        console.log(`Hola, soy ${miembro.nombre}, tengo ${miembro.edad} años y soy ${miembro.relacion}`);
    }
}

presentarFamilia(familia);
*/
//Ejercicio 3.1
let sumaPares = 0;
let sumaImpares = 0;
let numero;

while (true) {
    let entrada = prompt("Ingrese un número (ingrese 0 para finalizar):");
    numero = parseInt(entrada);

    if (isNaN(numero)) {
        console.error("Entrada inválida. Por favor, ingrese un número válido.");
        continue;
    }

    if (numero === 0) {
        break;
    }

    if (numero % 2 === 0) {
        sumaPares += numero;
    } else {
        sumaImpares += numero;
    }
}

console.log("Suma de números pares:", sumaPares);
console.log("Suma de números impares:", sumaImpares);