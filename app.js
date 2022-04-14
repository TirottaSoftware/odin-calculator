//Get all DOM elements
const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn-num");
const operators = document.querySelectorAll(".operator-buttons button");
const enterButton = document.querySelector(".btn-enter");

let displayValue = "";
let num1 = null;
let num2 = null;
let operator = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let buttonContent = button.textContent;
    displayValue += buttonContent.toString();
    console.log(displayValue);
  });
});

operators.forEach((button) => {
  // save num1 input
  // clear display
  // save operator value
  // start listening for num2 inputs
  // if num1 has been declared, just change the operator
  button.addEventListener("click", () => {
    if (!num1) {
      num1 = displayValue;
      displayValue = "";
    }
    operator = button.textContent;
    console.log(operator);
  });
});

enterButton.addEventListener("click", () => {
  num2 = displayValue;
  console.log(`${num1}${operator}${num2}`);
  operate(operator, num1, num2);
});

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(operator, a, b) {
  a = parseInt(a);
  b = parseInt(b);
  switch (operator) {
    case "+":
      console.log(add(a, b));
      break;
    case "-":
      console.log(subtract(a, b));
      break;
    case "*":
      console.log(multiply(a, b));
      break;
    case "/":
      a == 0 || b == 0
        ? console.log("Cannot divide by 0")
        : console.log(divide(a, b));
      break;
    default:
      break;
  }
  displayValue = "";
  num1 = null;
  num2 = null;
}
