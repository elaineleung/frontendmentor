const calcEl = document.querySelector(".calculator");
const outputEl = document.querySelector("[data-output]");

// Calculator and its functions


class Calculator {
  constructor(outputEl) {
    this.displayEl = outputEl;
    this.resetCalc();
    this.init()
  }

  init() {
    Array.from(this.initial).forEach( digit => {
      this.appendNum(digit);
    })
  }

  resetCalc() {
    this.previousOperand = "";
    this.currentOperand = "0";
    this.operator = undefined;
    this.equalsPressed = false;
    this.display = "0";
    this.displayCalc();
    this.initial = "399981"
  }

  appendNum(number) {
    // prevent extra decimals
    if ((number === "." && this.currentOperand.toString().includes(".")) || this.currentOperand.length > 14) return;

    if (this.currentOperand === "0" || this.display === "0") {
      if (number === ".") this.currentOperand.toString() + number.toString();
    }
    // allows for new operand to be input and override zero after equals operation
    if (this.equalsPressed === true || (this.currentOperand === "0" && number != ".")) {
      this.currentOperand = "";
      this.equalsPressed = false;
    }
    this.currentOperand = this.currentOperand.length <= 12
      ? this.currentOperand.toString() + number.toString()
      : this.currentOperand.toString()
    this.display = this.currentOperand;
    this.displayCalc();
  }
  
  getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split(".")[0])
    const decimalDigits = stringNumber.split(".")[1]
    let integerDisplay
    let finalDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = '0'
    } else {
      integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
    }
    if (decimalDigits != null) {
      finalDisplay = `${integerDisplay}.${decimalDigits}`
      finalDisplay = finalDisplay.length > 16 ? finalDisplay.slice(0, 15) : finalDisplay
    } else {
      finalDisplay = integerDisplay
    }
    return finalDisplay.length > 17 ? "Number too big" : finalDisplay
  }

  displayCalc() {
    this.displayEl.textContent = this.getDisplayNumber(this.display);
  }

  selectOperator(operator) {
    this.equalsPressed === false;

    if (this.currentOperand === "") return;
    if (this.previousOperand != "") {
      this.compute();
    }
    this.operator = operator;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
    this.displayCalc();
  }
  
  deleteNum() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
    this.display = this.currentOperand
    this.displayCalc();
  }
  
  compute() {
    if (this.equalsPressed === true || 
        this.previousOperand === '' || 
        this.currentOperand === '') 
        return;

    this.currentOperand = eval(
      `${this.previousOperand} 
       ${this.operator} 
       ${this.currentOperand}`
    );

    this.display = this.currentOperand;
    this.previousOperand = "";
    this.operator = undefined;
    this.equalsPressed = true;
    this.displayCalc();
  }
}

const calculator = new Calculator(outputEl);

// window.addEventListener("load", () => {
//   calculator.appendNum();
// })

// Click and keypress event listeners

calcEl.addEventListener("click", (event) => {
  const key = event.target;
  handleActions(key)
});

window.addEventListener("keydown", (event) => {
  if (event.key === "/") {
    event.preventDefault();
  }
  const allKeys = "1234567890.+-*/";
  const key = event.key;

  if (allKeys.includes(key) || key === "Enter" || key === "Escape" || key === "Delete") {
    const keyPressed = document.querySelector(`button[value="${key}"]`);
    keyPressed.focus();
    handleActions(keyPressed)
  }
  return
});

function handleActions(key) {
  switch (true) {
    case key.hasAttribute("data-operator"):
      calculator.selectOperator(key.value);
      break;
    case key.hasAttribute("data-number"):
      calculator.appendNum(key.value);
      break;
    case key.value === "Escape":
      calculator.resetCalc();
      break;
    case key.value === "Enter":
      calculator.compute();
      break;
    case key.value === "Delete":
      calculator.deleteNum();
      break;
    default:
      return;
  }
}

