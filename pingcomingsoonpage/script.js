const formEl = document.getElementById("formEl");
const signupEl = document.getElementById("signupEl");
const emailEl = document.getElementById("emailEl");

const input = emailEl.querySelector("input");
const message = emailEl.querySelector(".input__message");

formEl.addEventListener("submit", () => {
  signupEl.innerHTML = `
        <h3 class="submit__title">Thank you for signing up!</h3>
        <p class="submit__message">Check your email to confirm your signup.</p>
    `;
});

input.addEventListener("invalid", (event) => {
  event.preventDefault();
  input.classList.add("is-invalid");
  if (event.target.validity.valueMissing) {
    message.textContent = `Your ${input.name} cannot be empty`;
  }
  if (event.target.validity.patternMismatch) {
    message.textContent = `Please provide a valid email address`;
  }
  if (event.target.validity.tooShort) {
    message.textContent = `Your ${input.name} needs to be longer than ${input.minLength} characters`;
  }
});

input.removeEventListener("valid", () => {
  input.classList.remove("is-invalid");
});
