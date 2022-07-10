
const barsEl = document.getElementById("barsEl")

fetch("./data.json")
.then(response => {
   return response.json();
})
.then(data => {
  const max = Math.max(...data.map( day => day.amount ))
  data.map( info => {
    const dayDiv = document.createElement("div")
    const amountDiv = document.createElement("div")
    const barDiv = document.createElement("div")
    const labelDiv = document.createElement("p")
    
    dayDiv.classList.add('bars__day')
    amountDiv.classList.add('bars__day-amount')
    amountDiv.textContent = `$${info.amount}`
    
    barDiv.classList.add('bars__day-bar')
    barDiv.addEventListener("mouseenter", (e) => {
      amountDiv.classList.add("hover")
    })
    barDiv.addEventListener("mouseleave", (e) => {
      amountDiv.classList.remove("hover")
    })
    info.amount === max && barDiv.classList.add('highlight')
    barDiv.style.height = `${info.amount * 0.1595}em`


    labelDiv.classList.add('bars__day-label')
    
    labelDiv.textContent = info.day
    barsEl.appendChild(dayDiv)
    dayDiv.appendChild(amountDiv)  
    dayDiv.appendChild(barDiv)
    dayDiv.appendChild(labelDiv)
  })
});