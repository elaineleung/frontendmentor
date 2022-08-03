const toggleEl = document.getElementById("toggle");
const navEl = document.getElementById("navEl");
const overlayEl = document.getElementById("overlayEl");
const dropDownBtns = document.querySelectorAll("nav button");
const linkEls = document.querySelectorAll(".link");

let pressed = false;
let windowWidth;

// get clientWidth for media query

window.addEventListener("load", (event) => {
  checkWindowWidth();
  document.body.classList.add("loaded")
});

window.addEventListener("resize", (event) => {
  checkWindowWidth();
  windowWidth < 960 && dropDownBtns.forEach(btn => checkDropDownOpen(btn))
});

function checkWindowWidth() {
  return (windowWidth = document.body.clientWidth);
}
// toggling using aria pressed

toggleEl.addEventListener("click", () => {
  handleNavToggle();
});

overlayEl.addEventListener("click", () => {
  handleNavToggle();
});

function handleNavToggle() {
  pressed = toggleEl.getAttribute("aria-pressed") === "false";
  toggleEl.setAttribute("aria-pressed", pressed ? "true" : "false");
}

dropDownBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (windowWidth >= 960) {
      const otherDropDowns = [...dropDownBtns].filter(
        (target) => target != btn
      );
      otherDropDowns.forEach((other) => checkDropDownOpen(other));
    }
    const expanded = btn.getAttribute("aria-expanded") === "true" || false;
    btn.setAttribute("aria-expanded", !expanded);
    toggleDropDown(btn);
  });
});

linkEls.forEach((link) => {
  link.addEventListener("click", () => {
    if (windowWidth < 960) {
      setTimeout(() => handleNavToggle(), 300);
    } else {
      dropDownBtns.forEach((btn) => {
        if (btn.getAttribute("aria-expanded") === "true") {
          btn.setAttribute("aria-expanded", "false");
          setTimeout(() => toggleDropDown(btn), 300);
        }
      });
    }
  });
});

function toggleDropDown(btn) {
  const dropdown = btn.nextElementSibling;
  dropdown.classList.toggle("reveal");
  setTimeout(() => dropdown.classList.toggle("shift"), 200);
}

function checkDropDownOpen(btn) {
  const expanded = btn.getAttribute("aria-expanded");
  if (expanded === "true") {
    btn.setAttribute("aria-expanded", "false");
    toggleDropDown(btn);
  }
}
// const openEls = [toggleEl, navEl, overlayEl];
// toggleEl.addEventListener("click", () => {
//   openEls.forEach((el) => el.classList.toggle("open"));
// });
