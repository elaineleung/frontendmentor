const calcEl = document.querySelector(".calculator");

const calcKeys = calcEl.querySelectorAll("button");

console.log(calcEl);
// Calculator Mode

const calculator = {
  displayValue: "0",
  allInputs: [],
  hasFirstOperand: false,
  waitingForNextOperand: false,
  operatorPressed: false,
  equalSignPressed: false,
};

function updateDisplay() {
  console.log(calculator);
  document.getElementById("calc-display").value = calculator.displayValue;
};

function resetCalc() {
  calculator.allInputs = [];
  calculator.equalSignPressed = false;
  calculator.waitingForNextOperand = false;
  calculator.hasFirstOperand = false;
  calculator.operatorPressed = false;
  // updateDisplay()
};

function allClear() {
  calculator.displayValue = "0";
  resetCalc();
};

function inputDigit (digit) {
  const { displayValue, waitingForNextOperand, equalSignPressed } = calculator;

  if (equalSignPressed === true) {
    allClear();
    calculator.displayValue = digit;
    calculator.equalSignPressed = false;
  } else if (waitingForNextOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingForNextOperand = false;
  } else {
    calculator.displayValue =
      displayValue === "0" ? digit : displayValue + digit;
  }
  // calculator.operatorPressed = false;
};

function inputDecimal (dot) {
  console.log(String(calculator.displayValue))
  if (!String(calculator.displayValue).includes(dot)) {
    // calculator.equalSignPressed = false;
    calculator.displayValue += dot;
  }
};

function handleOperator (nextOperator) {
  const {
    displayValue,
    hasFirstOperand,
    waitingForNextOperand,
    equalSignPressed,
  } = calculator;

  const inputValue = parseFloat(displayValue);

  switch (true) {
    case equalSignPressed:
      calculator.displayValue = inputValue;
      calculator.allInputs.push(nextOperator);
      break;
    case hasFirstOperand === false && !isNaN(inputValue):
      calculator.hasFirstOperand = true;
      calculator.allInputs.push(inputValue);
      calculator.allInputs.push(nextOperator.toString());
      break;
    case waitingForNextOperand:
      calculator.allInputs.pop();
      calculator.allInputs.push(nextOperator.toString());
      break;
    default:
      calculator.allInputs.push(inputValue);
      calculator.displayValue = eval(calculator.allInputs.join(""));
      calculator.allInputs.push(nextOperator.toString());
  }
  calculator.equalSignPressed = false;
  calculator.operatorPressed = true;
  calculator.waitingForNextOperand = true;
};

function calculateEquation () {
  const { displayValue, allInputs, equalSignPressed } = calculator;
  const inputValue = parseFloat(displayValue);

  if (equalSignPressed === true) {
    null;
  } else {
    allInputs.push(inputValue);
    calculator.displayValue = eval(calculator.allInputs.join(""));
    calculator.equalSignPressed = true;
    calculator.waitingForNextOperand = false;
    calculator.operatorPressed = false;
  }
};

calcKeys.forEach((key) => {
  key.addEventListener("click", (event) => {
    const { target } = event;

    if (!target.matches("button")) {
      return;
    }

    switch (true) {
      case target.classList.contains("operator"):
        handleOperator(target.value);
        break;
      case target.dataset.action === "decimal":
        inputDecimal(target.value);
        break;
      case target.dataset.action === "reset":
        allClear();
        break;
      case target.dataset.action === "enter":
        calculateEquation();
        break;
      default:
        inputDigit(target.value);
    }
    updateDisplay();
  });
});

window.addEventListener("keydown", function (e) {
  const allKeys = "1234567890.+-*/";
  console.log(e)
  if (allKeys.includes(e.key) || e.key === "Enter" || e.key === "Escape") {
    const keyPressed = document.querySelector(`button[value="${e.key}"]`);
    keyPressed.classList.add("pressed");
    console.log(keyPressed)
    switch (true) {
      case keyPressed.classList.contains("operator"):
        handleOperator(e.key);
        break;
      case keyPressed.classList.contains("decimal"):
        inputDecimal(e.key);
        break;
      case keyPressed.dataset.action === "reset":
        allClear();
        break;
      case keyPressed.dataset.action === "enter":
        calculateEquation();
        break;
      default:
        inputDigit(e.key);
    }
    updateDisplay();
  }
});

window.addEventListener("keyup", function (e) {
  const allKeys = "1234567890.+-*/c";
  if (allKeys.includes(e.key) || e.key === "Enter" || e.key === "Escape") {
    const keyPressed = document.querySelector(`button[value="${e.key}"]`);
    keyPressed.classList.remove("pressed");
  }
});
