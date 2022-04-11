function computerPlay() { // return either Rock, Paper, or Scissors randomly
    const playArr = [ // create array of three strings: Rock, Paper, and Scissors
        'rock',
        'paper',
        'scissors'
    ];
    // generate random number between 1 and the length of the plays array (3)
    const randomNumber = Math.floor(Math.random()*playArr.length);
    return playArr[randomNumber];
}

let playerInput; 
let compScore = 0;
let playerScore = 0;
let round = 0;
let playerSelection; // variable to store the formatted player move selection
let computerSelection; // variable to store the computers move from the computerPlay function


function playRound() { // take two parameters (playerSelection and computerSelection) and return string declaring winner of round
    computerSelection = computerPlay(); // run computerPlay function and store the returned result in variable
    // playerInput = prompt("Rock, Paper, or Scissors?"); // prompt user for their move selection
    // playerSelection = playerInput.toLowerCase(); // format the user input

    if (playerSelection === computerSelection) // if player and computer have the same move, return a tie and don't increment either score
    {
        results.textContent = `Computer picks ${computerSelection}, Tie!`;
    }
    else if (playerSelection === "rock") { // if player selects rock, check against game logic and increment the appropriate score
        if (computerSelection === "scissors") {
            playerScore ++;
            results.textContent = "You win this round. Rock beats scissors";
        } else {
            compScore++;
            results.textContent = "You lose this round. Paper beats rock";
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore ++;
            results.textContent = "You win. Paper beats rock.";
        } else {
            compScore ++;
            results.textContent = "You lose. Scissors beats paper.";
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            playerScore ++;
            results.textContent = "You win. Scissors beats paper";
        } else {
            compScore ++;
            results.textContent = "You lose. Rock beats scissors";
        }
    }
    round ++;
    gameScore.textContent = `Round ${round} Computer: ${compScore} Your Score: ${playerScore}`;
    if (round > 4) {
        endGame();
    }
    
}

function endGame() { // function to call the playRound function i number of times, increment player and computer scores, decide the winner and print to console
    playButtons.style.display = 'none';
    
    console.log("Your score is: " + playerScore);
    console.log("The computer's score is: " + compScore);

    if (playerScore > compScore) {
        finalResults.textContent = "Congratulations, you win!";
    }
    else if (compScore > playerScore) {
        finalResults.textContent = "Sorry, you lose the game.";
    }
    else {
        finalResults.textContent = "Tie!";
    }
}

const gameScore = document.querySelector('#gameScore');
const playButtons = document.querySelector('#playButtons');
const finalResults = document.querySelector('#finalResults');
const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', () => {
    playerSelection = "rock"; // record Rock user play selection
    playRound();
});

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', () => {
    playerSelection = "paper"; // record Paper user play selection
    playRound();
});

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', () => {
    playerSelection = "scissors";// record Scissors user play selection
    playRound();
});

const results = document.querySelector('#results');


// game(); // call game function