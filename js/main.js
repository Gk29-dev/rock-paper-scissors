const rock = "rock";
const paper = "paper";
const scissors = "scissors";

const USER = "User";
const COMPUTER = "Computer";
const MATCH_TIE = "Match Tie";

let userChoice;
let computerChoice;
let userScore = 0;
let computerScore = 0;

const showUserChoice = document.getElementById("result-user-stat");
const showComputerChoice = document.getElementById("result-comp-stat");
const showWinner = document.getElementById("result-final-stat");

const userChoices = document.querySelectorAll(".choice");

userChoices.forEach((choice) => {
    choice.addEventListener("click", (e) => {
        userChoice = e.target.alt;
        showUserChoice.innerText = "User: "+userChoice;

    //Call the computer choices function simultaneously when user click on the their choices
    computerChoice = computerChoices();
    showComputerChoice.innerText = "Computer: "+computerChoice;

    const result = winningLogic(userChoice, computerChoice);

    //Show who is the  winner
    showWinner.innerText = "Winner: "+result;

    //Update the score board
    updateScoreBoard(result);
    });
  
})

function computerChoices(){
    //Generate random number between 0 to 2;
    const randomNumber = Math.floor(Math.random() * 3);

    // 0 => 'rock',
    // 1=> 'paper',
    // 2 => 'scissors'

    if(randomNumber == 0){
        return rock;
    }else if(randomNumber == 1){
        return  paper;
    }else{
        return scissors;
    }
}

function winningLogic(userChoice, computerChoice){
    //There are three conditions each where both computer and user will win

    //User wins
    if(userChoice == rock && computerChoice == scissors){
        return USER;
    }
    else if(userChoice == scissors && computerChoice == paper){
        return USER;
    }
    else if(userChoice == paper && computerChoice == rock){
        return USER;
    }

    //Computer wins
    if(computerChoice == rock && userChoice == scissors){
        return COMPUTER;
    }
    else if(computerChoice == scissors && userChoice == paper){
        return COMPUTER;
    }
    else if(computerChoice == paper && userChoice == rock){
        return COMPUTER;
    }

    else{
        return MATCH_TIE;
    }
}

function updateScoreBoard(winner){
    let userScoreValue = document.getElementById("userScoreVal");
    let computerScoreValue = document.getElementById("compScoreVal");

    if(winner == USER){
        userScoreValue.innerText = ++userScore;
    }
    else if(winner == COMPUTER){
       computerScoreValue.innerText = ++computerScore;
    }
  
}
