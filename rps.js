let choices = ['rock', 'paper', 'scissors'];
let index = 0;
let playerScore = 0;
let computerScore = 0;

console.log(playGame());

function getComputerChoice(){
    let computerChoice = choices[Math.floor(Math.random()*3)];
    return computerChoice;
}

function playRound(computerSelection, playerSelection){
    //computerSelection = getComputerChoice();
    //playerSelection = choices[index];
    console.log('computer choice: ' + computerSelection);
    console.log('player choice: ' + playerSelection);
    if(computerSelection === playerSelection){
        console.log('TIE');
        console.log(`Computer: ${computerScore}, Player: ${playerScore}`);
    }else if(computerSelection === choices[2] && playerSelection === choices[0]){
        console.log('Player Wins, Rock beats Scissors');
        playerScore++;
        console.log(`Computer: ${computerScore}, Player: ${playerScore}`);
    }else if(computerSelection === choices[0] && playerSelection === choices[2]){
        console.log('Computer Wins, Rock beats Scissors');
        computerScore++;
        console.log(`Computer: ${computerScore}, Player: ${playerScore}`);
    }else if(computerSelection === choices[index+1]){
        console.log(`Computer Wins, ${computerSelection} beats ${playerSelection}`);
        computerScore++;
        console.log(`Computer: ${computerScore}, Player: ${playerScore}`);
    }else if(computerSelection === choices[index-1]){
        console.log(`Player Wins, ${playerSelection} beats ${computerSelection}`);
        playerScore++;
        console.log(`Computer: ${computerScore}, Player: ${playerScore}`);
    }
}

function playGame(){
    for(let i = 0; i < 5; i++){
        let playerChoice = prompt("Enter your choice here: ");
        playerChoice = playerChoice.toLowerCase();
        if(playerChoice === 'rock') {
            index = 0;
            playerChoice = choices[index];
            console.log(playRound(getComputerChoice(),playerChoice));
        }else if(playerChoice === 'paper'){
            index = 1;
            playerChoice = choices[index];
            console.log(playRound(getComputerChoice(),playerChoice));
        }else if(playerChoice === 'scissor' || playerChoice === 'scissors'){
            index = 2;
            playerChoice = choices[index];
            console.log(playRound(getComputerChoice(),playerChoice));
        }else {
            console.log('Not a valid choice');
        }
    }
    if(playerScore > computerScore){
        console.log(`PLAYER WINS: Final Score\nComputer: ${computerScore}, Player: ${playerScore}`);
    }else if(computerScore > playerScore){
        console.log(`COMPUTER WINS: Final Score\nComputer: ${computerScore}, Player: ${playerScore}`);
    }else {
        console.log(`TIE: Final Score\nComputer: ${computerScore}, Player: ${playerScore}`);
    }
}