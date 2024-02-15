//Ejercicio 1
let myName = "Noemi ";
let myLastName = "Maldonado";
let myAge = 22;
let myPet = "Gata";
let petAge = 8;
let fullName = myName + myLastName;
let presentationText = `Soy ${fullName} y tengo ${myAge} años, mi gata se llama ${myPet}, ella tiene ${petAge} años gatunos`;
console.log(presentationText);

//Ejercicio 2
let sumAges = (myAge + petAge);
let subtractAges = (myAge - petAge);
let productAges = (myAge * petAge);
let divisionAges = (myAge / petAge);

console.log(sumAges);
console.log(subtractAges);
console.log(productAges);
console.log(divisionAges);

const student = ["alumnos", "útiles", "estudiar", "examenes", "universidad"];
console.table(student);

const pets = ["perros", "gatos", "loro", "conejo","hamster"];
console.table(pets);

const fruits = ["frutilla", "manzana", "pera", "durazno", "melon"];
console.table(fruits);

//Ejercicio 3
let age = prompt("¿Que edad tenes?");
let iAmAdult = Number(age) >= 18;
console.log(`Soy un adulto, tengo ${age}`);

const numbers = ["5","10","15","20","25"];
console.log(numbers);
console.log(numbers.join (" - "));

const family = ["mamá","papá","hermana","hermano","sobrina"];
console.log(family);
console.log(family.join (" - "));

let randomText = `Hoy comí una ${fruits[1] } por la mañana y luego le di ${numbers[3] } pesos a mi ${family[4] } para que se compre algo tambien.`
console.log(randomText)