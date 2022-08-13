const sliderEl = document.querySelector("#imagesEl");
const textEl = document.querySelector("#textEl");
const prevBtn = document.querySelector(".prev-arrow");
const nextBtn = document.querySelector(".next-arrow");

const data = [
  {
    name: "Tanya Sinclair",
    title: "UX Engineer",
    quote:
      "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.",
    src: "./images/image-tanya.jpg",
  },
  {
    name: "John Tarkpor",
    title: "Junior Front-end Developer",
    quote:
      "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
    src: "./images/image-john.jpg",
  },
];

let sliderArray = []
let current = 0;
let testimonial = data[current];

window.addEventListener("load", showContent())

function showContent() {
  data.forEach( item => {
    showImages(item)
    showText(item)
  })
}

nextBtn.addEventListener("click", () => {
  slideContent("next")
})
prevBtn.addEventListener("click", () => {
  slideContent("previous")
})

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    slideContent("next")
    nextBtn.focus()
  } else if (event.key === "ArrowLeft") {
    slideContent("previous")
    prevBtn.focus()
  } else null
})

function slideContent(direction) {
  let translateProp;
  // const idx = direction === "next" ? current + 1 : current - 1;

  switch(true) {
    case (direction === "next" && current === data.length - 2):
      translateProp = "translateX(-100%)";
      current = 1
      break;
    case (direction === "previous" && current === 1):
      translateProp = "translateX(0%)";
      current = 0
      break;
    default:
      null
  }
  sliderEl.style.transform = translateProp;
  textEl.style.transform = translateProp;
}

function showText(item) {
  const listEl = document.createElement("div"); 
  const name = document.createElement("h3"); 
  const title = document.createElement("p");
  const textbody = document.createElement("blockquote");

  textbody.textContent = `“ ${item.quote} ”`
  name.textContent = item.name
  title.textContent = item.title

  textEl.appendChild(listEl);
  listEl.append(textbody, name, title)
  textbody.classList.add("text-textbody")
  name.classList.add("text-name")
  title.classList.add("text-title")
}

function showImages(item) {
  const listEl = document.createElement("div"); 
  const imgEl = document.createElement("img");
  imgEl.src = `${item.src}`
  imgEl.alt = "";
  sliderEl.appendChild(listEl);
  listEl.appendChild(imgEl)
  sliderArray.push(listEl);
}