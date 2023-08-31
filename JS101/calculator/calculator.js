const readline = require('readline-sync');

console.log('Welcome to the calculator');

const num1 = readline.question('Please enter the first number: ');
const num2 = readline.question('Please enter the second number: ');

const operations = [
  `${num1} + ${num2}`,
  `${num1} - ${num2}`,
  `${num1} * ${num2}`,
  `${num1} / ${num2}`,
];
let index = readline.keyInSelect(operations, 'Which operation?');

let result = eval(operations[index]);
console.log(`The result is: ${result}`);
