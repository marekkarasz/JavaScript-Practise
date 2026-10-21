"use strict";

// document.querySelector(".message").textContent = "🎉 Correct Number";
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".secretNumber").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 10;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("No Number Input");
  } else if (guess == secretNumber) {
    displayMessage("🎉 Correct Number");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    displayMessage(
      guess > secretNumber
        ? "🎉 Number too high, try again!"
        : "🎉 Number too Low, try again!",
    );
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    document.querySelector("body").style.backgroundColor = "#e32f2f";
    displayMessage("You lost, Game Over");
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Guess the number...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
});
