//Rock Paper Scissors
//Get the choice of both player
const gameResult = document.querySelector(".gameResult");

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
rock.addEventListener("click", () => compareChoices(getComputerChoice(), "rock"));
paper.addEventListener("click", () => compareChoices(getComputerChoice(), "paper"));
scissors.addEventListener("click", () => compareChoices(getComputerChoice(), "scissors"));

//Comparison of the choices (winner/loser)
function compareChoices(computer, user){
    const order = ["rock", "paper", "scissors"];
    const userChoice = order.indexOf(user);
    const computerChoice = order.indexOf(computer);
    
    if (user == computer) {
        gameResult.textContent = "DRAW";
    }else if ((userChoice - computerChoice + 3) % 3 == 1) {
        gameResult.textContent = "YOU WIN"
    }else {
        gameResult.textContent = "YOU LOSE"
    }

    console.log(`user: ${user} | computer: ${computer}`);
}