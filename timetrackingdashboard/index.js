const [...cardsEl] = document.querySelectorAll(".card")
const [...inputsEl] = document.querySelectorAll(".profile__duration-option")

let selected = "weekly"

fetch("./data.json")
  .then( response => response.json())
  .then( data => {
    updateValues(data)
    inputsEl.map( input => {
      input.addEventListener("click", (event) => {
        selected = event.target.value
        updateValues(data)
        inputsEl.map( input => {
          input.value != selected ? input.checked = false : true
        })
      })
    })
  })

function updateValues(data) {
  cardsEl.map( card => {
    // find the dataset that matches the card's life area 
    const stats = data.find( item => item.title === card.id )
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