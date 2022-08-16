const daysEl = document.querySelectorAll(".bars__day")

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
    data.forEach( (info, idx) => {
      const dayEl = Array.from(daysEl)[idx]
      const amountDiv = document.createElement("div")
      const barDiv = document.createElement("div")
      const labelDiv = document.createElement("p")
  
      dayEl.textContent = ""

      amountDiv.classList.add('bars__day-amount')
      amountDiv.textContent = `$${info.amount}`

      barDiv.classList.add('bars__day-bar')
      barDiv.style.height = `${info.amount * 0.179}rem`
      if (idx !== 6) {
        idx + 1 === currentDay && barDiv.classList.add('highlight')
      } else {
        currentDay === 0 && barDiv.classList.add('highlight')
      }

      labelDiv.classList.add('bars__day-label')  
      labelDiv.textContent = info.day

      dayEl.append(barDiv, amountDiv, labelDiv)  
  
      !barWidth && getBarWidth(idx, barDiv.clientWidth)  
      console.log(barDiv.clientWidth)
      const margin = ((amountDiv.clientWidth - barWidth) / 2)
      amountDiv.setAttribute('data-width', `-${margin}`)  
     
    })
  })
  .catch( error => console.log(error))
}

function getBarWidth(idx, width) {
  const gap = window.innerWidth >= 980 ? 18.4 : 12.48
  barWidth = idx === 0 && ((width - ((6 - idx) * gap)) / (7 - idx))
}

