const toggleEl = document.querySelector(".mobile-toggle");
const navEl = document.getElementById("navEl");
const overlayEl = document.querySelector(".mobile-overlay");
const dropDownBtns = document.querySelectorAll("nav button");
const linkEls = document.querySelectorAll(".link");

let windowWidth;

// get clientWidth for media query

window.addEventListener("load", () => {
  checkWindowWidth();
});

// Resize window to check width and to set mobile nav to closed

window.addEventListener("resize", () => {
  checkWindowWidth();
  if (windowWidth < 960) {
    dropDownBtns.forEach(btn => {
      checkDropDownOpen(btn)
    })
  } else {
    toggleEl.getAttribute("aria-pressed") === "true" &&
    handleNavToggle(true);
  }
});

function checkWindowWidth() {
  return (windowWidth = document.body.clientWidth);
}

// Toggling nav button and overlay using aria-pressed

toggleEl.addEventListener("click", () => {
  handleNavToggle();
});

overlayEl.addEventListener("click", () => {
  handleNavToggle();
});

function handleNavToggle(opened) {
  const pressed = opened === undefined 
    ? toggleEl.getAttribute("aria-pressed") === "true"
    : opened
  if (pressed) {
    // check if any dropdown navs are opened
    dropDownBtns.forEach(btn => {
      checkDropDownOpen(btn)
    })
    toggleEl.setAttribute("aria-pressed", "false");

  } else {
    toggleEl.setAttribute("aria-pressed", "true");
  }  
}

dropDownBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (windowWidth >= 960) {
      const otherDropDowns = [...dropDownBtns].filter(
        (target) => target != btn
      );
      otherDropDowns.forEach((other) => {
        checkDropDownOpen(other)
      });
    }
    toggleDropDown(btn, false);
  });
});

linkEls.forEach((link) => {
  link.addEventListener("click", () => {
    if (windowWidth < 960) {
      setTimeout(() => handleNavToggle(), 300);
    } else {
      dropDownBtns.forEach((btn) => checkDropDownOpen(btn, 300));
    }
  });
});

function toggleDropDown(btn, opened, timeout = 0) {
  const expanded = opened === false 
    ? btn.getAttribute("aria-expanded") === "true" || false
    : opened

  btn.setAttribute("aria-expanded", !expanded);
  const dropdown = btn.nextElementSibling;
  setTimeout(() => {
    dropdown.classList.toggle("reveal") 
    setTimeout(() => 
    dropdown.classList.toggle("shift"), 200);
  }, timeout)
}

function checkDropDownOpen(btn, timeout = 0) {
  btn.getAttribute("aria-expanded") === "true" &&
  toggleDropDown(btn, true, timeout)  
}

