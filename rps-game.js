let rps = [
    "Rock",
    "Paper",
    "Scissors",
];

let rpsRandom = rps[Math.floor(Math.random() * rps.length)];

function getComputerChoice (){
    return rpsRandom;
}

console.log(getComputerChoice());