let computerSelection;
let playerSelection;

// play the game!
game();

// computer chooses rock paper or scissors
function computerPlay(){
    let compChoice = Math.floor(Math.random()* 3);
    if (compChoice === 0) {
         return "Rock";
    }
    else if (compChoice === 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

// play a round
function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = prompt("Choose Rock, Paper, or Scissors")

    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if (playerSelection === "ROCK") {
        if (computerSelection === "ROCK"){
            return "tie";
        }
        if (computerSelection === "PAPER"){
            return "lose";
        }
        if (computerSelection === "SCISSORS"){
            return "win";
        }
    }
    if (playerSelection === "PAPER") {
        if (computerSelection === "ROCK"){
            return "win";
        }
        if (computerSelection === "PAPER"){
            return "tie";
        }
        if (computerSelection === "SCISSORS"){
            return "lose";
        }
    }
    if (playerSelection === "SCISSORS") {
        if (computerSelection === "ROCK"){
            return "lose";
        }
        if (computerSelection === "PAPER"){
            return "win";
        }
        if (computerSelection === "SCISSORS"){
            return "tie";
        }
    }
}

// play five rounds
function game (){
    // set all variables to zero
    let wins = losses = ties = 0;
    // loop game five times
    for (let i = 0; i < 5; i++ ){
        let round = playRound(playerSelection, computerSelection);
        switch (round) {
            case "tie":
                ties++;
                console.log("You tied");
                break;
            case "win":
                wins++
                console.log("You win :)");
                break;
            case "lose":
                losses++;
                console.log("You lose :(");
                break;
        }
    }
    // Display the final totals
    console.log("Wins: " + wins + " Losses: " + losses + " Ties: " + ties);
}
