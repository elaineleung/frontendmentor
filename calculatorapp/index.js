const calcEl = document.querySelector(".calculator");
const currentOperandEl = document.querySelector("[data-current]");
const previousOperandEl = document.querySelector("[data-previous]");

// Calculator and its functions

class Calculator {
  constructor(currentOperandEl, previousOperandEl) {
    this.currentOperandEl = currentOperandEl;
    this.previousOperandEl = previousOperandEl;
    this.limit = 14;
    this.resetCalc();
  }

  resetCalc() {
    this.previousOperand = "";
    this.currentOperand = "";
    this.currentOperandDisplay = "0";
    this.operator = undefined;
    this.displayCalc();
  }

  appendNum(number) {
    // prevent extra decimals
    if (number === ".") {
      if (this.currentOperand.toString().includes(".")) return
      if (this.currentOperand.toString() === "") {
        this.currentOperand = "0"
      }
    } 

    this.currentOperand = this.currentOperand.toString() + number.toString()
    this.currentOperandDisplay = this.currentOperand
    this.displayCalc();
  }
  
  getDisplayNumber(number) {
    let stringNumber = number.toString()
    let integerDigits = parseFloat(stringNumber.split(".")[0])
    let integerString = stringNumber.split(".")[0]
    let decimalString = stringNumber.split(".")[1]
    let integerDisplay
    let finalDisplay

    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      if (integerString.length >= this.limit) {
        integerDigits = integerDigits.toExponential(5)
      }
      integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
    }
    if (decimalString != null) {
      if (integerString.length < this.limit){
        let intLength = this.limit - integerString.length
        if (intLength < decimalString.length) {
          decimalString = decimalString.slice(0, intLength - 1)     
        }
      }
      finalDisplay = this.displayComputedString(integerDisplay, decimalString)
      finalDisplay = finalDisplay.charAt(this.limit - 1) === "." 
      ? finalDisplay.slice(0, -1) : finalDisplay

    } else {
      finalDisplay = integerDisplay
    }
    return finalDisplay
  }

  displayComputedString(integerNum, decimalNum) {
    return `${integerNum}.${decimalNum}`
  }

  displayCalc() {
    this.currentOperandEl.textContent = this.getDisplayNumber(this.currentOperandDisplay);
    this.previousOperandEl.textContent = this.operator != undefined 
    ? `${this.getDisplayNumber(this.previousOperand)} ${this.displayOperator(this.operator)}`
    : ""

  }

  displayOperator(operator) {
    switch (operator) {
      case "+":
        return "+"
      case "-":
        return "−"
      case "*":
        return "×"
      case "/":
        return "÷"
      default:
        return
    }
  }

  selectOperator(operator) {
    if ((this.currentOperand === "" || this.currentOperand === "0")) return;
    if (this.previousOperand != "") {
      this.compute();
    }
    this.operator = operator;

    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
    this.currentOperandDisplay = this.currentOperand
    this.displayCalc();
  }
  
  deleteNum() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
    this.currentOperandDisplay = this.currentOperand
    this.displayCalc();
  }
  
  compute() {
    let computation
    const previous = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)

    if (
        // this.equalsPressed === true || 
        this.previousOperand === '' || 
        this.currentOperand === '') 
        return;
    if (isNaN(previous) || isNaN(current)) return

    switch (this.operator) {
      case "+":
        computation = previous + current
        break;
      case "-":
        computation = previous - current
        break;
      case "*":
        computation = previous * current
        break;
      case "/":
        computation = previous / current
        break;
      default:
        return
     }
  
    this.currentOperand = Number.parseFloat(computation.toFixed(this.limit))
    this.previousOperand = "";
    this.operator = undefined;
    this.currentOperandDisplay = this.currentOperand
    this.displayCalc();
  }
}

const calculator = new Calculator(currentOperandEl, previousOperandEl);

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

