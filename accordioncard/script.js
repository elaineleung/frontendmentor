// Click on down arrow
// Ada display: block to answer
// Make arrow point up
// Make question bold and change font color

const faqs = [...document.getElementsByClassName("faq")]

faqs.forEach( faqEl => {
    const questionEl = faqEl.querySelector('.question')
    questionEl.addEventListener("click", () => {
        faqEl.classList.toggle("active")
    })
})