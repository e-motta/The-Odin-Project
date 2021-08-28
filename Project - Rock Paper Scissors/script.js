function randomComputerPlay() {
    let possiblePlays = [`rock`, `paper`, `scissors`]
    let randomNumber = Math.floor(Math.random() * 3);
    return possiblePlays[randomNumber];
}


function userPlay() {
    let input = prompt("Choose Rock, Paper or Scissors").toLowerCase();
    if (input !== `rock` && input !== `paper` && input !== `scissors`) {
        alert(`Invalid entry, try again`);
        return userPlay();
    } else {
        return input;
    }
}


// Return array with two strings: [string (e.g. "You Lose! Paper beats Rock"), string ("win", "loss", or "tie")]
// Second string will be used to tally up the score
function playRound(playerSelection, computerSelection) {
    if (playerSelection === `rock`) {
        if (computerSelection === `rock`) {
            return ["It's a tie! Both players chose rock", "tie"];
        } else if (computerSelection === `paper`) {
            return ["You lose! Paper beats rock", "loss"];
        } else {
            return ["You win! Rock beats scissors", "win"];
        }
    } else if (playerSelection === `paper`) {
        if (computerSelection === `rock`) {
            return ["You win! Paper beats rock", "win"];
        } else if (computerSelection === `paper`) {
            return ["It's a tie! Both player chose paper", "tie"];
        } else {
            return ["You lose! Scissors beat rock!", "loss"];
        }
    } else {
        if (computerSelection === `rock`) {
            return ["You lose! Rock beats scissors", "loss"];
        } else if (computerSelection === `paper`) {
            return ["You win! Scissors beat paper", "win"];
        } else {
            return ["It's a tie! Both player chose scissors", "tie"];
        }
    }
}


// Play a five-round game, keep score, report winner/loser
function game() {
    let roundWins = 0;
    let roundLosses = 0;
    let roundTies = 0;
    for (i = 0; i < 5; i++) {
        let [message, result] = playRound(userPlay(), randomComputerPlay());
        if (result === "win") {
            roundWins++;
        } else if (result === "loss") {
            roundLosses++;
        } else {
            roundTies++;
        }
        console.log(message);
    }
    let score = `Wins: ${roundWins}, Losses: ${roundLosses}, Ties: ${roundTies}`
    if (roundWins > roundLosses) {
        console.log(`Conratulations, you win the game! ${score}`);
    } else if (roundWins < roundLosses) {
        console.log(`Unfortunately you lost the game. ${score}`)
    } else {
        console.log(`The game is a tie! ${score}`)
    }
}
