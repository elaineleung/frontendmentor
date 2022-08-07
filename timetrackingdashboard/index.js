const cardsEls = document.querySelectorAll(".card")
const timeframeEls = document.querySelectorAll(".profile__duration-option")

let selected = "weekly"

const areasMap = {
  "work": "Work",
  "play": "Play",
  "study": "Study",
  "exercise": "Exercise",
  "social": "Social",
  "self-care": "Self Care"
}

const timeFrameMap = {
  "daily": "Yesterday",
  "weekly": "Last Week",
  "monthly": "Last Month"
}


fetch("./data.json")
  .then( response => response.json())
  .then( data => {
    
    updateValues(data)
    timeframeEls.forEach( timeframe => {
      timeframe.value === selected && timeframe.classList.add('selected')
      timeframe.addEventListener("click", (event) => {
        selected = event.target.value
        updateValues(data)
        timeframeEls.forEach( timeframe => {
          timeframe.value !== selected ? 
          timeframe.classList.remove("selected")
          : timeframe.classList.add('selected')
        })
      })
    })
  })
  .catch( error => console.log(error))

function updateValues(data) {
  cardsEls.forEach( card => {
    // find the dataset that matches the card's life area 
    const stats = data.find( item => item.title === areasMap[card.id] )
    const { current, previous } = stats.timeframes[selected]
    // find the elements within the card
    const statsNow = card.querySelector(".card__stats-now")
    const statsPrev = card.querySelector(".card__stats-prev")

    function displayHour(num) {
      return `${num}${num === 1 ? "hr" : "hrs"}`
    }
    statsNow.textContent = displayHour(current);
    statsPrev.textContent = `${timeFrameMap[selected]} - ${displayHour(previous)}`;
  })
}