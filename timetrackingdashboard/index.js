import { areasMap, timeFrameMap } from "./helpers.js"

let selected = "weekly";

// first fetch data
function initialize(){
  const timeframeEls = document.querySelectorAll("[type='radio']");
  
  fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    updateValues(data);
    handleTimeframes(timeframeEls, data)
    const selectedEl = [...timeframeEls].find( el => el.value === selected)
    selectedEl.checked = true;
  })
  .catch((error) => console.log(error));
}
initialize()

 // event listener for each timeframe button

function handleTimeframes(timeframes, data){
  timeframes.forEach((timeframe) => {
    timeframe.addEventListener("click", (event) => {
      selected = event.target.value;
      updateValues(data);
    });
  });
}

function updateValues(data) {
  const cardsEls = document.querySelectorAll(".card");

  cardsEls.forEach((card, idx) => {
    // find the dataset that matches the card's life area
    const cardStats = data[idx]
    // const stats = data.find((item) => item.title === areasMap[card.id]);
    const { current, previous } = cardStats.timeframes[selected];
    // find the elements within the card
    const statsNow = card.querySelector(".card__stats-now");
    const statsPrev = card.querySelector(".card__stats-prev");

    function displayHour(num) {
      return `${num}${num === 1 ? "hr" : "hrs"}`;
    }
    statsNow.textContent = displayHour(current);
    statsPrev.textContent = `${timeFrameMap[selected]} - ${displayHour(previous)}`;
  });
}
