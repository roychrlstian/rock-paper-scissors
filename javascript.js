//Rock Paper Scissors
//Get the choice of both player
const gameResult = document.querySelector(".gameResult");
let computerScore = 0;
let userScore = 0;
//Computer random choice
function getComputerChoice(){
    const num = Math.floor(Math.random() * 3) + 1;
    let computer = "";
    switch (num){
        case 1:
            computer = "rock";
            break;
        case 2:
            computer = "paper";
            break;
        case 3:
            computer = "scissors"
            break;
    }
    return computer;
}

//User choices
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

//User input choice
rock.addEventListener("click", () => playGame(getComputerChoice(), "rock"));
paper.addEventListener("click", () => playGame(getComputerChoice(), "paper"));
scissors.addEventListener("click", () => playGame(getComputerChoice(), "scissors"));

//Comparison of the choices (winner/loser)
function compareChoices(computer, user){
    const order = ["rock", "paper", "scissors"];
    const userChoice = order.indexOf(user);
    const computerChoice = order.indexOf(computer);
    
    if (user == computer) {
        gameResult.textContent = "DRAW";
    }else if ((userChoice - computerChoice + 3) % 3 == 1) {
        gameResult.textContent = "YOU WIN"
        userScore++;
    }else {
        gameResult.textContent = "YOU LOSE"
        computerScore++;
    }
}

//Runs the game
function playGame(computer, user){
    compareChoices(computer, user);
    
    document.querySelector(".playerScore").textContent = userScore;
    document.querySelector(".computerScore").textContent = computerScore;

    checkGameOver();
}

//Check if the game is over
function checkGameOver(){
    if (userScore === 3 || computerScore === 3) {
        if (userScore > computerScore) {
            gameResult.textContent = "CONGRATS! YOU WIN THE GAME!";
        } else {
            gameResult.textContent = "SORRY! YOU LOSE THE GAME!";
        }
        userScore = 0;
        computerScore = 0;
        document.querySelector(".playerScore").textContent = userScore;
        document.querySelector(".computerScore").textContent = computerScore;
    }
}

//Restart the game
const restartButton = document.querySelector(".restart");
restartButton.addEventListener("click", () => {
    userScore = 0;
    computerScore = 0;
    document.querySelector(".playerScore").textContent = userScore;
    document.querySelector(".computerScore").textContent = computerScore;
    gameResult.textContent = "---";
});