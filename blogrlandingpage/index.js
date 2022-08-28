const navToggleEl = document.querySelector(".mobile-nav-toggle");
const dropdownEls = document.querySelectorAll(".dropdown");
const primaryNavEl = document.querySelector(".navigation-primary");

function handleEventListeners() {
  let windowWidth;
  const primaryNavLinks = primaryNavEl.querySelectorAll("a");

  navToggleEl.addEventListener("click", () => toggleMobileNav(windowWidth));

  primaryNavLinks.forEach((link) => {
    link.addEventListener("click", () => handleLinkAction(windowWidth));
  });

  dropdownEls.forEach((dropdown) => {
    const dropdownBtn = dropdown.querySelector("button");
    dropdownBtn.addEventListener("click", () => toggleDropDown(dropdownBtn, windowWidth));
  });

  window.addEventListener("load", checkDimensions);

  window.addEventListener("resize", () => {
    checkDimensions()
    if (windowWidth >= 880) closeActiveDropDown()

  });

  window.addEventListener("click", (event) => {
    const el = event.target
    if (!el.classList.contains("dropdown-title")) {
      if (!el.classList.contains("dropdown-items")) {
        dropdownEls.forEach( dropdown => {
          const dropdownBtn = dropdown.querySelector("button");
          if (dropdownBtn.hasAttribute("data-visible")) {
            closeActiveDropDown()
          }
        })
      }
    }
  });

  function checkDimensions() {
    windowWidth = document.body.clientWidth;
  }
}
handleEventListeners();

function toggleMobileNav(windowWidth) {
  if (primaryNavEl.hasAttribute("data-visible")) {
    navToggleEl.setAttribute("aria-expanded", false);
    dropdownEls.forEach((dropdown) => {
      const dropdownBtn = dropdown.querySelector("button");
      dropdownBtn.hasAttribute("data-visible") && toggleDropDown(dropdownBtn, windowWidth);
    });
  } else {
    navToggleEl.setAttribute("aria-expanded", true);
  }
  primaryNavEl.toggleAttribute("data-visible");
}


function handleLinkAction(windowWidth) {
  if (windowWidth < 880) {
    setTimeout(() => toggleMobileNav(windowWidth), 100);
  } else {
    closeActiveDropDown();
  }
}

function toggleDropDown(btn, windowWidth) {
  console.log(windowWidth)
  if (windowWidth >= 880) {  
    closeActiveDropDown(btn)
  }
  setDropDownState(btn)
}


function closeActiveDropDown(btn) {
  dropdownEls.forEach((dropdown) => { 
    const dropdownBtn = dropdown.querySelector("button");
    if (dropdownBtn.hasAttribute("data-visible")) {
      if (dropdownBtn !== btn)
      setDropDownState(dropdownBtn)
    } 
  });
}


function setDropDownState(btn) {
  let expanded = ariaIsTrue(btn);
  console.log(expanded)

  function ariaIsTrue(element) {
    return element.getAttribute("aria-expanded") === "true" ? true : false;
  }
  btn.setAttribute("aria-expanded", !expanded);
  btn.toggleAttribute("data-visible");
}