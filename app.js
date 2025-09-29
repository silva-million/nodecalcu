const fs = require('fs');

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}

const num1 = 10;
const num2 = 5;

const results = `
Addition: ${add(num1, num2)}
Subtraction: ${subtract(num1, num2)}
Multiplication: ${multiply(num1, num2)}
Division: ${divide(num1, num2)}
`;

console.log(results);

fs.writeFileSync('results.txt', results, (err) => {
    if (err) {
        console.error('Error writing to file', err);
    } else {
        console.log('Results written to results.txt');
    }
});