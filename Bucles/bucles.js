//Ejercicio 1
let entradaUsuario = prompt("Ingrese un número entre 1 y 100:");

let numero = (entradaUsuario);

if (isNaN(numero) || numero < 1 || numero > 100) {
    console.error("Entrada inválida. Por favor, ingrese un número entre 1 y 100.");
} else {
    for (let i = numero; i >= 0; i--) {
        console.log(i);
    }
}