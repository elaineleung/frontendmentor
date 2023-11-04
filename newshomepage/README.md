# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Mobile view of solution](./design/mobile.png)

![Desktop view of solution](./design/desktop.png)

### Links

- Solution URL: [Link to solution URL here](https://www.frontendmentor.io/solutions/responsive-news-homepage-with-mobile-nav-and-accessibility-design-IcU5INA1N2)
- Live Site URL: [Link to live site](https://elaineleung.github.io/frontendmentor/newshomepage/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I used this project as a major review of the stuff I've done, seeing that I haven't coded for a long while. Turns out this was a great help, as I was able to refine some of the past code I've written (like the mobile nav), and I used the opportunity also to greatly revamp my workflow and process. 

I had two main guiding principles in this project: (1) keep everything simple, as I tend make eveyrthing too unnecessarily complex at times, and (2) keep accessibility in mind.

Here are some key things I relearned/reworked:

1. When JS is disabled

I normally have JS enabled in my browsers, and so it didn't really occur to me that there are users who have it disabled, whether it be for safety reasons, or because their company requires them to do so, or maybe their browser is just too old. In any case, I thought about this point as well for this project and I made sure to consider an alternative layout. The only part where JS is used is the mobile nav, and so I added in a simple style for users with JS disabled along with a function in my JS script to check whether JS is enabled, in which case there would be a class added to the body element, and that class would in turn be included as a selector for the mobile nav.

2. Mobile nav: 

Instead of using data attributes (i.e., `data-visible`), I used the `hidden` attribute to toggle the visibility of the mobile nav. The reason why I didn't use a data attribute is because they aren't read by screenreaders (unlike aria lables), it would make more sense to use something that can be used by screenreaders instead of doing double the work. Using `hidden` was something I picked up from Heydon Pickering's Inclusive Components book, and some browsers typically have this in their default styles. 

The only tricky thing with using `hidden` is, technically the navigation would only be able to use `hidden` under 2 conditions, namely (1) when JS is enabled in the browser (otherwise there is no point using the attribute when you can't toggle it, and I don't want to misuse a checkbox here) and (2) when the browser width is still within a certain breakpoint, e.g., within 600px in mobile view. If the browser has JS disabled but the user is viewing the site in mobile view, the navigation should be visible still, and in this case with JS disabled, there would be no hamburger menu and no slide-in nav. Simply put, there can't be the `hidden` attribute used on the nav element when JS is disabled; otherwise, the user would not be able to see the nav element unless somewhere in the CSS there is a line that overwrites the default attribute property.

3. Looping focus within mobile nav for accessibility:

I added a `loopFocusInNav` function that would make sure that for users using a screenreader, they would be able to navigate the mobile nav and only be within the nav (as in not the rest of the page). Once they either hit the close button or one of the links, they would break out of the loop.


### Continued development

I wanted to test this out on a screenreader; hopefully I can get around to it so that I can see whether my code actually works for screenreader users.

### Useful resources

- [Inclusive Components](https://inclusive-components.design) - This helped me with the mobile nav; I think most of my code ideas came from here.
- [Mobile Nav Accessibility](https://www.a11ymatters.com/pattern/mobile-nav/) - Lots of good ideas here that I didn't think of, really worth checking out


## Author

- Frontend Mentor - [@elaineleung](https://www.frontendmentor.io/profile/elaineleung)
- Twitter - [@elainearray](https://twitter.com/elainearray)

## Acknowledgments

Many thanks to Kevin Powell as usual; I probably reviewed his videos tons of times for this project! Another huge thank you to Heydon Pickering for his work on inclusive components.