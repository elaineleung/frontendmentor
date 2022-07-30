const componentEl = document.getElementById("compEl")
const numEl = document.getElementById("numEl")
const adviceEl = document.getElementById("adviceEl")
const diceEl = document.getElementById("diceEl")

const loadingEl = document.getElementById("loadingEl")

const url = "https://api.adviceslip.com/advice"
const max = 224  // max number of quotes from endpoint


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
        loadingEl.classList.add("transition-none")
        numEl.textContent = `Advice #${data.slip.id}`
        adviceEl.textContent = `“${data.slip.advice}”`
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