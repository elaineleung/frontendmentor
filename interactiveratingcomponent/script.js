const cardEl = document.getElementById("cardEl");
const formEl = document.getElementById("formEl");
const scoreBtns = document.querySelectorAll("[type='radio']");

let selected;

window.addEventListener("load", () => {
  formEl.reset();
});

scoreBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    selected = btn.value;
  });
});
 
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  if (selected != null) {
    cardEl.innerHTML = `
      <div class="thankyou">
        <div class="thankyou__header">
          <img
              src="./images/illustration-thank-you.svg"
              alt="mobile phone surrounded by different kinds of icons"
            />
          <div class="thankyou__score">You selected ${selected} out of 5</div>
        </div>
        <div>
          <h2 class="thankyou__title">Thank you!</h2>
          <p class="thankyou__body">We appreciate you taking the time to give a rating.
            If you ever need more support, don't hesitate to get in touch!</p>
        </div>
      </div>
    
    `;
  }
});
