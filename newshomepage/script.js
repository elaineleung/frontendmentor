const navEl = document.querySelector(".nav-primary");
const navToggleEl = navEl.querySelector(".mobile-nav-toggle");
const navListEl = navEl.querySelector(".nav-primary-list");
const navHideEls = document.querySelectorAll(".nav-hide");
const navFocusables = navEl.querySelectorAll("button, a");

document.body.classList.add("with-js"); // Adds class if JS is available in browser

window.addEventListener("keydown", (event) => loopFocusInNav(event));

window.addEventListener("resize", (event) => {
  navToggleEl.setAttribute("aria-expanded", "false")
  navListEl.removeAttribute("hidden");
  document.querySelector("html").classList.remove("open");
})

navEl.addEventListener("click", (event) => {
  const target = event.target;
  
  const isFocusable =
    target.parentElement.localName === "button" ||
    target.localName === "button" ||
    target.parentElement.localName === "a" ||
    target.localName === "a";

  if (isFocusable || target.classList.value === "overlay") toggleNav();
});

function toggleNav() {
  navToggleEl.getAttribute("aria-expanded") === "false" 
    ? openElement() 
    : closeElement();

  // Prevents background from being scrollable
  document.querySelector("html").classList.toggle("open");
}

function openElement() {
  navToggleEl.setAttribute("aria-expanded", "true");
  navListEl.removeAttribute("hidden");
  navHideEls.forEach((el) => el.setAttribute("tabindex", "-1"));
}

function closeElement() {
  navToggleEl.setAttribute("aria-expanded", "false");
  navListEl.setAttribute("hidden", "true")
  navHideEls.forEach((el) => el.removeAttribute("tabindex"));
}

function loopFocusInNav(event) {
  const firstFocusableItem = navFocusables[0];
  const lastFocusableItem = navFocusables[navFocusables.length - 1];
 
  if (event.key === "Tab" && navToggleEl.getAttribute("aria-expanded") === "true") {
    if (event.shiftKey && document.activeElement === firstFocusableItem) {
      event.preventDefault();
      lastFocusableItem.focus();
    } else if (
      (!event.shiftKey && document.activeElement === lastFocusableItem) ||
      [...navFocusables].every((el) => el != document.activeElement)
    ) {
      event.preventDefault();
      firstFocusableItem.focus();
    } else {
      return;
    }
  }
}
