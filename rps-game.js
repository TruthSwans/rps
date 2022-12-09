//Declare variables to track Player and Computer scores, ties, and rounds//
let playerScore = 0
let computerScore = 0
let draws = 0
let rounds = 0
//Declare variable for the Computer selection using the getComputerChoice function//
let computerSelection = getComputerChoice()
//Prompt the Player to choose rock, paper, or scissors//
let playerSelection = prompt("Rock, Paper, or Scissors?", "")
//Declare function to have the Computer's choice randomly select one of the options//
function getComputerChoice() {
    const choices = [`rock`, `paper`, `scissors`]
    let selection = choices[Math.floor(Math.random()* choices.length)]
    return selection
  }
//Declare a function called game to play until someone reaches 5 wins or ends in a tie//
  function game() {
    //Create loop to play 5 rounds. Log the score after each round//
    for (let i = 0; rounds < 5; i++) {
    playRound(playerSelection, computerSelection= getComputerChoice())
    console.log(`Player: ${playerScore} Computer: ${computerScore} Draws: ${draws} Rounds: ${rounds}`)
    

    //Play until Player or Computer reaches 5 round wins or 5 round ties//
    if (playerScore === 5) {
        return `You win!`
        } else if (computerScore === 5) {
        return `You lose!`
        } else if (draws === 5) {
        return `Tie!` 
         }
    }
}
//Declare function to play a round of Rock, Paper, Scissors//
function playRound(playerSelection, computerSelection) {
    //After each round, prompt the Player to choose again. Return +1 to winner of each round//
    if (playerSelection === `rock` && computerSelection === `paper`) {
        return computerScore++ && prompt("Rock, Paper, or Scissors?", "")
    } else if (playerSelection === `rock` && computerSelection === `scissors`) {
        return playerScore++ && prompt("Rock, Paper, or Scissors?", "")
    } else if (playerSelection === `paper` && computerSelection === `scissors`) {
        return computerScore++ && prompt("Rock, Paper, or Scissors?", "")
    } else if (playerSelection === `paper` && computerSelection === `rock`) {
        return playerScore++ && prompt("Rock, Paper, or Scissors?", "")
    } else if (playerSelection === `scissors` && computerSelection === `paper`) {
        return playerScore++ && prompt("Rock, Paper, or Scissors?", "")
    } else if (playerSelection === `scissors` && computerSelection === `rock`) {
        return computerScore++ && prompt("Rock, Paper, or Scissors?", "")
    } else if (playerSelection === computerSelection) {
        return draws++ && prompt("Rock, Paper, or Scissors?", "")
    }     
}

console.log(game())

console.log(playRound(playerSelection, computerSelection));