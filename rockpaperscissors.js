function computerPlay() { // return either Rock, Paper, or Scissors randomly
    // create array of three strings: Rock, Paper, and Scissors
    const playArr = [
        'Rock',
        'Paper',
        'Scissors'
    ];

    // generate random number between 1 and the length of the plays array (3)
    const randomNumber = Math.floor(Math.random()*playArr.length);

    return playArr[randomNumber];
}

const playerInput = "ROCK";
let compScore;
let playerScore;

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

const playerSelection = capitalizeFirstLetter(playerInput);
let computerSelection;


function playRound() { // take two parameters (playerSelection and computerSelection) and return string declaring winner of round
    // logic to decide which play beats other plays
    computerSelection = computerPlay();
    if (playerSelection === computerSelection)
    {
        return "Tie!";
    }
    else if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            playerScore ++;
            return "You Win. Rock beats Scissors";
        } else {
            compScore++;
            return "You Lose. Paper beats Rock";
        }
    }
    else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            playerScore ++;
            return "You Win. Paper beats Rock.";
        } else {
            compScore ++;
            return "You Lose. Scissors beats Paper.";
        }
    }
    else if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {
            playerScore ++;
            return "You Win. Scissors beats Paper";
        } else {
            compScore ++;
            return "You Lose. Rock beats Scissors";
        }
    }
}


function game() {
    compScore = 0;
    playerScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
    }

    console.log("Your score is: " + playerScore);
    console.log("The computer's score is: " + compScore);

    if (playerScore > compScore) {
        console.log("Congratulations, you win!");
    }
    else if (compScore > playerScore) {
        console.log("Sorry, you lose.");
    }
    else {
        console.log("Tie!");
    }
}

game();