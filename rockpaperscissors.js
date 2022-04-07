function computerPlay() { // return either Rock, Paper, or Scissors randomly
    
    const playArr = [ // create array of three strings: Rock, Paper, and Scissors
        'Rock',
        'Paper',
        'Scissors'
    ];

    // generate random number between 1 and the length of the plays array (3)
    const randomNumber = Math.floor(Math.random()*playArr.length);

    return playArr[randomNumber];
}

let playerInput; 
let compScore;
let playerScore;

function capitalizeFirstLetter(string) { // ensure string is formatted with first letter capitalized and the rest of the letters lower case
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

let playerSelection; // variable to store the formatted player move selection
let computerSelection; // variable to store the computers move from the computerPlay function


function playRound() { // take two parameters (playerSelection and computerSelection) and return string declaring winner of round
    computerSelection = computerPlay(); // run computerPlay function and store the returned result in variable
    playerInput = prompt("Rock, Paper, or Scissors?"); // prompt user for their move selection
    playerSelection = capitalizeFirstLetter(playerInput); // format the user input

    if (playerSelection === computerSelection) // if player and computer have the same move, return a tie and don't increment either score
    {
        return "Tie!";
    }
    else if (playerSelection === "Rock") { // if player selects rock, check against game logic and increment the appropriate score
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


function game() { // function to call the playRound function i number of times, increment player and computer scores, decide the winner and print to console
    compScore = 0;
    playerScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection)); // play 5 rounds of Rock, Paper, Scissors
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

game(); // call game function