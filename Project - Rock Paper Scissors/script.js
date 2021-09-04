function randomComputerPlay() { // OK
    let possiblePlays = [`rock`, `paper`, `scissors`]
    let randomNumber = Math.floor(Math.random() * 3);
    return possiblePlays[randomNumber];
}

function gameOver(playerScore, computerScore, roundPlays, roundResult) {
    if (playerScore.innerText == 5 || computerScore.innerText == 5) {
        // Announce game won or lost, ask if new game
        console.log(`Game over`)
        // Clears score
        playerScore.innerText = 0;
        computerScore.innerText = 0;
        roundPlays.innerHTML = ``;
        roundResult.innerHTML = ``;
    }
}


function playRound(playerSelection, computerSelection) { // OK
    const roundPlays = document.getElementById(`round plays`);
    const roundResult = document.getElementById(`round result`);

    const playerScore = document.getElementById(`player score`);
    const computerScore = document.getElementById(`computer score`);

    roundPlays.innerHTML = `You chose ${playerSelection}. The opponent chose ${computerSelection}.`
    
    if (playerSelection === `rock`) {
        if (computerSelection === `rock`) {
            roundResult.innerHTML = `It's a tie! Both players chose rock.`;
            gameOver(playerScore, computerScore, roundPlays, roundResult);
        } else if (computerSelection === `paper`) {
            roundResult.innerHTML = `You lose! Paper beats rock!`;
            computerScore.innerText = +computerScore.innerText + 1;
            gameOver(playerScore, computerScore, roundPlays, roundResult);
        } else {
            roundResult.innerHTML = `You win! Rock beats scissors!`;
            playerScore.innerText = +playerScore.innerText + 1;
            gameOver(playerScore, computerScore, roundPlays, roundResult);
        }
    } else if (playerSelection === `paper`) {
        if (computerSelection === `rock`) {
            roundResult.innerHTML = `You win! Paper beats rock!`;
            playerScore.innerText = +playerScore.innerText + 1;
            gameOver(playerScore, computerScore, roundPlays, roundResult);
        } else if (computerSelection === `paper`) {
            roundResult.innerHTML = `It's a tie! Both player chose paper.`;
        } else {
            roundResult.innerHTML = `You lose! Scissors beat rock!`;
            computerScore.innerText = +computerScore.innerText + 1;
            gameOver(playerScore, computerScore, roundPlays, roundResult);
        }
    } else {
        if (computerSelection === `rock`) {
            roundResult.innerHTML = `You lose! Rock beats scissors!`;
            computerScore.innerText = +computerScore.innerText + 1;
            gameOver(playerScore, computerScore, roundPlays, roundResult);
        } else if (computerSelection === `paper`) {
            roundResult.innerHTML = `You win! Scissors beat paper!`;
            playerScore.innerText = +playerScore.innerText + 1;
            gameOver(playerScore, computerScore, roundPlays, roundResult);
        } else {
            roundResult.innerHTML = `It's a tie! Both player chose scissors.`;
        }
    }
}


function click() {
    playRound(this.id, randomComputerPlay());
    this.classList.toggle('clicking');
}


function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('clicking');
}


const btns = document.querySelectorAll('.btn');
btns.forEach(btn => btn.addEventListener('click', click))
btns.forEach(btn => btn.addEventListener('transitionend', removeTransition));
