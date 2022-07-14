const numEl = document.getElementById("numEl")
const adviceEl = document.getElementById("adviceEl")
const diceEl = document.getElementById("diceEl")

const url = "https://api.adviceslip.com/advice"
const max = 224  // max number of quotes from endpoint

diceEl.addEventListener("click", () => {
  const random = Math.floor(Math.random() * max)
 
  fetch(`${url}/${random}`)
    .then( response => response.json())
    .then( data => {
      numEl.textContent = data.slip.id
      adviceEl.textContent = data.slip.advice
   })
})