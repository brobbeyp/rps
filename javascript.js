function getComputerChoice() {
    const index = Math.floor((Math.random() * 3));
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[index]
}

function playRound(playerSelection, computerSelection) {
    
    const player = playerSelection.toLowerCase();
    if (player === 'rock') {
        if (computerSelection === 'Rock') {
            console.log(`Tie! Player: Rock, Computer: Rock`); 
            return 0
        } else if (computerSelection === 'Paper') {
            console.log(`You lose! Paper beats Rock!`);
            return -1
        } else {
            console.log(`You win! Rock beat Scissors!`);
            return 1
        }
    } else if (player == 'paper') {
        if (computerSelection === 'Rock') {
            console.log(`You win! Paper beats Rock!`);
            return 1
        } else if (computerSelection === 'Paper') {
            console.log(`Tie! Player: Paper, Computer: Paper`);
            return 0
        } else {
            console.log(`You lose! Scissors beat Paper`);
            return -1
        }
    } else if (player === 'scissors') {
        if (computerSelection === 'Rock') {
            console.log(`You lose! Rock beats Scissors`);
            return -1
        } else if (computerSelection === 'Paper') {
            console.log(`You win! Scissors beat Paper!`);
            return 1
        } else {
            console.log(`Tie! Player: Scissors, Computer: Scissors`)
            return 0
        }
    }

}

function playGame(roundResult) {
    if (roundResult === 1) {
        ++p1;
        console.log(`Player Wins! Score - Player: ${p1}, Computer: ${p2}`);
    } else if (roundResult === -1) {
        ++p2;
        console.log(`Computer Wins! Score - Player: ${p1}, Computer: ${p2}`);
    } else {
        console.log(`Tie! Score - Player: ${p1}, Computer: ${p2}`)
    };
};

let p1 = 0;
let p2 = 0;
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');


rock.addEventListener('click', (e) => {
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const result = playGame(playRound(playerChoice,computerChoice));
});
