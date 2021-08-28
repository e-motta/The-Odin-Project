// Function computerPlay: randomly return Rock, Paper, or Scissors
// 1. Generate random number between 1 and 3
// 2. Conditions: 1 = Rock; 2 = Paper; 3 = Scissors
// 3. Return the corresopnding string
function computerPlay() {
    let possiblePlays = [`rock`, `paper`, `scissors`]
    let randomNumber = Math.floor(Math.random() * 3);
    return possiblePlays[randomNumber];
}


// Function userPlay: return user play
// Make sure the play is valid; if invalid, try again
function userPlay() {
    let input = prompt("Choose Rock, Paper or Scissors").toLowerCase();
    if (input !== `rock` && input !== `paper` && input !== `scissors`) {
        alert(`Invalid entry, try again`);
        return userPlay();
    } else {
        return input;
    }
}


// Function playRound: return string declaring winner/loser
// Two parameters: playerSelection, computerSelection
// Case insensitive
// 1. Conditions:
//    if player == Rock
//      if computer == Rock: tie
//      if computer == Paper: loss
//      if computer == Scissors: win
//      ...
// 2. Return string (e.g. "You Lose! Paper beats Rock"), string (win, loss, tie)
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


// Function game: play a five-round game, keep score, report winner/loser
// 1. Instantiate variables roundWins = 0, roundLosses = 0, roundTies = 0
// 2. Loop five times:
//    Get input from user (Rock, Paper, Scissors), make it lowercase, assign it to variable userPlay
//    Call function computerPlay, assign it to variable compPlay
//    Call function playRound, print first value, assign second value to variable win
//    Log roundWins, roundLosses and roundTies (if result === win, roundWins++; else if result === loss roundLosses++ ...)
// 3. Print winner and players wins, losses, ties
function game() {
    let roundWins = 0;
    let roundLosses = 0;
    let roundTies = 0;
    for (i = 0; i < 5; i++) {
        let [message, result] = playRound(userPlay(), computerPlay());
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
