let userScore = 0;
let compScore = 0;


const tup = new Audio("tup.mp3");



let choices = document.querySelectorAll(".choices");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");

const genRndChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const rndIndx = Math.floor(Math.random() * 3);
  return options[rndIndx];
};

const drawGame = () => {
  msg.innerText = "Game was draw Play again.";
  msg.computedStyleMap.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    // msg.innerText = `you win. ${userChoice} beats your ${compChoice}`;
    msg.innerText = `You win!`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    // msg.innerText = `you lost. ${compChoice} beats your ${userChoice}`;
    msg.innerText = `You lost.`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const compChoice = genRndChoice();
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? true : false;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? true : false;
    } else userWin = compChoice === "rock" ? true : false;
    showWinner(userWin,userChoice,compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    tup.play();
    let id = choice.getAttribute("id");
    playGame(id);
  });
});
