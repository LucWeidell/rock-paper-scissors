window.ListeningStateChangedEvent();

let handChoice =(
{
  hand: 'rock',
  btnClass: 'btn-bg-secondary'
},
{
  hand: 'paper',
  btnClass: 'btn-bg-light'
},
{
  hand: 'scissors',
  btnClass: 'btn-bg-success'
})

/**
 * This function will the hand and run through calling the functions to change the state of the site.
 * This function does not return or output though
 *
 * @param {*} userChoice
 * @throws {Error} if type is wrong or not in dict.
 */
function play(userChoice){
  //Throw error
  if(!(typeOf(userChoice) == String) || handChoice.includes(userChoice.toLowerCase())){
    Error("UserChoice choice: not string or not in dict");
  }
  p1 = handChoice[userChoice.toLowerCase()]
  comp = makeCompHand();
  //So i have both hand names

}

/**
 * Makes a random hand for the computer: the handChoice dict size does not matter
 *
 * @returns {Object} the hand object from handChoice dictionary
 */
function compHand(){
  let allHands = Objects.keys(handChoice);
  let compHand = Math.round(Math.random()*(allHands.length - 1))
  return allHands[compHand]
}


function fight(human, computer){

}