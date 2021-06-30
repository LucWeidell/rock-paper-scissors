window.addEventListener('click', ()=> {console.log('clicked')})

let score = [0, 0];
let handChoice =(
{
  hand: 'rock',
  btnClass: 'btn-bg-secondary',
  img: '/assets/rock.jpg',
  wins: 'scissors'
},
{
  hand: 'paper',
  btnClass: 'btn-bg-light',
  img: '/assets/paper.jpg',
  wins: 'rock'
},
{
  hand: 'scissors',
  btnClass: 'btn-bg-success',
  img: '/assets/scissors.jpg',
  wins: 'paper'
})

function drawHands(){
  let template ='';
  //NOTE for:  In loop iterates THROUGH and object keys
  // Object.key(animals) gives array of keys = ['cow', duck' .....]
  for(let key in handChoice){
    let handObj = handChoice[key]
    // make sure single quotes around key in onclick because cow is not 'cow'
    template += `<button class = "btn ${handObj.btnClass}" onClick= "play('${key}')">${key}</button>`

  }
  document.getElementById('buttons').innerHTML = template + `<button class="btn btn-dark mx-1" onclick="play(compHand())">
  Computer chooses. </button>`
}




/**
 * This function will the hand and run through calling the functions to change the state of the site.
 * This function does not return or output though
 *
 * @param {String} userChoice
 * @throws {Error} if type is wrong or not in dict.
 */
function play(userChoice){
  // //This if covers if the user hits the let computer decide the hand
  // if((typeOf(userChoice) == Object) && (handChoice.includes(userChoice.hand))){
  //   userChoice = userChoice.hand
  // }

  //Throw error if input is bad
  if(!(typeOf(userChoice) == String) || !(handChoice.includes(userChoice.toLowerCase()))){
    Error("UserChoice choice: not string or not in dict");
  }
  p1 = handChoice[userChoice.toLowerCase()]
  comp = handChoice[makeCompHand()];
  //So i have both hand names
  //Now Fight:

  //Who won:
  //If tie: draw and end play
  if(p1==comp){
    drawTie();
    break;
  }
  if(isHumWin(p1, comp)){
    drawHumanWin();
    updateScore(true);

  } else {
    drawCompWin()
    updateScore(false)
  }
  updateScore();
}

/**
 * Makes a random hand for the computer: the handChoice dict size does not matter
 *
 * @returns {String} the hand name from handChoice dictionary
 */
function compHand(){
  let allHands = Objects.keys(handChoice);
  let compHand = Math.round(Math.random()*(allHands.length - 1))
  return allHands[compHand]
}

/**
 * This function takes both player hands and draws the fight of the two hands.
 * Draws human hand reflected so they point at each other
 *
 * @param {Object} human this is the hand for the player: object from dict.
 * @param {Object} computer this is the hand for the computer: object from dict.
 */
function fight(human, computer){

}

/**
 * This is a comparator that determines who one.
 *
 * @param {Object} human human hand
 * @param {Object} computer computer hand
 * @returns {boolean} true if human wins, false otherwise
 */
function isHumWin(human, computer){
  humWinCondit = human.wins;
  switch(computer.hand){
    case drawHumanWin:
      return true;
    case human.hand:
      return false;
  }
  return result;
}

/**
 * This function draws the victory for human
 */
function drawHumanWin(){
  document.getElementById('winner').innerHTML =
  `<img class= "w-75" src="${humanWin.img}" id ="animal-pic" alt="humanWin">`
}

/**
 * This function draws the victory for human
 */
function drawCompWin(){

}

/**
 * Updates the score variable depending on who won
 *
 * @param {Boolean} flag True if player wins, false computer won
 */
function updateScore(flag){
  if(updateScore){
    score=[(score[0]+1), score[1]];
  } else {
    score= [score[0], (score[1]+1)];
  }
}

/**
 * Draws the new score on the nav bar
 */
function drawScore(){
  document.getElementById('score').innerText = `Human vs Computer: ${score[0]} to ${score[1]}!`
}

drawHands();