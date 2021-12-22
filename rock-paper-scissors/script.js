const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', playRound));

const results = document.querySelector('.results');

const scoreboard = document.querySelector('.scoreboard');

let playerWins = computerWins = ties = 0;

function playRound (e) {
    const playerSelection = this.getAttribute('type').toUpperCase();
    const computerSelection = computerPlay().toUpperCase();

    if (playerSelection === "ROCK") {
        if (computerSelection === "ROCK"){
            keepScore("tie");
            results.textContent = 'You both chose rock';
        }
        if (computerSelection === "PAPER"){
            results.textContent = 'You lost';
            keepScore("lose");
        }
        if (computerSelection === "SCISSORS"){
            results.textContent = 'You won';
            keepScore("win");
        }
    }
    if (playerSelection === "PAPER") {
        if (computerSelection === "ROCK"){
            results.textContent = 'You won';
            keepScore("win");
        }
        if (computerSelection === "PAPER"){
            keepScore("tie");
            results.textContent = 'You both chose paper';
        }
        if (computerSelection === "SCISSORS"){
            results.textContent = 'You lost';
            keepScore("lose");
        }
    }
    if (playerSelection === "SCISSORS") {
        if (computerSelection === "ROCK"){
            results.textContent = 'You lost';
            keepScore("lose");
        }
        if (computerSelection === "PAPER"){
            results.textContent = 'You won';
            keepScore("win");
        }
        if (computerSelection === "SCISSORS"){
            keepScore("tie");
            results.textContent = 'You both chose scissors';
        }
    }
}

// computer chooses rock paper or scissors
function computerPlay() {
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

function keepScore(result) {
    if (result === "win"){
        playerWins++;
    }
    if (result === "lose") {
        computerWins++;
    }
    if (result === "tie") {
        ties++;
    }

    if (computerWins > 4) {
        results.textContent = 'The computer won five times! New game';
        playerWins = computerWins = ties = 0
    }
    if (playerWins > 4 ) {
        results.textContent = 'You won five times! New game.';
        playerWins = computerWins = ties = 0
    }

    scoreboard.textContent = "You: " + playerWins + " Computer: " + computerWins + " Ties: " + ties;

}