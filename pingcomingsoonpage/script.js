const formEl = document.getElementById("formEl");
const signupEl = document.getElementById("signupEl");
const inputs = [...document.querySelectorAll('.form__input')]

formEl.addEventListener('submit', ()=>{
  signupEl.innerHTML = `
        <h3 class="submit__title">Thank you for signing up!</h3>
        <p class="submit__message">Check your email to confirm your signup.</p>
    `;
})

inputs.forEach(inputDiv => {
  const input = inputDiv.querySelector("input")
  const message = inputDiv.querySelector(".input__message")
  
  input.addEventListener("invalid", (event) => {
    event.preventDefault()
    input.classList.add("is-invalid")
    if(event.target.validity.valueMissing){
      message.textContent = `Your ${input.name} cannot be empty`
    }
    if(event.target.validity.patternMismatch){
      message.textContent = `Please provide a valid ${input.name}`
    }
    if(event.target.validity.tooShort){
      message.textContent = `Your ${input.name} needs to be longer than ${input.minLength} characters`
    }

  })    
  input.removeEventListener("valid", (event) => {
    input.classList.remove("is-invalid")
  })
})

