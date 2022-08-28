const navToggleEl = document.querySelector(".mobile-nav-toggle");
const dropdownBtns = document.querySelectorAll(".dropdown-btn");
const primaryNavEl = document.querySelector(".navigation-primary");

function handleEventListeners() {
  let windowWidth;
  const primaryNavLinks = primaryNavEl.querySelectorAll("a");

  navToggleEl.addEventListener("click", () => toggleMobileNav(windowWidth));

  primaryNavLinks.forEach((link) => {
    link.addEventListener("click", () => handleLinkAction(windowWidth));
  });

  dropdownBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.stopPropagation()
      toggleDropDown(btn, windowWidth)
    });
  });

  window.addEventListener("load", checkDimensions);

  window.addEventListener("resize", () => {
    checkDimensions();
    if (windowWidth >= 880) {
      closeActiveDropDown()
      navToggleEl.setAttribute("aria-expanded", false);
      primaryNavEl.toggleAttribute("data-visible", false);
    };
  });

  window.addEventListener("click", (event) => {
    const el = event.target;
    if (!el.classList.contains("dropdown-title")) {
      if (!el.classList.contains("dropdown-items")) {
        dropdownBtns.forEach((btn) => {
          if (btn.hasAttribute("data-visible")) {
            closeActiveDropDown();
          }
        });
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
    dropdownBtns.forEach((btn) => {
      btn.hasAttribute("data-visible") && toggleDropDown(btn, windowWidth);
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
  if (windowWidth >= 880) {
    closeActiveDropDown(btn);
  } else {
    setDropDownState(btn);
  }
}

function closeActiveDropDown(activeBtn) {
  if (activeBtn !== undefined) {
    setDropDownState(activeBtn);
    const otherDropDowns = [...dropdownBtns].filter((target) => target != activeBtn);
    otherDropDowns.forEach((btn) => {
      btn.hasAttribute("data-visible") && setDropDownState(btn)
    });
  } else {
    dropdownBtns.forEach(btn => {
      btn.hasAttribute("data-visible") && setDropDownState(btn)
    })
  }
}

function setDropDownState(btn) {
  let expanded = ariaIsTrue(btn);
  function ariaIsTrue(element) {
    return element.getAttribute("aria-expanded") === "true" ? true : false;
  }
  btn.setAttribute("aria-expanded", !expanded);
  btn.toggleAttribute("data-visible");
}
