const toggleEl = document.querySelector(".mobile-toggle");
const navEl = document.querySelector("#navEl");
const overlayEl = document.querySelector(".mobile-overlay");
const dropDownBtns = document.querySelectorAll("nav button");
const linkEls = document.querySelectorAll(".link");

const navClickables = [toggleEl, overlayEl];

let windowWidth;
// get clientWidth for media query

window.addEventListener("load", () => {
  checkDimensions();
});

// Resize window to check width and to set mobile nav to closed

window.addEventListener("resize", () => {
  checkDimensions();

  if (windowWidth < 960) {
    dropDownBtns.forEach((btn) => {
      toggleElement(btn, true, handleDropDown);
    });
  } else {
    // close nav if it is opened
    handleNav(true);
  }
});

function checkDimensions() {
  windowWidth = document.body.clientWidth;
}

// Toggling nav button and overlay using aria-expanded

navClickables.forEach((el) => {
  el.addEventListener("click", (event) => {
    event.preventDefault();
    handleNav();
  });
});

function handleNav(checkState) {
  // checking if mobile nav is opened, then close dropdowns
  if (ariaIsTrue(toggleEl) === true) {
    dropDownBtns.forEach((btn) => {
      toggleElement(btn, true, handleDropDown);
    });
  }
  toggleElement(toggleEl, checkState)
  document.querySelector("html").classList.toggle("open");
}

dropDownBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // desktop view, keeping only 1 dropdown open at a time
    if (windowWidth >= 960) {
      const otherDropDowns = [...dropDownBtns].filter(
        (target) => target != btn
      );
      otherDropDowns.forEach((other) => {
        toggleElement(other, true, handleDropDown);
      });
    }
    toggleElement(btn, null, handleDropDown);
  });
});

linkEls.forEach((link) => {
  link.addEventListener("click", () => {
    if (windowWidth < 960) {
      setTimeout(() => handleNav(), 300);
    } else {
      dropDownBtns.forEach((btn) => toggleElement(btn, true, handleDropDown, 300));
    }
  });
});

// functions

function toggleElement(element, checkState, callback) {
  let expanded;

  switch(true) {
    case (checkState === null || checkState === undefined):
      expanded = ariaIsTrue(element);
      callback && callback(element);
      break;
    case (checkState === ariaIsTrue(element)):
      expanded = checkState;
      callback && callback(element);
      break;
    default:
      return
  }
  element.setAttribute("aria-expanded", !expanded);
}

function ariaIsTrue(element) {
  return element.getAttribute("aria-expanded") == "true" ? true : false;
}

function handleDropDown(element, timeout = 0) {
  const dropdown = element.nextElementSibling;
  setTimeout(() => {
    dropdown.classList.toggle("reveal");
    setTimeout(() => dropdown.classList.toggle("shift"), 200);
  }, timeout);
}
