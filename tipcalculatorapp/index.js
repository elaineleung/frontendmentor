const tipsEl = document.getElementById("tipsEl");
const tipOptions = tipsEl.querySelectorAll("input[name='tip']");

const customEl = document.getElementById("customEl");
const customRadio = customEl.querySelector("input[type='radio']");
const customInput = customEl.querySelector("input[type='number']");

const billEl = document.querySelector("input[name='bill']");
const peopleEl = document.querySelector("input[name='people']");
const totalEl = document.getElementById("totalEl");
const amountEl = document.getElementById("amountEl");
const resetBtn = document.getElementById("resetBtn");

const messageEl = document.getElementById("invalidEl");

const values = { bill: 0, tip: 0, people: 0 };

// reset function and event handler

resetBtn.addEventListener("click", reset);

customInput.addEventListener("input", (event) => {
  const value = event.target.value || event.data;
  tipOptions.forEach((btn) => (btn.checked = false));
  handleCustom(value);
});

customEl.addEventListener("click", function () {
  handleCustom(customInput.value);
});

function handleCustom(value) {
  customRadio.checked = true;
  validityCheck(value, "tip");
}

billEl.addEventListener("input", (event) => {
  validityCheck(event.target.value, "bill");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Tab" && 
    (document.activeElement === customRadio)) {
      customInput.tabIndex = 0
    }  else {
      customInput.tabIndex = -1
    }
})
// peopleEl.addEventListener("focus", function(event){
//   console.log(event)
//   peopleEl.required = true
//   console.log(peopleEl.required)
// })
// function activateRequired(element){
// }

peopleEl.addEventListener("input", function (event) {
  const value = event.target.value || event.data;
  peopleEl.required = peopleEl === document.activeElement && true;

  switch (true) {
    case Number(value) == 0 || value === null:
      messageEl.textContent = "Can't be zero";
      clearDisplay()
      break;
    case Number(value) > 0:
      validityCheck(value, "people");
      break;
    case Number(value) < 0 ||
      !Number.isInteger(value) ||
      typeof value != "number":
      messageEl.textContent = "Wrong format";
      break;
    default:
      null;
  }
});

tipOptions.forEach((btn) =>
  btn.addEventListener("change", () => {
    console.log(btn.value)
    validityCheck(Number(btn.value), "tip");
  })
);


function reset() {
  tipOptions.forEach((btn) => (btn.checked = false));
  peopleEl.required = false
  billEl.value = "";
  customInput.value = "";
  peopleEl.value = "";
  values.bill = 0;
  values.tip = 0;
  values.people = 0;
  clearDisplay();
  billEl.focus()
}

function validityCheck(value, key) {
  const { bill, tip, people } = values;
  console.log(value)
  console.log(Object.values(values))
  if ((typeof value === "string" && value.trim().length === 0) || value == 0 ) 
  {
    console.log(bill, tip, people);
    resetBtn.disabled = true;
    values[key] = 0;
    clearDisplay();
  } else {
    values[key] = Number(value);
  }
  
  Object.values(values).some( elem => elem === 0) ? 
  clearDisplay()
  : calculateTip(values.bill, values.tip, values.people);
}

function clearDisplay() {
  totalEl.textContent = "0.00";
  amountEl.textContent = "0.00";
  resetBtn.disabled = true
}

function calculateTip(bill, tip, people) {
  resetBtn.disabled = false
  const tipPerPerson = (bill * (tip / 100)) / people;
  const totalPerPerson = (bill * (1 + tip / 100)) / people;
  if (tipPerPerson && totalPerPerson) {
    console.log(bill, tip, people);
    amountEl.textContent =
      Number.isFinite(tipPerPerson) &&
      !Number.isNaN(tipPerPerson) &&
      tipPerPerson.toFixed(2);
    totalEl.textContent =
      Number.isFinite(totalPerPerson) &&
      !Number.isNaN(totalPerPerson) &&
      totalPerPerson.toFixed(2);
  }
}

window.addEventListener("load", reset);

// document.addEventListener("keydown", ()=> {
//   console.log(document.activeElement)
// })
