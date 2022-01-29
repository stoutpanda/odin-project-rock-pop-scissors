// Rock Paper Scissors

const selection = ["Rock", "Paper", "Scissors"];
const invalidInput = "Not A Valid Selection";
const modNum = selection.length;




//Computer Selection
function computerPlay() {

    const random = Math.floor(Math.random() * selection.length);
    return selection[random];
}

function playerSelection(playerInput) {

    //take players input, convert to string, downcase string, take char at first position and upcase and rejoin, verify that in selection array
    const stringInput = (typeof (playerInput) === 'string') ? playerInput : (playerInput.toString());
    const lowercaseInput = stringInput.toLowerCase();
    const capitalFirst = lowercaseInput.charAt(0).toUpperCase();
    const normalizedInput = capitalFirst + lowercaseInput.slice(1);

    const verifiedInput = selection.includes(normalizedInput) ? normalizedInput : invalidInput;

    if (verifiedInput !== invalidInput) {
        return verifiedInput;
    }
    else {
        console.log(invalidInput);
    }

}

function playRound(playerInput, computerInput) {

    //check players selection, use position within array as value, subtract and modulous. 0 should be tie, odds loss and evens wins. 

    const playersChoice = playerSelection(playerInput);
    const playersValue = selection.indexOf(playersChoice);
    const computersValue = selection.indexOf(computerInput);
    let response = "You chose " + playersChoice + " & the Computer chose: " + computerInput;

    const result = ((playersValue - computersValue) % modNum);


    //    //debug
    //    console.log(playersChoice + " " + playersValue);
    //    console.log(computerInput + " " + computersValue);
    //    console.log(result);

    if (result === 0) {
        response = "You Tied! " + response;

    }
    else if (result === 1) {
        response = "You Win! " + response;
    }
    else {
        response = "You Loose! " + response;
    }

    return response;

}

function game(numberOfGames) {
    let playerScore = 0;
    let computerScore = 0;
    let ties = 0;

    for (let x = 0; x < numberOfGames; x++) {
        let playerInput = window.prompt("Rock, Paper, or Scissors");
        let computerSelection = computerPlay();
        const response = playRound(playerInput, computerSelection);
        console.log(response);

        if (response.slice(0, 10) === "You Loose!") {
            computerScore++;
        }
        else if (response.slice(0, 8) === "You Win!") {
            playerScore++;
        }
        else {
            ties++;
        }
    }

    const finalScore = "You played: " + numberOfGames + " Final Score: \nPlayer: " + playerScore + " Computer: " + computerScore + " Ties:  " + ties;
    if (playerScore > computerScore) {
        console.log("Congratulations, you WIN!!! " + finalScore);
    }
    else if (computerScore > playerScore) {
        console.log("Sorry, you LOOSE! " + finalScore);
    }
    else {
        console.log("The game was a tie! Play again!" + finalScore);
    }

}


