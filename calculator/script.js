function calculator() {
  const inputOne = prompt("Enter first number");
  let result, num1, num2;

  if (!inputOne.match(/^[0-9]*$/)) {
    alert("Invalid number. Try again");
    return calculator();
  }

  const inputOperator = prompt("Enter operator:");

  if (!inputOperator.match(/[\+\-\*\/]{1}/)) {
    alert("Invalid operator. Try again.");
    return calculator();
  }

  const inputTwo = prompt("Enter second number");

  if (!inputTwo.match(/^[0-9]*$/)) {
    alert("Invalid number. Try again");
    return calculator();
  }

  num1 = Number(inputOne);
  num2 = Number(inputTwo);

  if (inputOperator === "+") {
    result = num1 + num2;
    alert("The result is: " + result);
    calculator();
  }
  if (inputOperator === "-") {
    result = num1 - num2;
    alert("The result is: " + result);
    calculator();
  }
  if (inputOperator === "*") {
    result = num1 * num2;
    alert("The result is: " + result);
    calculator();
  }
  if (inputOperator === "/") {
    result = num1 / num2;
    alert("The result is: " + result);
    calculator();
  }

  alert("Operation failed. Operator must have been invalid. Please try again.");

  calculator();
}

window.onload = calculator();
