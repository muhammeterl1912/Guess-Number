let randomNumbers = Math.ceil(Math.random() * 25);
console.log(randomNumbers)
let message = document.querySelector(".msg");
let score = 10;
let topScore = 0;

document.querySelector(".check").addEventListener("click", () => {
  const guess = +document.querySelector(".guess").value;
if (!guess) {
    message.textContent = "Please enter a valid nubmer..."
}else if ( guess === randomNumbers) {
    message.textContent = "congratulations! You won the game."
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = randomNumbers;
    }
    
    






})
