const numEl = document.getElementById("numEl")
const adviceEl = document.getElementById("adviceEl")
const diceEl = document.getElementById("diceEl")

const url = "https://api.adviceslip.com/advice"
const max = 224  // max number of quotes from endpoint

loadAdvice()

diceEl.addEventListener("click", loadAdvice)

function loadAdvice() {
  const random = Math.floor(Math.random() * max)
 
  fetch(`${url}/${random}`)
    .then( response => response.json())
    .then( data => {
      numEl.textContent = `Advice #${data.slip.id}`
      adviceEl.textContent = `“${data.slip.advice}”`
   })
}