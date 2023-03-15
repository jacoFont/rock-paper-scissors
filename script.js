function getComputerChoice() {
    let numbers = [0,1,2];
    let randomChoice = numbers[Math.floor(Math.random()*numbers.length)];
    switch (randomChoice) {
        case 0:  return "Rock";
        case 1:  return "Paper";
        case 2:  return "Scissors";
        default: return "Error";
    }
}

function playRound(playerSelection,computerSelection) {
    let result;
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
            result= "Even!";
    }
    else if((playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER") ||
        (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK") ||
        (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS")) {
            result= "You lost!";
        }
    else {
            result= "You won!";
    }
    return result+` You selected ${playerSelection} and CPU selected ${computerSelection}!`;

}