const sliderEl = document.querySelector("#imagesEl");
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
let idx = 0;
let testimonial = testimonials[idx];

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
  })
}

console.log(sliderArray)

nextBtn.addEventListener("click", () => {
  sliderEl.style.transform = "translateX(-100%)";
})
prevBtn.addEventListener("click", () => {
  sliderEl.style.transform = "translateX(0%)";
})

