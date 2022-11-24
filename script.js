// variables
let hourHand = document.querySelector(".hour");
let minHand = document.querySelector(".min");
let secHand = document.querySelector(".sec");

// functions
setInterval(function () {
  let date = new Date();
  let hours = date.getHours();
  if (hours > 12) {
    hours = hours - 12;
  }
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let hr = hours * 30 + minutes * 0.5;

  hourHand.style.transform = "rotate(" + hr + "deg)";

  minHand.style.transform = "rotate(" + minutes * 6 + "deg)";
  secHand.style.transform = "rotate(" + seconds * 6 + "deg)";
}, 1000);
