let playerScore = 0
let computerScore = 0
let draws = 0
let rounds = 0

let computerSelection = getComputerChoice()

let playerSelection = prompt("Rock, Paper, or Scissors?", "")

function getComputerChoice() {
    // your code here!
    const choices = [`rock`, `paper`, `scissors`]
    let selection = choices[Math.floor(Math.random()*3)]
    return selection
  
  }

  function game() {

    for (let i = 0; rounds < 5; i++) {
    playRound(playerSelection, computerSelection= getComputerChoice())
    console.log(`Player: ${playerScore} Computer: ${computerScore} Draws: ${draws} Rounds: ${rounds}`)
    


    if (playerScore === 5) {
        return `You win!`
        } else if (computerScore === 5) {
        return `You lose!`
        } else if (draws === 5) {
        return `Tie!`
         }
        
        
    }
}

function playRound(playerSelection, computerSelection) {

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