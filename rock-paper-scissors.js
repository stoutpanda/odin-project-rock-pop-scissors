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


   // Invalid test case: 
   //You Loose! You chose Paper & the Computer chose: Rock
   const playersChoice = playerSelection(playerInput);
   const playersValue = selection.indexOf(playersChoice);
   const computersValue = selection.indexOf(computerInput);
   let response = "You chose " + playersChoice + " & the Computer chose: " + computerInput;
   
   const result = ((playersValue - computersValue) % modNum);
   const resultIsEven = ((result % 2) === 0) ? true : false; 

   console.log(result)

   if(result === 0 ) {
        response = "You Tied! " + response;
   
   }
   else if (resultIsEven) {
       response = "You Win! " + response;
   }
   else {
       response = "You Loose! " + response; 
   }

   return response;

}

