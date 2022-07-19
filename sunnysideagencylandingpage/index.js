const navBtnEl = document.getElementById("navBtnEl")
const navEl = document.getElementById("navEl")

navBtnEl.addEventListener("click", () => {
  navBtnEl.classList.toggle('open')
  navEl.classList.toggle("open")
})