
// this function selects choice for computer//
function getComputerChoice() {

    //the choice is declared, which will hold the string rock, paper or scissors
    let choice = "";

    //declares varibale num and holds a random number 
    let num = Math.random();


    //choice depends on  number in num variable 
    if (num >= 0 && num < 0.333) {
        choice = "rock";
    }
    else if (num >= 0.333 && num < .6667) {
        choice = "paper";
    } else {
        choice = "scissors";
    }


    // choice is saved
    return choice;
}

// this function prompts for player to enter choice, which is then returned 
function getHumanChoice() {
    let humanChoice = prompt("Choose - rock, paper, or scissors: ");

    // the selection entered is saved
    return humanChoice;
}

// this function, using player's and computer's choice,
// allows ONE round of game, checking who beats who, then returning the winner
function playRound(humanChoice, computerChoice) {

    // makes the selection all lower case
    let hChoice = humanChoice.toLowerCase();

    //declares variable to hold the winner: either human or computer
    let winner = "";

    // branch is executed if computer choice is rock
    if (computerChoice === "rock") {

        // computer choice is compared to human choice 
        // branch is executed if comparison is true 
        if (hChoice === "paper") {

            // winner is displayed
            console.log("You Win! Paper beats Rock!");

            // winner is entered into variable
            winner = "player";

            // winner will be returned if comparison is true
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

// this function carries out the game in 5 rounds, showing the final score 
function playGame() {

    // each hold a score
    let humanScore = 0;
    let computerScore = 0;

    // for loop to play  5 rounds of the game 
    for (let round = 1; round <= 5; round++) {

        // this variable holds computer's randdom selection
        let compChoice = getComputerChoice();
        
        // Round is displayed
        console.log("Round: " + round);

        // player's choice is held in this variable after prompt
        let humanChoice = getHumanChoice();

        // a game round is played and the winner is returned and held in this variable 
        let gameWinner = playRound(humanChoice, compChoice);
        
        // score for either player or computer is added here 
        if (gameWinner === "player") {
            humanScore += 1;
        } else if (gameWinner === "computer") {
            computerScore += 1;
        }
    }

    // display of final results 
    console.log("Final Results: Player won " + humanScore + " out of 5 Games\n The Computer won " + computerScore + " out of 5 Games");


    if (humanScore > computerScore) {
        console.log("You Won the Game against the Computer!");
    } else if (computerScore > humanScore) {
        console.log("You Lost the Game against the Computer!");
    } else {
        console.log("Tied Game!");
    }

}

// enables game to be played 
let game = playGame();

