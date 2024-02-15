/*//Ejercicio 1.1-2
function add() {
    console.log(100 * 20);
}
add();

// Ejercicio 1.3
function add(num1, num2) {
    console.log(num1 * num2);
}
add (100,20);

//Ejercicio 1.4
let number1 = 100;
let number2 = 20;

add(number1, number2);

//Ejercicio 1.5
function add(num1, num2) {
    let result = num1 * num2;
    return result;
}

//Ejercicio 1.6
let add = function(num1, num2) {
    let result = num1 * num2;
    return result;
}

let number1 = 100;
let number2 = 20;

console.log(add(number1, number2));

//Ejercicio 2.1
function saludar(nombre) {
    console.log(`Hola, ${nombre}! ¿Todo bien?`);
}

saludar("Noemi");

//Ejercicio 2.2
let multiplicar = function(num1, num2) {
    return num1 * num2;
}

let resultado = multiplicar(3, 6);
console.log("El resultado de la multiplicación es:", resultado);


//Ejercicio 2.3
function area(base, altura) {
    return (base * altura) / 2;
}

//Ejercicio 2.4
function perimetro(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3;
}

//Ejercicio 2.5
const calcularTotalCompra = (precio, cantidad) => {
    let precioTotal = precio * cantidad;
    
    if (cantidad >= 20) {
        precioTotal *= 0.8; 
    } else if (cantidad >= 10) {
        precioTotal *= 0.9; 
    }
    
    return precioTotal;
}
console.log(calcularTotalCompra(10, 5));   
console.log(calcularTotalCompra(20, 10)); 
console.log(calcularTotalCompra(5, 25));

//Ejercicio 2.6
function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return "Eres mayor de edad";
    } else {
        return "Eres menor de edad";
    }
}
console.log(esMayorDeEdad(25)); 
console.log(esMayorDeEdad(15));

//Ejercicio 3.1
function calcularImpuesto(ingresoAnual) {
    let impuestoPorcentaje;
    let impuesto;

    if (ingresoAnual <= 10000) {
        impuestoPorcentaje = 10;
        impuesto = ingresoAnual * 0.10;
    } else if (ingresoAnual <= 20000) {
        impuestoPorcentaje = 15;
        impuesto = ingresoAnual * 0.15;
    } else {
        impuestoPorcentaje = 20;
        impuesto = ingresoAnual * 0.20;
    }

    return `El impuesto a pagar es el ${impuestoPorcentaje}% de su ingreso, ${ingresoAnual}`;
}

console.log(calcularImpuesto(8000)); 
console.log(calcularImpuesto(15000)); 
console.log(calcularImpuesto(25000)); 

//Ejercicio 3.2
function verificarDia(numeroDia) {
    let mensaje;

    switch (numeroDia) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            mensaje = "Es un día laboral";
            break;
        case 6:
        case 7:
            mensaje = "Es fin de semana";
            break;
        default:
            mensaje = "Número de día inválido";
    }

    return mensaje;
}
console.log(verificarDia(4)); 
console.log(verificarDia(6)); 
console.log(verificarDia(9));

//Ejercicio 3.3
function ingresarDatos() {
    
    let nombre = prompt("Ingrese su nombre:");
    if (!nombre) {
        console.error("El nombre no puede estar vacío");
        return; 
    }
    let apellido = prompt("Ingrese su apellido:");
    if (!apellido) {
        console.error("El apellido no puede estar vacío");
        return; 
    }
    let edad = prompt("Ingrese su edad:");
    if (!edad || isNaN(edad)) {
        console.error("La edad no puede estar vacía y debe ser un número válido");
        return; 
    }
    let persona = {
        nombre: nombre,
        apellido: apellido,
        edad: Number(edad)
    };
    console.log(persona);
}
ingresarDatos();
*/

//Ejercicio 3.4
function saludar(nombre) {
    return `Hola, mi nombre es ${nombre}`;
}


function calcularEdad(anoNacimiento, anoActual) {
    return anoActual - anoNacimiento;
}

function presentarse() {
    let nombre = prompt("Ingresa tu nombre:");
    let anoNacimiento = prompt("Ingresa tu año de nacimiento:");
    let anoActual = new Date().getFullYear();
    let edad = calcularEdad(anoNacimiento, anoActual);
    let saludo = saludar(nombre);
   
    alert(`${saludo}. Tengo ${edad} años.`);
}
presentarse();