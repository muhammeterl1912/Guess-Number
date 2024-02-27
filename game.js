let randomNumbers = Math.ceil(Math.random() * 25);
// console.log(randomNumbers);
let message = document.querySelector(".msg");
let score = 10;
let duplicate = [];
let topScore = localStorage.getItem("top-score") || 0;
document.querySelector(".top-score").textContent = topScore;

document.querySelector(".check").addEventListener("click", () => {
  const guess = +document.querySelector(".guess").value;

  if (!guess || guess < 0 || guess > 25) {
    message.textContent =
      "Please enter a valid number and a number between 1 and 25!!!";
    document.querySelector(".guess").value = "";
    document.querySelector(".guess").focus();
  } else if (guess === randomNumbers) {
    message.textContent = "congratulations! You won the game.";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = randomNumbers;
    document.querySelector(".check").setAttribute("disabled", true);

    if (score > topScore) {
      // Local Storage
      localStorage.setItem("top-score", score);
      // Local Storage
      topScore = score;
      document.querySelector(".top-score").textContent = score;
    }
  } else {
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      guess < randomNumbers
        ? (message.textContent = "Increase the number")
        : (message.textContent = "Decrease the number");
      document.querySelector(".guess").value = "";
      document.querySelector(".guess").focus();
    } else {
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
      message.textContent = `Game Over!The Correct answer was ${randomNumbers}`;
    }
  }
  duplicateNumbers(guess);
});

const again = document.querySelector(".again");
again.addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = "#2d3436";
  randomNumbers = Math.ceil(Math.random() * 20);
  console.log(randomNumbers);

  score = 10;

  document.querySelector(".score").textContent = score;

  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";

  message.textContent = "The game starts for new player... ";

  document.querySelector(".check").disabled = false;
});

// Enter Button
document.addEventListener("keydown", (e) => {
  e.key === "Enter" && document.querySelector(".check").click();
});

function duplicateNumbers(number) {
  if (duplicate.includes(number)) {
    score++;
    message.textContent = `You have already entered ${number} enter unique number.`;
    document.querySelector(".guess").value = "";
    document.querySelector(".guess").focus();
    return;
  }
  duplicate.push(number);
}
