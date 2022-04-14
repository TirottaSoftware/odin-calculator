const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(operator, a, b) {
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
      console.log(divide(a, b));
      break;
    default:
      break;
  }
}
