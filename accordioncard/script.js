// Click on down arrow
// Ada display: block to answer
// Make arrow point up
// Make question bold and change font color

const faqs = document.querySelectorAll(".faq")

faqs.forEach( faqEl => {
    const questionEl = faqEl.querySelector('.question')
    questionEl.addEventListener("toggle", () => {
        if (faqEl.open === false) {
            faqEl.open = true
        } else {
            faqEl.open = false
        }

        // let open = faqEl.open
        // faqEl.open = !open
        console.log(faqEl.open)
    })
})