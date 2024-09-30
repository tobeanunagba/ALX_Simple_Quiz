// Arithmetic function for addition
function add(number1, number2) {
    return number1 + number2;
}

// Arithmetic function for subtraction
function subtract(number1, number2) {
    return number1 - number2;
}

// Arithmetic function for multiplication
function multiply(number1, number2) {
    return number1 * number2;
}

// Arithmetic function for division
function divide(number1, number2) {
    // Check if the second number is 0 to avoid division by zero
    if (number2 === 0) {
        return "Cannot divide by zero";
    }
    return number1 / number2;
}

// Event listener for the addition operation
document.getElementById('add').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// Event listener for the subtraction operation
document.getElementById('subtract').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = subtract(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// Event listener for the multiplication operation
document.getElementById('multiply').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = multiply(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// Event listener for the division operation
document.getElementById('divide').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = divide(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});
