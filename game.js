let randomNumbers = Math.ceil(Math.random() * 25);
console.log(randomNumbers);
let message = document.querySelector(".msg");
let guessSelector = document.querySelector(".guess");
let score = 10;
let duplicate = [];
let topScore = localStorage.getItem("top-score") || 0;
document.querySelector(".top-score").textContent = topScore;

document.querySelector(".check").addEventListener("click", () => {
  check();
});

const check = () => {
  const guess = +guessSelector.value;
  const res = duplicateNumbers(guess);
  if (res) {
    return false;
  }
  // console.log(duplicate,res,guess)
  duplicate.push(guess);
  if (!guess || guess < 0 || guess > 25) {
    message.textContent =
      "Please enter a valid number and a number between 1 and 25!!!";
    guessSelector.value = "";
    guessSelector.focus();
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
      guessSelector.value = "";
      guessSelector.focus();
    } else {
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
      message.textContent = `Game Over!The Correct answer was ${randomNumbers}`;
    }
  }
};

const again = document.querySelector(".again");
again.addEventListener("click", () => {
  duplicate = [];
  check()
  document.querySelector("body").style.backgroundColor = "#2d3436";
  randomNumbers = Math.ceil(Math.random() * 25);
  console.log(randomNumbers);

  score = 10;

  document.querySelector(".score").textContent = score;

  document.querySelector(".number").textContent = "?";

  guessSelector.value = "";

  message.textContent = "The game starts for the new player... ";

  document.querySelector(".check").disabled = false;
});

// Enter Button
document.addEventListener("keydown", (e) => {
  e.key === "Enter" && check();
});

function duplicateNumbers(number) {
  if (duplicate.includes(number)) {
    message.textContent = `You have already entered ${number}.Please enter an unique number.`;
    guessSelector.value = "";
    guessSelector.focus();
    return true;
  }
  return false;
}
