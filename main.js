var inner = document.getElementById("inner-div");
var established = document.getElementById("established");

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

document.getElementById("event-button").onclick = function () {
  location.href = "../events.html";
};

document.getElementById("contact-button").onclick = function () {
  location.href = "../index.html#contact";
};

