// math.js

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
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

// Export functions so they can be used in app.js
module.exports = { add, subtract, multiply, divide };

//______
// app.js
const fs = require("fs");
const math = require("./math.js"); // import local module

// Helper function to log results
function logResult(operation, expression, result) {
    const logMessage = `${operation}: ${expression}=${result}\n`;
    fs.appendFileSync("log.txt", logMessage, "utf8");
    console.log(logMessage.trim());
}

// Example usage
try {
    let sum = math.add(5, 3);
    logResult("addition", "5+3", sum);

    let diff = math.subtract(10, 4);
    logResult("subtraction", "10-4", diff);

    let product = math.multiply(2, 3);
    logResult("multiply", "2*3", product);

    let quotient = math.divide(10, 2);
    logResult("division", "10/2", quotient);
} catch (error) {
    console.error("Error:", error.message);
}

