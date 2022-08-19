
getData();

function getData() {
  fetch("./data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderData(data);
    })
    .catch((error) => console.log(error));
}

function renderData(data) {
  const daysEl = document.querySelectorAll(".bars__day");

  data.forEach((info, idx) => {
    const dayEl = Array.from(daysEl)[idx];
    const currentDay = new Date().getDay();

    dayEl.textContent = "";
    const barHTML = `
      <div class="bars__day-bar" style="height: ${info.amount * 0.179}rem"></div>
      <div class="bars__day-amount">$${info.amount}</div>
      <div class="bars__day-label">${info.day}</div>
    `
    const barFragment = document.createRange().createContextualFragment(barHTML)
   
    const barDiv = barFragment.querySelector(".bars__day-bar")

    if (idx !== 6) {
      idx + 1 === currentDay && barDiv.classList.add("highlight");
    } else {
      currentDay === 0 && barDiv.classList.add("highlight");
    }

    dayEl.appendChild(barFragment)
  });
}
