//Get all DOM elements
const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn-num");
const operators = document.querySelectorAll(".operator-buttons button");
const enterButton = document.querySelector(".btn-enter");
const clearButton = document.querySelector(".btn-clear");

let displayValue = "";
let num1 = null;
let num2 = null;
let operator = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let buttonContent = button.textContent;
    displayValue += buttonContent.toString();
    display.textContent = displayValue;
  });
});

operators.forEach((button) => {
  button.addEventListener("click", () => {
    if (!num1) {
      if (displayValue == "" || displayValue == "NaN") {
        display.textContent = "Please select a number first";
        return;
      }
      num1 = displayValue;
      displayValue = "";
    }
    operator = button.textContent;
    display.textContent = operator;
    console.log(operator);
  });
});

enterButton.addEventListener("click", () => {
  if (!num1 || !displayValue || !operator) {
    display.textContent = "Please select at least 2 numbers and an operator";
    return;
  }
  num2 = displayValue;
  console.log(`${num1}${operator}${num2}`);
  display.textContent = operate(operator, num1, num2);
  num1 = parseInt(display.textContent);
});

clearButton.addEventListener("click", () => {
  clearDisplay();
  display.textContent = "_";
});

function clearDisplay() {
  display.textContent = displayValue;
  displayValue = "";
  num1 = null;
  num2 = null;
}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(operator, a, b) {
  a = parseInt(a);
  b = parseInt(b);
  switch (operator) {
    case "+":
      clearDisplay();
      return add(a, b);
    case "-":
      clearDisplay();
      return subtract(a, b);
    case "*":
      clearDisplay();
      return multiply(a, b);
    case "/":
      clearDisplay();
      if (a == 0 || b == 0) {
        clearDisplay();
        return "Cannot divide by 0";
      } else {
        return divide(a, b);
      }
    default:
      break;
  }
}
