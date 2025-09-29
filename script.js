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

const scores = [0, 0]
let activePlayer = 0

/**
 * Buttons selections
 */
const refreshButton = document.querySelector('.btn--new');
const rollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');

scoreOne.textContent = 0
scoreTwo.textContent = 0
diceEl.classList.add('hidden')

let currentScore = 0

/**
 * Reacting to the button click from a user [roll button]
 */
rollButton.addEventListener('click', function () {

    //1.) Generating a random number between 1-6
    let dice = Math.trunc(Math.random() * 6 + 1);
    console.log(dice); //remove

    //2.) Display dice
    diceEl.classList.remove('hidden')
    diceEl.src = `dice-${dice}.png`

    //3.) Check if user roll 1: if true, switch the other player
    if (dice !== 1) {

        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {

        console.log('User rolled a 1'); //remove
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;

        //Looks for html and switches the sections background color depending on which player is an active player
        player0EL.classList.toggle(`player--active`)
        player1EL.classList.toggle(`player--active`)
    }
})

holdButton.addEventListener('click', function () {
    //1. Add current score to active players
    scores[activePlayer] += currentScore;
    document.getElementById(`current--${activePlayer}`).textContent = scores[activePlayer];

    //2. Check if players score s >= 100
    //Finish game 
})

