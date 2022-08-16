const cardEl = document.getElementById("cardEl");
const formEl = document.getElementById("formEl");
const scoreBtns = document.querySelectorAll("[type='radio']");
const submitBtn = document.querySelector("button.submit");
let selected;

window.addEventListener("load", () => {
  formEl.reset();
  submitBtn.disabled = true
});

scoreBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    submitBtn.disabled = false
    selected = btn.value;
  });
});
 
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  if (selected != null) {
    const src = "./images/illustration-thank-you.svg"
    const titleText = "Thank you!"
    const bodyText = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"

    const thankyouHTML = `
      <div class="thankyou">
        <div class="thankyou__header">
          <img src=${src} alt="" aria-hidden="true" />
          <div class="thankyou__score">You selected ${selected} out of 5</div>
        </div>
        <div>
          <h2 class="thankyou__title">${titleText}</h2>
          <p class="thankyou__body">${bodyText}</p>
        </div>
      </div>
    `;

    const cardFragment = document.createRange().createContextualFragment(thankyouHTML)
    cardEl.textContent = ""
    cardEl.appendChild(cardFragment)
  }
});
