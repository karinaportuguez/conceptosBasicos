
console.log('Hola Mundo :D\n');  // console.log(); es un metrodo.

let a = 10;

console.log(`Este es un template literal que tiene una variable "let a" con el valor de: ${a} \n`);

let numbersOfLines = 1;

// FUNCIONES : Es una serie de instrucciones que se ejecutan de manera controlada

function increaseLineNumber() {
  //numbersOfLines = numbersOfLines + 3;
  numbersOfLines += 3;
}
/* 
console.log(`Linea #${numbersOfLines}`);

numbersOfLines++;
console.log(`Linea #${numbersOfLines}`);

numbersOfLines += 1;
console.log(`Linea #${numbersOfLines}`);

numbersOfLines = numbersOfLines + 1;
console.log(`Linea #${numbersOfLines}`); 
*/

console.log(`Linea #${numbersOfLines}`);

increaseLineNumber()
console.log(`Linea #${numbersOfLines}`);

increaseLineNumber()
console.log(`Linea #${numbersOfLines}`);

increaseLineNumber()
console.log(`Linea #${numbersOfLines}`); 