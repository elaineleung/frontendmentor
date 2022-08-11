const appEl = document.getElementById("appEl");

const tipOptions = document.querySelectorAll("input[name='tip']");
const customEl = document.getElementById("customEl");
const customRadio = customEl.querySelector("input[type='radio']");
const customInput = customEl.querySelector("input[type='number']");

const totalEl = document.getElementById("totalEl");
const amountEl = document.getElementById("amountEl");

const resetBtn = document.getElementById("resetBtn");
const messageEl = document.getElementById("invalidEl");
 
const values = { bill: 0, tip: 0, people: 0 };
 
// event listener for inputs

appEl.addEventListener("input", function(event) {
  const billVal = Number(document.getElementById("bill").value)
  if (event.target.id === "people") handleErrorMessage(event.data);
  
  values.bill = billVal < 100000000000000000n && billVal
  values.people = Number(document.getElementById("people").value)

  checkEmptyValues()
})

function handleErrorMessage(value) {
  switch (true) {
    case Number(value) == 0:
      messageEl.textContent = "Can't be zero";
      break;
    case Number(value) < 0 ||
      !Number.isInteger(value) ||
      typeof value != "number":
      messageEl.textContent = "Wrong format";
      break;
    default:
      null;
  }
}

function checkEmptyValues(){
  Object.values(values).some( elem => elem === 0 || NaN) 
  ? clearDisplay() : calculateTip();
}

function calculateTip() {
  const { bill, tip, people } = values

  resetBtn.disabled = false

  const tipPerPerson = (bill * (tip / 100)) / people;
  const totalPerPerson = tipPerPerson + (bill / people);

  if (tipPerPerson && totalPerPerson) {
    amountEl.textContent =
      Number.isFinite(tipPerPerson) &&
      !Number.isNaN(tipPerPerson) &&
      `$${tipPerPerson.toFixed(2)}`;
    totalEl.textContent =
      Number.isFinite(totalPerPerson) &&
      !Number.isNaN(totalPerPerson) &&
      `$${totalPerPerson.toFixed(2)}`;
  }
  
  [totalEl, amountEl].forEach( el => {
    el.style.fontSize = getFontSize(amountEl.textContent.length);
  })
}

function getFontSize (textLength) {
  const varFontSize = getComputedStyle(document.documentElement)
  .getPropertyValue('--fs-value')
  const baseSize = varFontSize === "2rem" ? 2 : 3
  const maxSize = 
    document.querySelector(".results__container").offsetWidth * 0.8

  const fontSize = baseSize * (maxSize / (textLength * 8.5 * baseSize)) 
  
  return (textLength * baseSize * 9 ) > maxSize 
    ? `${fontSize}rem` : `${baseSize}rem`
}
// reset function and event handler

window.addEventListener("load", reset);
resetBtn.addEventListener("click", reset);

function reset() {
  appEl.querySelector("form").reset()
  Object.keys(values).map( key => values[key] = 0 );
  clearDisplay();
  appEl.focus()
}

function clearDisplay() {
  totalEl.textContent = "$0.00";
  amountEl.textContent = "$0.00";
  resetBtn.disabled = true
}

// radio btns and custom input and radio 

tipOptions.forEach((btn) =>
  btn.addEventListener("change", () => selectTip(btn.value))
);

customEl.addEventListener("input", (event) => {
  event.preventDefault();
  tipOptions.forEach((btn) => btn.checked = false);
  customRadio.value = event.target.value
  handleCustom(event.target.value);
});

customEl.addEventListener("click", () => handleCustom(customRadio.value));

function handleCustom(value) {
  customRadio.checked = true;
  selectTip(value)
}

function selectTip(value) {
  values.tip = Number(value)
  checkEmptyValues()
}

// activating custom tabindex

document.addEventListener("keydown", (event) => {
  if (event.key === "Tab" && 
    (document.activeElement === customRadio)) {
      customInput.tabIndex = 0
    }  else {
      customInput.tabIndex = -1
    }
})




// document.addEventListener("keydown", ()=> {
//   console.log(document.activeElement)
// })
