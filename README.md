A single-page personal portfolio site built with plain HTML, CSS, and JavaScript.

Live Demo
https://trevorayunga.github.io/trevorayunga-portfolio/


Features
Responsive single-page layout with a sticky nav that links to each section

About section with a short bio and avatar

Skills rendered dynamically from a JavaScript array via a loop

Project cards rendered dynamically from an array of objects via a loop
Contact section with email and GitHub links

No frameworks — vanilla HTML/CSS/JS only

Technologies Used
HTML
CSS (custom properties, flexbox, grid)
JavaScript (DOM APIs, for...of loops, arrays of objects)

What I Learned

Structuring skills and projects as JavaScript data rather than hardcoding them into the HTML made the page far easier to update — adding a new project is now a one-line change to an array instead of editing markup. It also reinforced how much cleaner document.createElement + append is than building HTML strings by hand.



How to Run Locally
Clone the repo:
   git clone https://github.com/trevorayunga/trevorayunga-portfolio
   cd portfolio
Open index.html directly in a browser, or serve it locally:
  open with live server

