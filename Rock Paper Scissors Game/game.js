//----- variable to add score  -------//
const score = JSON.parse(localStorage.getItem('score'));


function resetGame() {
    score.wins = 0;
    score.loss = 0;
    score.ties = 0;
    updateScore();

    // alert('Lets start all over again');
}

//----- Code to pick computer move -------//
function pickComputerMove() {
    const randomMove = Math.random();
    let computerMove = '';

    if (randomMove > 0 && randomMove <= 1 / 3) {
          computerMove = 'Rock'
    } else if (randomMove > 1 / 3 && randomMove < 2 / 3) {
        computerMove = 'Paper'
    } else if (randomMove > 2 / 3 && randomMove < 1) {
        computerMove = 'Scissors'
    }

    return computerMove;
}

document.querySelector('.rockBtn').addEventListener('click', () => {
    playGame('Rock');
});
document.querySelector('.paperBtn').addEventListener('click', () => {
    playGame('Paper');
});
document.querySelector('.scissorsBtn').addEventListener('click', () => {
    playGame('Scissors');
});

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r'){
        playGame('Paper');
    } else if (event.key === 'p'){
        playGame('Paper');
    } else if (event.key === 's') {
        playGame('Scissors');
    }
} );

//----- Code to play and make the the game compare       computer move and player move  ------------------//
function playGame(playerMove) {
    const computerMove = pickComputerMove();
    result = '';

    if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie'
        } else if (computerMove === 'Paper') {
            result = 'Computer wins'
        } else if (computerMove === 'Scissors') {
            result = 'You win'
        }
    }

    else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'You win'
        } else if (computerMove === 'Paper') {
            result = 'Tie'
        } else if (computerMove === 'Scissors') {
            result = 'Computer wins'
        }


    }

    else if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
            result = 'Computer wins'
        } else if (computerMove === 'Paper') {
            result = '  You win'
        } else if (computerMove === 'Scissors') {
            result = 'Tie'
        }
    }
    /*------code to add score-------*/
    if (result === 'You win') {
        score.wins += 1;
    } else if (result === 'Computer wins') {
        score.loss += 1;
    } else if (result === 'Tie') {
        score.ties += 1;
    }

    

    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.choice').innerHTML = `You choose: <img src="images/${playerMove}-emoji.png" alt="" class="move">, Computer choose: <img src="images/${computerMove}-emoji.png" alt="" class="move">`;

    document.querySelector('.decision').innerHTML = `Decision: ${result}`

    updateScore();


    // alert(`You choose: ${playerMove}, Computer choose: ${computerMove} \n Decision: ${result}\n Score-board\n Your score: ${score.wins}. Computer score: ${score.loss}, Draws: ${score.ties}`);

}

function updateScore() {
    document.querySelector('.scoreBoard').innerHTML = `Score-board: Your score: ${score.wins}. Computer score: ${score.loss}, Draws: ${score.ties}`

}