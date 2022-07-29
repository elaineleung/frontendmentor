const ctaEl = document.getElementById("ctaEl");
const inputEl = document.getElementById("inputEl");
const messageEl = document.getElementById("messageEl");
const formEl = document.getElementById("formEl");
const btnEl = document.getElementById("btnEl");

inputEl.addEventListener("invalid", (event) => {
  event.preventDefault();
  if (!event.target.validity.valid) {
    ctaEl.classList.add("error");
    // inputEl.classList.add("invalid animated shake")
    if (event.target.validity.patternMismatch) {
      messageEl.textContent = "Please provide a valid email.";
    } else if (event.target.validity.valueMissing) {
      messageEl.textContent =
        "Email field cannot be empty. Please enter a valid email.";
    } else if (event.target.validity.tooShort) {
      messageEl.textContent =
        "Email address too short. Please enter a longer valid email address.";
    } else {
      messageEl.textContent = "Please provide a valid email.";
    }
  }
});

inputEl.addEventListener("input", (event) => {
  ctaEl.classList.remove("error");
});

formEl.addEventListener("submit", () => {
  ctaEl.innerHTML = `
        <div class="submit__message">
          <p>Thank you for signing up!</p>
          <p>We hope to share our latest updates with you soon.</p>
        </div>
    `;
});

formEl.addEventListener("focusin", (event) => {
  event.target.id === "inputEl"
    ? formEl.classList.add("focus")
    : document.getElementById(`${event.target.id}`).classList.add("focus")
});

formEl.addEventListener("focusout", (event) => {
  event.target.id === "inputEl"
    ? formEl.classList.remove("focus")
    : document.getElementById(`${event.target.id}`).classList.remove("focus")
});