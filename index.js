import chalk from 'chalk';

let myUnusedVariable = 42; // Fehler: no-unused-vars und prefer-const

var dynamicValue = "42"; // Dynamische Variable
if (dynamicValue == "1") { // Kein konstanten Vergleich mehr
    console.log('This is a weak equality check.');
}

console.log(chalk.blue('It works'));