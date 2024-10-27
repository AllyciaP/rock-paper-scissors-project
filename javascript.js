
// this function selects choice for computer//
function getComputerChoice() {

    //the choice is declared, which will hold the string rock, paper or scissors
    let choice = "";

    //declares varibale num and holds a random number 
    let num = Math.random();

    // DELETE for debugging 
    console.log(num);

    //choice depends on  number in num variable 
    if (num >= 0 && num < 0.333) {
        choice = "rock";
    }
    else if (num >= 0.333 && num < .6667) {
        choice = "paper";
    } else {
        choice = "scissors";
    }

    //DELETE
    console.log("choice by computer is --> " + choice);

    // choice is saved
    return choice;
}

// this function prompts for player to enter choice, which is then returned 
function getHumanChoice() {
    let humanChoice = prompt("Choose - rock, paper, or scissors: ");

    // DELETE
    console.log(humanChoice);

    return humanChoice;
}

// this function, using player's and computer's choice,
// allows ONE round of game, checking who beats who, then returning the winner
function playRound(humanChoice, computerChoice) {

    let hChoice = humanChoice.toLowerCase();
    let winner = "";

    if (computerChoice === "rock") {
        if (hChoice === "paper") {
            console.log("You Win! Paper beats Rock!");
            winner = "player";
            return winner;
        } else if (hChoice === "scissors") {
            console.log("You Lose! Rock beats Scissors!");
            winner = "computer";
            return winner;
        } else if (hChoice === "rock") {
            console.log("Tie - NO points!");
            winner = "none";
            return winner;
        }
    } else if (computerChoice === "paper") {
        if (hChoice === "rock") {
            console.log("You Lose! Paper beats Rock!");
            winner = "computer";
            return winner;
        } else if (hChoice === "scissors") {
            console.log("You Win! Scissors beat Paper!");
            winner = "player";
            return winner;
        } else if (hChoice === "paper") {
            console.log("Tie - No points!");
            winner = "none";
            return winner;
        }
    } else if (computerChoice === "scissors") {
        if (hChoice === "rock") {
            console.log("You Win! Rock beats Scissors!");
            winner = "player";
            return winner;
        } else if (hChoice === "paper") {
            console.log("You lose! Scissors beat Paper!");
            winner = "computer";
            return winner;
        } else if (hChoice === "scissors") {
            console.log("Tie - No Points!");
            winner = "none";
            return winner;
        }
    }

}

//function is called and value returned is held in compChoice 
let compChoice = getComputerChoice();

// DELETE:: prints value held in compChoice 
console.log("return of function held in compchoice is --> " + compChoice);

//
let humChoice = getHumanChoice();

// DELETE 
console.log("human choice is -->" + humChoice);



// CHANGE
winnerGame = playRound(humChoice, compChoice);


// MOVE
let humanScore = 0;
let computerScore = 0;

if (winnerGame === "player") {
    humanScore = humanScore + 1;
    console.log("player score = " + humanScore + "----> computer score = " + computerScore);
} else if (winnerGame === "computer") {
    computerScore = computerScore + 1; 
    console.log("player score = " + humanScore + "-----> computer score = " + computerScore);
}
