const componentEl = document.getElementById("compEl")
const numEl = document.getElementById("numEl")
const adviceEl = document.getElementById("adviceEl")
const diceEl = document.getElementById("diceEl")
const loadingEl = document.getElementById("loadingEl")

const url = "https://api.adviceslip.com/advice"
const max = 224  // max number of quotes from endpoint


// loadingEl.setAttribute("aria-hidden", true)

diceEl.addEventListener("click", loadAdvice)

window.addEventListener("load", ()=> {
  componentEl.classList.remove("hidden")
  loadAdvice()
})

function loadAdvice() {
  const random = Math.floor(Math.random() * max)
  loadingEl.setAttribute("aria-hidden", true)  
  fetch(`${url}/${random}`)
    .then( response => response.json())
    .then( data => {
      if (data) {
        
        setTimeout(()=> {
          loadingEl.setAttribute("aria-hidden", false)
          numEl.textContent = `Advice #${data.slip.id}`
          adviceEl.textContent = `“${data.slip.advice}”`
        }, 1000)
      } 
   })
}

function reset() {  
  numEl.textContent = ""
  adviceEl.textContent = ""
}