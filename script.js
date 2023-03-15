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