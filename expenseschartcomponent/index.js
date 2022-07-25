
const barsEl = document.getElementById("barsEl")

const currentDay = new Date().getDay()

fetch("./data.json")
.then(response => {
   return response.json();
})
.then(data => {
  
  data.forEach( (info, idx) => {
    const dayDiv = document.createElement("div")
    const amountDiv = document.createElement("div")
    const barDiv = document.createElement("div")
    const labelDiv = document.createElement("p")
    
    dayDiv.classList.add('bars__day')

    amountDiv.classList.add('bars__day-amount')
    amountDiv.textContent = `$${info.amount}`
    
    barDiv.classList.add('bars__day-bar')

    idx + 1 === currentDay && barDiv.classList.add('highlight')
    barDiv.style.height = `${info.amount * 0.179}rem`

    labelDiv.classList.add('bars__day-label')  
    labelDiv.textContent = info.day

    barsEl.appendChild(dayDiv)
    dayDiv.append(barDiv, amountDiv, labelDiv)  
  })
});