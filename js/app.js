/*
 * Create a list that holds all of your cards
 */


let toggledCards = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-leaf",
     "fa fa-cube", "fa fa-bicycle", "fa fa-anchor", "fa fa-bomb",
     "fa fa-bolt", "fa fa-diamond", "fa fa-paper-plane-o",
     "fa fa-leaf", "fa fa-cube", "fa fa-bicycle", "fa fa-anchor",
     "fa fa-bomb", "fa fa-bolt"];


let pairedCards = [];

/*
* Display the cards on the page
*   - shuffle the list of cards using the provided "shuffle" method below
*   - loop through each card and create its HTML
*   - add each card's HTML to the page
*/


// Shuffle function from http://stackoverflow.com/a/2450976
   function shuffle(array) {
       var currentIndex = array.length, temporaryValue, randomIndex;

       while (currentIndex !== 0) {
           randomIndex = Math.floor(Math.random() * currentIndex);
           currentIndex -= 1;
           temporaryValue = array[currentIndex];
           array[currentIndex] = array[randomIndex];
           array[randomIndex] = temporaryValue;
       }

       return array;
   }

/* Conditions to ensure :
* only 2 cards can be clicked at once
* user can't click on an already matched card and try to rematch with current card
*/

// Flipping Cards

const cardsContainer = document.querySelector(".deck");
let visibleCards = [];

// Create the Cards

/*
* Initialize designer's code
*/

function clickTarget() {
for(let i = 0; i < toggledCards.length; i++){
  const card = document.createElement("li");
  card.classList.add("card");
  card.innerHTML = `<i class="${toggledCards[i]}"></i>`
  cardsContainer.appendChild(card);

    // Add Click Event to Each Card
    click(card);
  }
}

/*
* Click Event
*/

function click(card) {

  // Card Click Event
  card.addEventListener("click", function() {

    const presentCard = this;
    const priorCard = visibleCards[0];
    beginClock();

    // we have an existing OPENED card
    if (visibleCards.length === 1) {

      card.classList.add("show", "open");
      visibleCards.push(this);

      // we should compare our 2 visible cards!
      matchUp(presentCard, priorCard);


    } else {
    // we don't have any visible cards
      card.classList.add("show", "open");
      visibleCards.push(this);
    }

  });
}

/*
* MatchUp the 2 cards
*/

function matchUp(presentCard, priorCard) {

    // Pairer
    if(presentCard.innerHTML === priorCard.innerHTML) {

      //Matched
      presentCard.classList.add("match");
      priorCard.classList.add("match");

      pairedCards.push(presentCard, priorCard);

      visibleCards = [];

      // If Game is Completed
      gameFinished();
    } else {

      visibleCards[0];

      // wait 500ms then do this!
      setTimeout(function() {
        presentCard.classList.remove("show", "open", "disable");
        priorCard.classList.remove("show", "open", "disable");
        visibleCards = [];
      }, 500);

}

    // Add New Move
    addMove();
 }


/*
* Check if game is finished
*/

function gameFinished() {
  if(pairedCards.length === toggledCards.length){
    alert("GAME OVER!");
  }
}

// Moves & Stars
const movesContainer = document.querySelector(".moves");
let moves = 0;
movesContainer.innerHTML = 0;
function addMove() {
  moves++;
  movesContainer.innerHTML = moves;

  // Set the starRating
  rating();
}

const starsContainer = document.querySelector(".stars");
starsContainer.innerHTML = `<li><i class="fa fa-star"></i></li>
<li><i class="fa fa-star"></i></li>
<li><i class="fa fa-star"></i></li>`;
function rating() {

  if(moves > 18) {
    starsContainer.innerHTML = `<li><i class="fa fa-star"></i></li>
    <li><i class="fa fa-star"></i></li>`;
  } else if(18 > moves > 26) {
    starsContainer.innerHTML = `<li><i class="fa fa-star"></i></li>`;
  }
}

/*
* Clock
*/

let clock = 0;
let totalSeconds = 0;
let clockSeconds = 0;
let clockMinutes = 0;
let clockRunning = false;
const gameClock = document.querySelector('.timer');

function beginClock() {
    clock = setInterval(updateClock, 1000);
}

function updateClock() {
  if (clockSeconds < 10){
      gameClock.innerHTML = `${clockMinutes}:0${clockSeconds}`;
  } else {
    gameClock.innerHTML = `${clockMinutes}:${clockSeconds}`;
  }
    totalSeconds ++;
    if (totalSeconds % 60 === 0) {
        clockMinutes += 1;
  }
    clockSeconds = totalSeconds - clockMinutes * 60;
}

function endClock() {
  clearInterval(clock);
}

/*
* Restart Game
*/

const restartBtn = document.querySelector(".restart");
restartBtn.addEventListener("click", function() {
    shuffle(toggledCards);

    // Delete all cards
    cardsContainer.innerHTML = "";

    // Call `clickTarget` to create new cards
    clickTarget();

    // reset any related variables
    pairedCards = [];
    moves = 0;
    movesContainer.innerHTML = moves;

    // Reset Game Clock
    endClock();
    firstClick = true;
    totalSeconds = 0;
    clockMinutes=0;
    clockSeconds=0;
    gameClock.textContent = `${clockMinutes}:0${clockSeconds}`;

});

function gameOver(){
    matchCard += 1;
    if(matchCard=== 8){
        endClock();
        modalValues();
        displayModal();
    }
}

// Shows the modal after game won
const callModal= document.querySelector('.modal');

// Function to show modal
function displayModal() {
    callModal.style.display='block';
}

// close the modal box
function closeModal() {
    callModal.style.display='none';
}

//function to get current moves,stars and time and update to modal box
function modalValues(){
    const callModalTime = document.querySelector('.modal-time');
    const callModalMoves = document.querySelector('.modal-moves');
    const callModalStar = document.querySelector('.modal-rating') ;

    // sets value to timervalue declared earlier
    callModalTime.textContent= ` You completed the game in ${gameClock.textContent}s`;
    callModalMoves.textContent= ` Your moves: ${moves}`;
    callModalStar.innerHTML= ` With a star rating of: ${starsContainer.innerHTML}`;
}

////////// Start game for first timeout
clickTarget();

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

 if (clockRunning == true) {
   clock = setInterval(updateClock, 1000);
   clockRunning = false;
 }
