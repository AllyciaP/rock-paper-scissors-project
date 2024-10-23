
// this function selects choice for computer//
function getComputerChoice() {

    //the choice is declared, which will hold the string rock, paper or scissors//
    let choice = "";

    //declares varibale num and holds a random number //
    let num = Math.random();

    // DELETE for debugging //
    console.log(num);

    //choice depends on  number in num variable //
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

function getHumanChoice() {
    let humanChoice = prompt("Choose - Rock, Paper, or Scissors: ");

    console.log(humanChoice);    

    return humanChoice;
}

//function is called and value returned is held in compChoice 
let compChoice = getComputerChoice();

// DELETE:: prints value held in compChoice 
console.log("return of function held in compchoice is --> " + compChoice);

let humChoice = getHumanChoice();

console.log("human choice is -->" + humChoice);