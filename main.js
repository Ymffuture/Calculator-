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
        return "Cannot divide by zero";
    }
    return a / b;
}

function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let operation = "";

    const radios = document.getElementsByName("operation");
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            operation = radios[i].value;
            break;
        }
    }

    let result;
    switch (operation) {
        case "addition":
            result = add(num1, num2);
            break;
        case "subtraction":
            result = subtract(num1, num2);
            break;
        case "multiplication":
            result = multiply(num1, num2);
            break;
        case "division":
            result = divide(num1, num2);
            break;
        default:
            result = "Invalid operation";
            break;
    }

    document.getElementById("result").textContent = result;
}

function reset() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").textContent = "";
}