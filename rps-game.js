//Declare variable for rock, paper, scissors//
let rps = ["Rock","Paper","Scissors",];
//Declare variable to randomly choose one of the three//
let rpsRandom = rps[Math.floor(Math.random() * rps.length)];
//Declare variable to assign that random selection to the Computer choice to display on the page//
const computerSelection = getComputerChoice();
//Call a function that returns the random selection and assigns the selection as the Computer choice//
function getComputerChoice (){
    let computerRPS = rpsRandom.toLowerCase();
    return computerRPS;
}

console.log(getComputerChoice());

let playerSelection = prompt("Rock, Paper, Scissors?").toLowerCase();

console.log(playerSelection);

//Write a function that plays a single round of the game.//
function playRound(){
    if (playerSelection === computerSelection){
        return alert("It's a tie! Try again.");
    } else if (playerSelection == "rock" && computerSelection === "paper"){
        return alert("Paper beats Rock. You lose :(");
    } else if (playerSelection == "paper" && computerSelection === "rock"){
        return alert("Rock beats Paper. You lose :(");
    } else if (playerSelection == "scissors" && computerSelection === "rock"){
        return alert("Rock beats Scissors. You lose :(");
    } else if (playerSelection == "rock" && computerSelection === "scissors"){
        return alert("Rock beats Scissors. You win!");
    } else if (playerSelection == "paper" && computerSelection === "scissors"){
        return alert("Scissors beat Paper. You lose :(");
    } else if (playerSelection == "scissors" && computerSelection === "paper"){
        return alert("Scissors beat Paper. You win!");
    } else
        return alert("you made a spelling mistake!!!");
}
playRound();