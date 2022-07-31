
const barsEl = document.getElementById("barsEl")

const currentDay = new Date().getDay()
let barWidth;

getData()
window.addEventListener('resize', getData)

function getData() {
  fetch("./data.json")
  .then(response => {
     return response.json(); 
  })
  .then(data => {
    barsEl.textContent = ''
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
  
      !barWidth && getBarWidth(idx, barDiv.clientWidth)
  
      const margin = ((amountDiv.clientWidth - barWidth) / 2)
      amountDiv.setAttribute('data-width', `-${margin}`)  
     
    })
  });
}

function getBarWidth(idx, width) {
  const gap = window.innerWidth >= 980 ? 18.4 : 12.48
  barWidth = idx === 0 && ((width - ((6 - idx) * gap)) / (7 - idx))
}