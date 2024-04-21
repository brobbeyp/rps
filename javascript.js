function getComputerChoice() {
    const index = Math.floor((Math.random() * 3));
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[index]
};

function createRoundPara (text) {
    let roundPara = document.createElement('p');
    roundPara.textContent = text;
    results.appendChild(roundPara);
};

function playRound(playerSelection, computerSelection) {

    
    const player = playerSelection.toLowerCase();
    if (player === 'rock') {
        if (computerSelection === 'Rock') {
            let roundText = (`Tie! Player: Rock, Computer: Rock`);
            createRoundPara(roundText);

            return 0
        } else if (computerSelection === 'Paper') {
            let roundText = (`You lose! Paper beats Rock!`);
            createRoundPara(roundText);

            return -1
        } else {
            let roundText = (`You win! Rock beat Scissors!`);
            createRoundPara(roundText);
            
            return 1
        }
    } else if (player == 'paper') {
        if (computerSelection === 'Rock') {
            let roundText = (`You win! Paper beats Rock!`);
            createRoundPara(roundText);

            return 1
        } else if (computerSelection === 'Paper') {
            let roundText = (`Tie! Player: Paper, Computer: Paper`);
            createRoundPara(roundText);

            return 0
        } else {
            let roundText = (`You lose! Scissors beat Paper`);
            createRoundPara(roundText);

            return -1
        }
    } else if (player === 'scissors') {
        if (computerSelection === 'Rock') {
            let roundText = (`You lose! Rock beats Scissors`);
            createRoundPara(roundText);

            return -1
        } else if (computerSelection === 'Paper') {
            let roundText = (`You win! Scissors beat Paper!`);
            createRoundPara(roundText);

            return 1
        } else {
            let roundText = (`Tie! Player: Scissors, Computer: Scissors`);
            createRoundPara(roundText);

            return 0;
        }
    }

}
function isGameOver () {
    return (playerScore + computerScore === 5);
};

function endGame () {
    if (isGameOver()) {
        if (playerScore > computerScore) {
            let gameOver = `GAME OVER Player WINS! Player: ${playerScore},
                            Computer: ${computerScore}`;
            createRoundPara(gameOver);
        } else {
            let gameOver = `GAME OVER Computer WINS! Player: ${playerScore},
                            Computer: ${computerScore}`;
            createRoundPara(gameOver);
        };
        rock.disabled = true;
        scissors.disabled = true;
        paper.disabled = true;
    }
}

function playGame(roundResult) {
    if (roundResult === 1) {
        ++playerScore;

        const textContent = (`Player Wins! Score - Player: ${playerScore},
                             Computer: ${computerScore}`);
        createRoundPara(textContent);
        endGame();

    } else if (roundResult === -1) {
        ++computerScore;

        const textContent = (`Computer Wins! Score - Player: ${playerScore},
                            Computer: ${computerScore}`);
        createRoundPara(textContent);
        endGame();

    } else {
        const textContent = (`Tie! Score - Player: ${playerScore},
                             Computer: ${computerScore}`)
        createRoundPara(textContent);
        endGame();

    };
};

let playerScore = 0;
let computerScore = 0;
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const results = document.querySelector('#results')
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const playerChoice = e.target.id;
        const computerChoice = getComputerChoice();
        const result = playGame(playRound(playerChoice,computerChoice));
    })
})



