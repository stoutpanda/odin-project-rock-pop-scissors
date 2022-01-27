// Rock Paper Scissors

const selection = ["Rock", "Paper", "Scissors"];
const invalidInput = "Not A Valid Selection";

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