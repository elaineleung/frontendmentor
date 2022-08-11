const sliderEl = document.querySelector("#imagesEl");
const textEl = document.querySelector("#textEl");
const prevBtn = document.querySelector(".prev-arrow");
const nextBtn = document.querySelector(".next-arrow");

const testimonials = [
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
let testimonial = testimonials[current];

window.addEventListener("load", showImage())

function showImage() {
  testimonials.forEach( item => {
    const listEl = document.createElement("li"); 
    const imgEl = document.createElement("img");
    imgEl.src = `${item.src}`
    imgEl.alt = "";
    sliderEl.appendChild(listEl);
    listEl.appendChild(imgEl)
    sliderArray.push(listEl);
    showText()
  })
}

nextBtn.addEventListener("click", () => {
  slideImage("next")
  showText()
})
prevBtn.addEventListener("click", () => {
  slideImage("previous")
  showText()
})

function slideImage(direction) {
  let translateProp;

  switch(true) {
    case (direction === "next" && current === 0):
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
}

function showText() {
  const name = document.createElement("h2"); 
  const title = document.createElement("p");
  textEl.textContent = `“ ${testimonials[current].quote} ”`
  name.textContent = testimonials[current].name
  title.textContent = testimonials[current].title
  name.classList.add("text-name")
  title.classList.add("text-title")
  textEl.append(name, title)
}