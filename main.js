let inner = document.getElementById("inner-div");
let established = document.getElementById("established");

function navigateEvents() {
  location.href = "../events.html";
};

function navigateContact() {
  location.href = "../index.html#contact";
};

// from https://www.w3schools.com/howto/howto_js_slideshow.asp

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function incrementSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("past-event");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "flex";
}

function myFunction() {
    var x = document.getElementById("dropdown");
    var icon = document.getElementById("hamb");
    console.log(icon);
    if (x.style.display === "flex") {
      x.style.display = "none";
      icon.style.fontSize='50px';
      icon.innerHTML = '&#9776';
    } else {
      x.style.display = "flex";
      icon.style.fontSize='40px';x
      icon.style.paddingTop='20px'
      icon.innerHTML ='&#x2715';
    }
    
}

