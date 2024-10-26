const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const rollButton = document.getElementById("rollButton");
const sumDisplay = document.getElementById("sum");
const counterDisplay = document.getElementById("counter");
const messageDisplay = document.getElementById("message");

let rollCount = 0;

function rollDice() {
  const randomNum1 = Math.floor(Math.random() * 6) + 1;
  const randomNum2 = Math.floor(Math.random() * 6) + 1;

  dice1.src = `img/dice${randomNum1}.png`;
  dice2.src = `img/dice${randomNum2}.png`;

  const sum = randomNum1 + randomNum2;
  sumDisplay.textContent = `Sum: ${sum}`;

  rollCount++;
  counterDisplay.textContent = `Rolls: ${rollCount}`;

  if (randomNum1 === randomNum2) {
    messageDisplay.textContent = "You rolled doubles";
  } else {
    messageDisplay.textContent = "";
  }
}

rollButton.addEventListener("click", rollDice);
