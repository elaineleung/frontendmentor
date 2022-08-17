import { data } from './data.js'

handleEventListeners()

function handleEventListeners() {
  const prevBtn = document.querySelector(".prev-arrow");
  const nextBtn = document.querySelector(".next-arrow");
  let current = 0;

  window.addEventListener("load", showContent())
  nextBtn.addEventListener("click", () => slideContent("next"))
  prevBtn.addEventListener("click", () => slideContent("previous"))
  
  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      slideContent("next")
    } else if (event.key === "ArrowLeft") {
      slideContent("previous")
    } else null
  })

  function slideContent(direction) {
    if (direction === "next" && current === data.length - 2) {
      document.body.classList.add("animate")
      current = 1
      nextBtn.focus()
    } else if (direction === "previous" && current === 1) {
      document.body.classList.remove("animate")
      current = 0
      prevBtn.focus()
    }
  }
}


function showContent() {
  data.forEach( item => {
    showImages(item)
    showText(item)
  })
}

function showText(item) {
  const textEl = document.querySelector("#textEl");
  const textHTML = `
    <li>
      <blockquote class="text-textbody">“ ${item.quote} ”</blockquote>
      <h3 class="text-name">${item.name}</h3>
      <p class="text-title">${item.title}</p>
    </li>
  `
  textEl.insertAdjacentHTML("beforeend", textHTML)
}

function showImages(item) {
  const sliderEl = document.querySelector("#imagesEl");
  const imageHTML = `
    <li>
      <img src="${item.src}" alt="${item.name}" />
    </li>
  `
  sliderEl.insertAdjacentHTML("beforeend", imageHTML)
}