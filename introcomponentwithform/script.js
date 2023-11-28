const formEl = document.getElementById("formEl");
const signupEl = document.getElementById("signupEl");
const inputs = [...document.querySelectorAll('.form__input')]
const btnEl = document.getElementById("btnEl");

formEl.addEventListener('submit', ()=>{
  signupEl.innerHTML = `
        <h3 class="submit__title">Thank you for signing up!</h3>
        <p class="submit__message">Check your email to confirm your signup.</p>
    `;
})

inputs.forEach(inputDiv => {
  const input = inputDiv.querySelector("input")
  const label = inputDiv.querySelector("label")
  const message = inputDiv.querySelector(".input__message")
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  
  input.addEventListener("invalid", function (event) {
    event.preventDefault()

    this.classList.add("is-invalid")

    if(!input.value.match(validRegex)){
      message.textContent = `Looks like this is not ${input.type === "email" ? "an" : "a"} ${input.type}`
    }
    if(event.target.validity.tooShort){
      message.textContent = `${label.textContent} needs to be longer than ${input.minLength} characters`
    }
    if(event.target.validity.valueMissing){
      message.textContent = `${label.textContent} cannot be empty`
    }


    console.log(event.target.validity)
    // input.classList.add("is-invalid")
    // if(event.target.validity.valueMissing) {
    //   input.querySelector(".requirements").textContent = `Cannot be empty`
    // }
    
  })    
  input.removeEventListener("valid", (event) => {
    input.classList.remove("is-invalid")
  })
})

// inputEl.addEventListener("invalid", (event) => {
//   event.preventDefault();
//   if (!event.target.validity.valid) {
//     signupEl.classList.add("error");
//     // inputEl.classList.add("invalid animated shake")
//     if (event.target.validity.patternMismatch) {
//       messageEl.textContent = "Please provide a valid email.";
//     } else if (event.target.validity.valueMissing) {
//       messageEl.textContent =
//         "Email field cannot be empty. Please enter a valid email.";
//     } else if (event.target.validity.tooShort) {
//       messageEl.textContent =
//         "Email address too short. Please enter a longer valid email address.";
//     } else {
//       messageEl.textContent = "Please provide a valid email.";
//     }
//   }
// });

// inputEl.addEventListener("input", (event) => {
//   signupEl.classList.remove("error");
// });

// formEl.addEventListener("submit", () => {
//   signupEl.innerHTML = `
//         <p class="submit__message">Thank you for signing up! We hope to share our latest updates with you soon.</p>
//     `;
// });

// formEl.addEventListener("focusin", (event) => {
//   event.target.id === "inputEl"
//     ? formEl.classList.add("focus")
//     : document.getElementById(`${event.target.id}`).classList.add("focus")
// });

// formEl.addEventListener("focusout", (event) => {
//   event.target.id === "inputEl"
//     ? formEl.classList.remove("focus")
//     : document.getElementById(`${event.target.id}`).classList.remove("focus")
// });