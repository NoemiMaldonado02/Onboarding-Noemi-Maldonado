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
*/
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