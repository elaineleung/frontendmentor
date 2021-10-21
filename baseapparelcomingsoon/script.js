const signupEl = document.getElementById("signupEl")
const inputEl = document.getElementById("inputEl")
const messageEl = document.getElementById("messageEl")
const formEl = document.getElementById("formEl")

inputEl.addEventListener("invalid", (event)=>{
    event.preventDefault()
    if (!event.target.validity.valid) {
        signupEl.classList.add("error")
        // inputEl.classList.add("invalid animated shake")
        if (event.target.validity.patternMismatch) {
            messageEl.textContent = "Please provide a valid email."
        } else if (event.target.validity.valueMissing) {
            messageEl.textContent = "Email field cannot be empty. Please enter a valid email."
        } else if (event.target.validity.tooShort) {
            messageEl.textContent = "Email address too short. Please enter a longer valid email address."
        } else {
            messageEl.textContent = "Please provide a valid email."
        }
    }
})

inputEl.addEventListener("input", (event)=>{
    console.log(event.target.validity)
    signupEl.classList.remove("error")
})

formEl.addEventListener("submit", ()=>{
    signupEl.innerHTML = `
        <p class="submit__message">Thank you for signing up! We hope to share our latest updates with you soon.</p>
    `
})
