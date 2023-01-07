//Declare variables to track Player and Computer scores, ties, and rounds//
let playerScore = 0
let computerScore = 0
let draws = 0
let rounds = 0
//Declare variable for the Computer selection using the getComputerChoice function//
let computerSelection = getComputerChoice()
//Prompt the Player to choose hunter, titan, or warlock. Converts to lowercase.//
let playerSelection = prompt("Hunter, Titan, or Warlock?", "").toLowerCase();
//Declare function to have the Computer's choice randomly select one of the options//
function getComputerChoice() {
    const choices = [`hunter`, `titan`, `warlock`]
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
    if (playerSelection === `hunter` && computerSelection === `titan`) {
        return computerScore++ && prompt("hunter, titan, or warlock?", "")
    } else if (playerSelection === `hunter` && computerSelection === `warlock`) {
        return playerScore++ && prompt("hunter, titan, or warlock?", "")
    } else if (playerSelection === `titan` && computerSelection === `warlock`) {
        return computerScore++ && prompt("hunter, titan, or warlock?", "")
    } else if (playerSelection === `titan` && computerSelection === `hunter`) {
        return playerScore++ && prompt("hunter, titan, or warlock?", "")
    } else if (playerSelection === `warlock` && computerSelection === `titan`) {
        return playerScore++ && prompt("hunter, titan, or warlock?", "")
    } else if (playerSelection === `warlock` && computerSelection === `titan`) {
        return computerScore++ && prompt("hunter, titan, or warlock?", "")
    } else if (playerSelection === computerSelection) {
        return draws++ && prompt("hunter, titan, or warlock?", "")
    } else{
    }
}
console.log(game())

console.log(playRound(playerSelection, computerSelection));