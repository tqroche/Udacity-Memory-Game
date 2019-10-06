/*
 * Create a list that holds all of your cards
 */


let toggledCards = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-leaf",
     "fa fa-cube", "fa fa-bicycle", "fa fa-anchor", "fa fa-bomb",
     "fa fa-bolt", "fa fa-diamond", "fa fa-paper-plane-o",
     "fa fa-leaf", "fa fa-cube", "fa fa-bicycle", "fa fa-anchor",
     "fa fa-bomb", "fa fa-bolt"];


const deck = document.querySelector('.deck');
let firstClick = true;


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


// Sets up event listener for a  card using event delegation
   deck.addEventListener('click', event=> {
       const clicked = event.target;

/* Conditions to ensure :
* only 2 cards can be clicked at once
* user can't click on an already matched card and try to rematch with current card
*/

function isClickValid(clickTarget) {
  return (
   if (clicked.classList.contains('card') &&
       !clicked.classList.contains('match')  &&
       visibleIcon.length < 2 &&
       !visibleIcon.includes(clickTarget) {
       if(firstClick) {
           startTimer();
           firstClick = false;
       }

       //checks if cards matched
       if (visibleIcon.length === 2) {
       }
   }
});

function showCard(card){
       card.classList.add('show','open');
   }

function pushCard(card){
       visibleIcon.push(card);
   }


// Matching Cards

// Shuffling Decks

function shuffleDeck(){
  const cardsToShuffle = Array.from(document.querySelectorAll('.deck li'));
  const shuffledCards = shuffle(cardsToShuffle);
  for (card of shuffledCards){
    deck.appendChild(card);
  }
}

shuffleDeck();

// Moves & Stars



// Clock's Functionality

// Game Winner's Modal

// Resetting Game
