function randomComputerPlay() { // OK
    let possiblePlays = [`rock`, `paper`, `scissors`]
    let randomNumber = Math.floor(Math.random() * 3);
    return possiblePlays[randomNumber];
}


// NOT NECESSARY FOR UI, DELETE LATER

// function userPlay() {
//     let input = prompt(`Choose Rock, Paper or Scissors`).toLowerCase();
//     if (input !== `rock` && input !== `paper` && input !== `scissors`) {
//         alert(`Invalid entry, try again`);
//         return userPlay();
//     } else {
//         return input;
//     }
// }


// Return array: [string (e.g. "You Lose! Paper beats Rock"), string ("win", "loss", or "tie")]
// Second string will be used to tally up the score when playing the game
function playRound(playerSelection, computerSelection) { // OK
    const runningScore = document.getElementById("running score");
    if (playerSelection === `rock`) {
        if (computerSelection === `rock`) {
            runningScore.innerHTML = `It's a tie! Both players chose rock`;
            return [`It's a tie! Both players chose rock`, `tie`];
        } else if (computerSelection === `paper`) {
            runningScore.innerHTML = `You lose! Paper beats rock`
            return [`You lose! Paper beats rock`, `loss`];
        } else {
            runningScore.innerHTML = `You win! Rock beats scissors`
            return [`You win! Rock beats scissors`, `win`];
        }
    } else if (playerSelection === `paper`) {
        if (computerSelection === `rock`) {
            runningScore.innerHTML = `You win! Paper beats rock`
            return [`You win! Paper beats rock`, `win`];
        } else if (computerSelection === `paper`) {
            runningScore.innerHTML = `It's a tie! Both player chose paper`
            return [`It's a tie! Both player chose paper`, `tie`];
        } else {
            runningScore.innerHTML = `You lose! Scissors beat rock!`
            return [`You lose! Scissors beat rock!`, `loss`];
        }
    } else {
        if (computerSelection === `rock`) {
            runningScore.innerHTML = `You lose! Rock beats scissors`
            return [`You lose! Rock beats scissors`, `loss`];
        } else if (computerSelection === `paper`) {
            runningScore.innerHTML = `You win! Scissors beat paper`
            return [`You win! Scissors beat paper`, `win`];
        } else {
            runningScore.innerHTML = `It's a tie! Both player chose scissors`
            return [`It's a tie! Both player chose scissors`, `tie`];
        }
    }
}


// Play a five-round game, keep score, report winner/loser
// function game() {
//     let roundWins = 0;
//     let roundLosses = 0;
//     let roundTies = 0;
//     for (i = 0; i < 5; i++) {
//         let [message, result] = playRound(userPlay(), randomComputerPlay());
//         console.log(message);
//         if (result === `win`) {
//             roundWins++;
//         } else if (result === `loss`) {
//             roundLosses++;
//         } else {
//             roundTies++;
//         }
//     }
//     let score = `Wins: ${roundWins}, Losses: ${roundLosses}, Ties: ${roundTies}`
//     if (roundWins > roundLosses) {
//         console.log(`Conratulations, you win the game! ${score}`);
//     } else if (roundWins < roundLosses) {
//         console.log(`Unfortunately you lost the game. ${score}`)
//     } else {
//         console.log(`The game is a tie! ${score}`)
//     }
// }


// function  {

// }

function click (e) {
    playRound(e.path[0].id, randomComputerPlay());
    const btn = e.path[0];
    btn.classList.toggle('clicking');
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('clicking');
}

const btns = document.querySelectorAll('.btn');
btns.forEach(btn => btn.addEventListener('click', click))
btns.forEach(btn => btn.addEventListener('transitionend', removeTransition));
