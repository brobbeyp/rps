function getComputerChoice() {
    const index = Math.floor((Math.random() * 3))
    const choices = ['Rock', 'Paper', 'Scissors']
    return choices[index]
}

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase()
    if (player === 'rock') {
        if (computerSelection === 'Rock') {
            return `Tie! Player: Rock, Computer: Rock`
        } else if (computerSelection === 'Paper') {
            return `You lose! Paper beats Rock!`
        } else {
            return `You win! Rock beat Scissors!`
        }
    } else if (player == 'paper') {
        if (computerSelection === 'Rock') {
            return `You win! Paper beats Rock!`
        } else if (computerSelection === 'Paper') {
            return `Tie! Player: Paper, Computer: Paper`
        } else {
            return `You lose! Scissors beat Paper`
        }
    } else if (player === 'scissors') {
        if (computerSelection === 'Rock') {
            return `You lose! Rock beats Scissors`
        } else if (computerSelection === 'Paper') {
            return `You win! Scissors beat Paper!`
        } else {
            return `Tie! Player: Scissors, Computer: Scissors`
        }
    }

}
