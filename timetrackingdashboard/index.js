const [...cardsEl] = document.querySelectorAll(".card")
const [...inputsEl] = document.querySelectorAll(".profile__duration-option")

let selected = "weekly"

const areasMap = {
  "work": "Work",
  "play": "Play",
  "study": "Study",
  "exercise": "Exercise",
  "social": "Social",
  "self-care": "Self Care"
}

fetch("./data.json")
  .then( response => response.json())
  .then( data => {
    updateValues(data)
    inputsEl.map( input => {
      input.value === selected && input.classList.add('selected')
      input.autocomplete = "off"
      input.addEventListener("click", (event) => {
        selected = event.target.value
        updateValues(data)
        inputsEl.map( input => {
          input.classList.remove("selected")
          input.value === selected && input.classList.add('selected')
          // input.value != selected ? input.checked = false : true
        })
      })
    })
  })

function updateValues(data) {
  cardsEl.map( card => {
    // find the dataset that matches the card's life area 
    const stats = data.find( item => item.title === areasMap[card.id] )
    const { current, previous } = stats.timeframes[selected]
    // find the elements within the card
    const statsNow = card.querySelector(".card__stats-now")
    const statsPrev = card.querySelector(".card__stats-prev")

    function displayHour(num) {
      return `${num}${num > 1 ? "hrs" : "hr"}`
    }

    statsNow.textContent = displayHour(current);
    statsPrev.textContent = `Last Week - ${displayHour(previous)}`;

  })
}