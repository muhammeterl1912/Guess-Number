let randomNumbers = Math.ceil(Math.random() * 25);
console.log(randomNumbers);
let message = document.querySelector(".msg");
let score = 10;
let topScore = localStorage.getItem("top-score")||0
document.querySelector(".top-score").textContent = topScore

document.querySelector(".check").addEventListener("click", () => {
  const guess = +document.querySelector(".guess").value;
  if (!guess) {
    message.textContent = "Please enter a valid nubmer...";
  } 
  
  else if (guess < 0 || guess >=25){    message.textContent = "Please enter a number between 1 and 25!!!";}
  
  else if (guess === randomNumbers) {
    message.textContent = "congratulations! You won the game.";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = randomNumbers;
    document.querySelector(".check").setAttribute("disabled", true);
    if (score > topScore) {
      // Local Storage
      localStorage.setItem("top-score",score)
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
      message.textContent = "Game Over!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

const again = document.querySelector(".again");
again.addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = "#2d3436";
  randomNumbers = Math.ceil(Math.random() * 25);
  score = 10;
  document.querySelector(".score").textContent = +score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".guess").focus();
  message.textContent = "The game starts for new player.";
});
// Enter Button
document.addEventListener("keydown", (e) => {
  e.key === "Enter" && document.querySelector(".check").click();
});
