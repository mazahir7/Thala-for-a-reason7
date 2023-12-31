"use strict";

const btns = document.querySelectorAll("button");
const thalaDance = document.querySelector(".thala");
const h1 = document.querySelector("h1");



btns.forEach(btn => {
  btn.addEventListener("click", () => {

    const name = document.getElementById("fname").value;
    const birthYear = document.getElementById("year").value;

    const thala = checkThala(name, + birthYear);

    if (thala === 7) {

      thalaDance.classList.add("display-flex");
      thalaDance.innerHTML = `
      <img src="assets/dhoniDance.jpg" alt="thala dancing">
      <audio src="assets/Thala.mp3" autoplay loop></audio>`;

      const boleJoKoyal = document.querySelector("audio");
      const fullName = document.getElementById("fname").value;
      h1.innerText = fullName + " is thala for a reason";

    }
  });
});

function checkThala(name, year) {
  const nameLength = name.replaceAll(" ", "").length;

  if (nameLength === 7) {
    return 7;
  }

  let sum = 0;
  while (year !== 0) {
    sum += year % 10;
    year = Math.floor(year / 10);
  }

  if (sum === 7) {
    return 7;
  }

}
