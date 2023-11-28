const contentEl = document.querySelector(".content");
const inputEl = document.getElementById("inputEl");
const notificationEl = document.getElementById("notificationEl");;
const formEl = document.getElementById("formEl");
const btnEl = document.getElementById("btnEl");

inputEl.addEventListener("invalid", (event) => {
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

  event.preventDefault();
  if (!event.target.validity.valid) {
    contentEl.classList.add("error");
    // inputEl.classList.add("invalid animated shake")
    if(!inputEl.value.match(validRegex)) {
      notificationEl.textContent = "Please provide a valid email.";
    } else if (event.target.validity.valueMissing) {
      notificationEl.textContent =
        "Email field cannot be empty. Please enter a valid email.";
    } else if (event.target.validity.tooShort) {
      notificationEl.textContent =
        "Email address too short. Please enter a longer valid email address.";
    } else {
      notificationEl.textContent = "Please provide a valid email.";
    }
  }
});

inputEl.addEventListener("input", () => {
  contentEl.classList.remove("error");
});

formEl.addEventListener("submit", () => {
  contentEl.innerHTML = `
        <div class="content__message">
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