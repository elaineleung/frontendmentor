const socialEl = document.getElementById("socialEl")
const shareEl = document.getElementById("shareEl")

shareEl.addEventListener("click", () => {
    socialEl.classList.toggle("bubble")
})