const tipsEl = document.getElementById("tipsEl");
const tipOptions = tipsEl.querySelectorAll("input[name='tip']");

const customEl = document.getElementById("customEl");
const customRadio = customEl.querySelector("input[type='radio']");
const customInput = customEl.querySelector("input[type='text']");

const billEl = document.querySelector("input[name='bill']");
const peopleEl = document.querySelector("input[name='people']");
const totalEl = document.getElementById("totalEl");
const amountEl = document.getElementById("amountEl");
const resetBtn = document.getElementById("resetBtn");

const messageEl = document.getElementById("invalidEl");

let bill = 0;
let tip = 0;
let people = 0;

function reset() {
  tipOptions.forEach((btn) => (btn.checked = false));
  billEl.value = "";
  customInput.value = "";
  peopleEl.value = "";
  clearDisplay();
}

function clearDisplay() {
  totalEl.textContent = "0";
  amountEl.textContent = "0";
}

resetBtn.addEventListener("click", reset);

customEl.addEventListener("click", function () {
  customRadio.checked = true;
  tip = customInput.value && customInput.value;
  calculateTip(bill, tip, people);
});

customInput.addEventListener("input", (e) => {
  tipOptions.forEach((btn) => (btn.checked = false));
  customRadio.checked = true;
  customRadio.value = e.target.value;
  tip = e.target.value;
  calculateTip(bill, tip, people);
});

billEl.addEventListener("input", (e) => {
  const value = parseFloat(e.target.value);
  if (value != "") {
    bill = value != "0" && value;
    calculateTip(bill, tip, people);
  } else {
    clearDisplay();
  }
});

peopleEl.addEventListener("input", function (e) {
  const value = parseFloat(e.target.value);
  if (value == 0) {
    console.log("invalid");
    messageEl.textContent = "Can't be zero";
  } else if (value < 0 || !Number.isInteger(value)) {
    messageEl.textContent = "Wrong format";
  } else null;

  if (value > 0) {
    people = value;
    calculateTip(bill, tip, people);
  }
});

tipOptions.forEach((btn) =>
  btn.addEventListener("click", () => {
    tip = btn.value;
    calculateTip(bill, tip, people);
  })
);



function calculateTip(bill, tip, people) {
  tip = parseFloat(tip)
  console.log(bill, tip, people);
  if (people === 0 || !Number.isFinite(tip) || !Number.isFinite(bill)) {
    console.log("not correct");
    return;
  } else {
    const tipPerPerson = (bill * (tip / 100)) / people;
    const totalPerPerson = (bill * (1 + tip / 100)) / people;
    if (tipPerPerson && totalPerPerson) {
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
}

window.addEventListener("load", reset);