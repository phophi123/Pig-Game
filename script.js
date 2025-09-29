'use strict';

/**
 * # is used to select the id of an html element
 * Selecting score elements to manipulate player scores
 */

const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');

const scoreOne = document.querySelector('#score--0');
const scoreTwo = document.querySelector('#score--1');

const current0E1 = document.getElementById('current--0');
const current0E2 = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

/**
 * Buttons selections
 */
const refreshButton = document.querySelector('.btn--new');
const rollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');

/**
 * function used to switch between players
 * 1.) Updates current player using a ternary condition
 * 2.)//the toggle function is used to dynamically add and remove
 *      classes from an HTMl element
 */
function switchPlayer() {
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    player0EL.classList.toggle(`player--active`)
    player1EL.classList.toggle(`player--active`)
}

let  scores, currentScore, activePlayer, isPlaying;
/**
 * This is a function that is used on page load up and new game reset
 * resets all screen variables to begin the game from scratch
 */
function resetGame() {
    scoreOne.textContent = 0
    scoreTwo.textContent = 0

    current0E1.textContent = 0
    current0E2.textContent = 0

    diceEl.classList.add('hidden')

    player0EL.classList.remove('player--winner')
    player1EL.classList.remove('player--winner')

    player0EL.classList.add('player--active')
    player1EL.classList.remove('player--active')

     scores = [0, 0]
    currentScore = 0;
    activePlayer = 0
    isPlaying = true
}

 resetGame()

/**
 * Reacting to the button click from a user [roll button]
 */
rollButton.addEventListener('click', function () {

    if (isPlaying) {
        //1.) Generating a random number between 1-6
        let dice = Math.trunc(Math.random() * 6 + 1);
        console.log(dice); //remove

        //2.) Display dice
        diceEl.classList.remove('hidden')
        diceEl.src = `dice-${dice}.png`

        //3.) Check if user rolls 1: if true, switch the other player
        if (dice !== 1) {

            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {

            console.log('User rolled a 1'); //remove
            switchPlayer();

        }
    }
})

holdButton.addEventListener('click', function () {

    if (isPlaying) {
        //1. Add current score to active players
        scores[activePlayer] += currentScore;
        //console.log(scores[activePlayer])

        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];

        //2. Check if players score s >= 100
        if (scores[activePlayer] >= 10) {
            document.querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner')

            document.querySelector(`.player--${activePlayer}`)
                .classList.remove('player--active')

            isPlaying = false
            diceEl.classList.add('hidden')

            document.querySelector(`#name--${activePlayer}`).textContent = `Player Wins!🏆`

        } else {
            switchPlayer();
        }
    }
})

//handle button click
//Reset all values of the game

refreshButton.addEventListener('click',   resetGame);