const navEl = document.querySelector(".nav-primary");
const navToggleEl = navEl.querySelector(".mobile-nav-toggle");
const navListEl = navEl.querySelector(".nav-primary-list");
const navHideEls = document.querySelectorAll(".nav-hide");
const navFocusables = navEl.querySelectorAll("button, a");

document.body.classList.add("with-js"); // Adds class if JS is available in browser

document.body.querySelectorAll("a").forEach( link => {
  link.addEventListener("click", function (event) {
    event.preventDefault()
    setTimeout(() => {
      document.body.scrollIntoView(true)
    }, 300)  })
})

window.addEventListener("keydown", (event) => loopFocusInNav(event));

window.addEventListener("resize", (event) => {
  navToggleEl.setAttribute("aria-expanded", "false")
  navListEl.removeAttribute("hidden");
  document.querySelector("html").classList.remove("open");
})

navEl.addEventListener("click", (event) => {
  const target = event.target;
  
  const navBtn =
    target.parentElement.localName === "button" ||
    target.localName === "button"
  const navLink =
    target.parentElement.localName === "a" ||
    target.localName === "a";

  if (target.classList.value === "overlay" || navBtn ) toggleNav();
  if (navLink) setTimeout(() => toggleNav(), 300) 
});

function toggleNav() {
  navToggleEl.getAttribute("aria-expanded") === "false" 
    ? openElement() 
    : closeElement();

  // Prevents background from being scrollable
  // document.querySelector("html").classList.toggle("open");
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

