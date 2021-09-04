function randomComputerPlay() { // OK
    let possiblePlays = [`rock`, `paper`, `scissors`]
    let randomNumber = Math.floor(Math.random() * 3);
    return possiblePlays[randomNumber];
}

function gameOver(playerScore, computerScore, roundPlays, roundResult) {
    if (playerScore.innerText == 5 || computerScore.innerText == 5) {
        roundPlays.innerHTML = `<div class="final-score">FINAL SCORE<br>${playerScore.innerText} x ${computerScore.innerText}</div>`
        if (playerScore.innerText == 5) {
            roundResult.innerText = `Congratulations, you win!`;
        } else {
            roundResult.innerText = `You lose!`;
        }
        playerScore.innerText = 0;
        computerScore.innerText = 0;
    }   
}


function playRound(playerSelection, computerSelection) { // OK
    const roundPlays = document.getElementById(`round plays`);
    const roundResult = document.getElementById(`round result`);

    const playerScore = document.getElementById(`player score`);
    const computerScore = document.getElementById(`computer score`);

    roundPlays.innerHTML = `<img src="/imgs/${playerSelection}.png" class="play"></img>
            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
            <img src="/imgs/${computerSelection}.png" class="play"></img>`

    if (playerSelection === `rock`) {
        if (computerSelection === `rock`) {
            roundResult.innerText = `It's a tie! Both players chose rock.`;
            gameOver(playerScore, computerScore, roundPlays, roundResult);
        } else if (computerSelection === `paper`) {
            roundResult.innerText = `You lose! Paper beats rock!`;
            computerScore.innerText = +computerScore.innerText + 1;
            gameOver(playerScore, computerScore, roundPlays, roundResult);
        } else {
            roundResult.innerText = `You win! Rock beats scissors!`;
            playerScore.innerText = +playerScore.innerText + 1;
            gameOver(playerScore, computerScore, roundPlays, roundResult);
        }
    } else if (playerSelection === `paper`) {
        if (computerSelection === `rock`) {
            roundResult.innerText = `You win! Paper beats rock!`;
            playerScore.innerText = +playerScore.innerText + 1;
            gameOver(playerScore, computerScore, roundPlays, roundResult);
        } else if (computerSelection === `paper`) {
            roundResult.innerText = `It's a tie! Both player chose paper.`;
        } else {
            roundResult.innerText = `You lose! Scissors beat rock!`;
            computerScore.innerText = +computerScore.innerText + 1;
            gameOver(playerScore, computerScore, roundPlays, roundResult);
        }
    } else {
        if (computerSelection === `rock`) {
            roundResult.innerText = `You lose! Rock beats scissors!`;
            computerScore.innerText = +computerScore.innerText + 1;
            gameOver(playerScore, computerScore, roundPlays, roundResult);
        } else if (computerSelection === `paper`) {
            roundResult.innerText = `You win! Scissors beat paper!`;
            playerScore.innerText = +playerScore.innerText + 1;
            gameOver(playerScore, computerScore, roundPlays, roundResult);
        } else {
            roundResult.innerText = `It's a tie! Both player chose scissors.`;
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