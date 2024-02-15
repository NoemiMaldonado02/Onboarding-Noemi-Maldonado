/*//Ejercicio 1.1
let num1 = 4;
let num2 = 5;

if (num1 > num2) {
    console.log(num1);
} else {
    console.log(num2);
} 

//Ejercicio 1.2
if (num1 > num2) {
    console.log(num1);
} else if (num2 > num1) {
    console.log(num2);
} else {
    console.log("Los números son iguales");
}

//Ejercicio 1.3
if (num1 === num2) {
    console.log("Los números son iguales");
} else {
    console.log("Los números son diferentes");
}

//Ejercicio 1.4
let fecha1 = "2018-9-2";
let fecha2 = "2023-7-5";

if (fecha1 > fecha2) {
    console.log(`La fecha ${fecha1} es mayor que ${fecha2}`);
} else {
    console.log("Las fechas son iguales");
}

//Ejercicio 1.5 
let fecha1 = "2018-9-2";
let fecha2 = "2023-7-5";

if (fecha1 > fecha2) {
    console.log(`La fecha ${fecha1} es mayor que ${fecha2}`);
} else if (fecha2 > fecha1) {
    console.log(`La fecha ${fecha2} es mayor que ${fecha1}`);
} else {
    console.log("Las fechas son iguales");
}

//Ejercicio 1.6
let dato1 = 5;
let dato2 = 7;
let dato3 = 9;

if (dato1 > dato2 && dato1 > dato3) {
    console.log(`El número ${dato1} es el mayor`);
} else if (dato2 > dato1 && dato2 > dato3) {
    console.log(`El número ${dato2} es el mayor`);
} else {
    console.log(`El número ${dato3} es el mayor`);
} 

//Ejercicio 2.1 
let color = prompt("Ingrese un color (rojo, azul o verde):");

switch (color) {
    case "rojo":
        console.log("El color de la pasión");
        break;
    case "azul":
        console.log("El color del mar.");
        break;
    case "verde":
        console.log("El color de la naturaleza");
        break;
    default:
        console.log("Color no reconocido");
}

//Ejercicio 2.2
let num1 = prompt("Ingrese el primer valor (entre 1 y 100):");
let num2 = prompt("Ingrese el segundo valor (entre 1 y 100):");
let operacion = prompt("Elija el operador: +,-,*, / ");
let resultado;

switch (operacion) {
    case "+":
        resultado = (num1+num2);
        console.log(`La suma de ${num1} + ${num2} es ${resultado}`);
        break;
    case "-":
        resultado = (num1-num2);
        console.log(`La resta de ${num1} - ${num2} es ${resultado}`);
        break;
    case "*":
        resultado = (num1*num2);
        console.log(`La multiplicación de ${num1} * ${num2} es ${resultado}`);
        break;
    case "/":
        resultado = (num1/num2);
        console.log(`La división de ${num1} / ${num2} es ${resultado}`);
        break;
    default:
        console.log("Operación no válida");
}

//Ejercicio 2.3
let persona1 = {
    nombre: "Juan",
    edad: 39,
    altura: 1.80
};

let persona2 = {
    nombre: "José",
    edad: 45,
    altura: 1.75
};

if (persona1.altura > persona2.altura) {
    if (persona1.edad > persona2.edad) {
        console.log(`${persona1.nombre} es más alto y mayor que ${persona2.nombre}`);
    } else if (persona1.edad < persona2.edad) {
        console.log(`${persona2.nombre} es más alto y mayor que ${persona1.nombre}`);
    } else {
        console.log(`${persona1.nombre} es más alto que ${persona2.nombre}, pero tienen la misma edad`);
    }
} else if (persona1.altura < persona2.altura) {
    if (persona1.edad > persona2.edad) {
        console.log(`${persona1.nombre} es más bajo y mayor que ${persona2.nombre}`);
    } else if (persona1.edad < persona2.edad) {
        console.log(`${persona2.nombre} es más alto y mayor que ${persona1.nombre}`);
    } else {
        console.log(`${persona2.nombre} es más alto que ${persona1.nombre}, pero tienen la misma edad`);
    }
} else {
    if (persona1.edad > persona2.edad) {
        console.log(`${persona1.nombre} tiene la misma altura que ${persona2.nombre}, pero es mayor`);
    } else if (persona1.edad < persona2.edad) {
        console.log(`${persona2.nombre} tiene la misma altura que ${persona1.nombre}, pero es mayor`);
    } else {
        console.log(`${persona1.nombre} y ${persona2.nombre} tienen la misma altura y la misma edad`);
    }
} 

//Ejercicio 2.4
let nombre = prompt("Ingrese su nombre:");
let edad = prompt("Ingrese su edad:");
let altura = prompt("Ingrese su altura en centímetros:");
let vision = prompt("Ingrese su visión (de 0 a 10):");

if (edad >= 18 && altura > 110 && vision >= 8) {
    console.log("Estás calificado para conducir");
} else {
    console.log("No estás calificado para conducir");
}

//Ejercicio 2.5
let edad = prompt("Ingrese su edad:");

if (edad >= 0 && edad <= 12) {
    console.log("Infante");
} else if (edad >= 13 && edad <= 18) {
    console.log("Adolescente");
} else if (edad >= 19 && edad <= 45) {
    console.log("Joven adulto");
} else if (edad > 45 && edad <= 100) {
    console.log("Anciano");
} else if (edad > 100) {
    console.log("¿En realidad tenes esa edad?");
} else {
    console.log("Edad inválida");
} 

//Ejercicio 2.6
let num = prompt("Ingrese un número del 1 al 3:");

switch (num) {
    case "1":
        console.log(`El número ingresado es ${num}`);
        break;
    case "2":
        console.log(`Dos veces el número ingresado es ${num * 2}`);
        break;
    case "3":
        console.log(`Tres veces el número ingresado es ${num * 3}`);
        break;
    default:
        console.log("Ese valor no está permitido");
}
*/
//Ejercicio 3 
let nombreCliente = prompt("Ingrese su nombre:");
let pase = prompt("¿Posee un pase VIP? (si/no):");


if (nombreCliente === nombreCliente && pase === "si") {
    console.log("¡Bienvenido!");
    }

let tieneEntrada = prompt("¿Posee una entrada? (si / no):");    
if (tieneEntrada === "si") {
            console.log("¡Disfrute su visita!");
      } else if (tieneEntrada === "no"){
    let comprar = prompt("¿Desea comprar una? (si / no):");
    if (comprar === "si") {
        let dineroDisponible = prompt("Ingrese el dinero disponible:");
        if (dineroDisponible >= 1000) {
            console.log("Venta exitosa. ¡Bienvenido!");
        } else {
            console.log("Lo siento, no tiene suficiente dinero para comprar.");
        }
    } else {
        console.log("¡Gracias por considerarlo! ¡Hasta luego!");
    }
}