let dateCounter = new Date("01 / April / 2024/ 00:00:00").getTime();

let counter = setInterval(() => {
  let DateNow = new Date().getTime();
  let timeDiff = dateCounter - DateNow;

  let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  let hours = Math.floor(timeDiff / (1000 * 60 * 60) / (1000 / 60 / 60)) % 60;

  let minutes = Math.floor(timeDiff / (1000 * 60)) % 60;

  let seconds = Math.floor(timeDiff / 1000) % 60;

  document.querySelector(".days").innerHTML = days < "10" ? "0" + days : days;
  document.querySelector(".hours").innerHTML =
    hours < "10" ? "0" + hours : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < "10" ? "0" + minutes : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < "10" ? "0" + seconds : seconds;

  // console.log(seconds);
  // console.log(dateCounter);
}, 1000);
