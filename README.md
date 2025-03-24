# Frontend Mentor - Interactive rating component solution
![Design preview for the Interactive rating component coding challenge](./design/InteractiveRatingComponents.gif)

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Latest Changes & What I Fixed](#Latest-Changes-&-What-I-Fixed)
  - [Last-Minute Change](#uLast-Minute-Change)
  - [Useful resources](#useful-resources)
- [Author](#author)

---

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: [Add solution URL here](https://github.com/DarkPix3l/interactive-rating-component)
- Live Site URL: [Add live site URL here](https://fm-interactiveratingcomponent.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript

### Latest Changes & What I Fixed

So, I made a few improvements to the rating system to make everything smoother and more user-friendly. Here’s what I changed and why:

**1. Better Transitions Between Sections**

- Before, when submitting a rating, the ratingSection just disappeared, and the thanksSection immediately popped up which felt abrupt.
  I thought about improving this fade-in and out but also to find the way to delay the fade-in of the second section.

```js

rating.addEventListener("transitionend", function () {});

```

- I made it fade out smoothly using opacity: 0 before actually hiding it with visibility: hidden. Then, once the fade-out was done, the thanksSection fades in (opacity: 1).
  Why? Visibility (hidden/visible) doesn’t animate in CSS, so I had to rely on opacity for a smooth transition.



**2. Page-Reload After Successful submission**

After successful submission, I added a 5-second delay before the page refreshes, so users have time to see the “Thank You” message.



**3.Rating System**

I added data-value attributes to each button so that when a user clicks on one, JavaScript grabs that value and injects it dynamically into the HTML.
So now, after submitting, the button inside thanksSection updates with: "You selected X out of 5", making it clear what the user chose.

🌕 **Selecting a Number Rating**

- Each button (.num-btn) has a data-value attribute (1-5).

- When a button is clicked, it:
   - Removes the "active" class from all buttons.
   - Adds "active" to the clicked button so it stands out.
   - Saves the selected value (selectedValue = element.getAttribute("data-value")).

🌕 **Submitting the Rating**

- When the submit button is clicked:
   - It checks if a rating was selected.

   - If selected, it: - Fades out ratingSection (opacity: 0 → visibility: hidden). - Shows thanksSection (opacity: 1 → visibility: visible). - Updates the text to say "You selected X out of 5". - Reloads the page after 5 seconds.

   - If not selected, it: - Shows an alert message. - Adds a red border to the rating card as a warning.



**4.Created the Alert Message**

- Before, if someone clicked submit without picking a rating, nothing happened except a console error.
- Now, when that happens, an alert message appears, and I also add a red border around the rating card to make it obvious something is wrong.
- I kept the alert element in the DOM (instead of display: none), so it doesn’t mess up the layout when it appears.


### Last-Minute Change

**Shake Effect on Error**

I added a small but cool shake animation when the user tries to submit without selecting a rating. Here's what I did:

- Created a CSS animation (with keyframes) called shake, which moves the rating card slightly left and right.

- Triggered the animation in JavaScript when an error occurs (no rating selected).

- Automatically removed the animation after it plays, so it resets properly for the next attempt.

```css

@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
  75% {
    transform: translateX(-5px);
  }
}

.cardShake {
  animation: shake 0.3s ease-in-out;
}

```

```js

cardAlert.classList.add("cardShake");
setTimeout(() => {
  cardAlert.classList.remove("cardShake");
}, 300);

```

---

### Useful resources

- [transitionend Event](https://www.w3schools.com/jsref/event_transitionend.asp) - this helped me with checking when the transition of an element was done.
- [NodeLists vs. Arrays](https://gomakethings.com/nodelists-vs-arrays/) - well... always useful.

## Author

- Website - [GM](gretamacri.com)
- Frontend Mentor - [@DarkPix3l](https://www.frontendmentor.io/profile/DarkPix3l)

