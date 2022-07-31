const componentEl = document.getElementById("compEl")
const diceEl = document.getElementById("diceEl")
const loadingEl = document.getElementById("loadingEl")

const url = "https://api.adviceslip.com/advice"
const max = 224  // max number of quotes from endpoint

let previousActiveEl = null

window.addEventListener("load", ()=> {
  loadAdvice()
  componentEl.classList.remove("hidden")
})

diceEl.addEventListener("click", loadAdvice)
diceEl.addEventListener("keydown", (event)=>{
  if (event.key === " " || event.key === "Enter" || event.key === "Spacebar" ) {
    event.preventDefault()
    loadAdvice()
  }
})
 
async function loadAdvice() {
  const random = Math.floor(Math.random() * max)
  loadingEl.setAttribute("aria-hidden", true) 

  try {
    const response = await fetch(`${url}/${random}`)
    const data = await response.json()
    if (data) {        
      setTimeout(()=> {
        loadingEl.setAttribute("aria-hidden", false)
        componentEl.querySelector(".advice__number").textContent = `Advice #${data.slip.id}`
        componentEl.querySelector(".advice__text").textContent = `“${data.slip.advice}”`
        document.body.focus();
      }, 1000)
    }
  } catch(error) {
    console.log("Error caught: ", err.message);
  }
}

// function reset() {  
//   numEl.textContent = ""
//   adviceEl.textContent = ""
// }