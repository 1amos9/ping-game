'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current1El = document.querySelector('#current--0');
const current2El = document.querySelector('#current--1');
const player1El = document.querySelector('.player--1');
const player0El = document.querySelector('.player--0');
const player = document.querySelector('.player');

score0El.textContent = 0;
score1El.textContent = 0;

let currentScore = 0;
let activatePlayer = 0;
const scores = [0, 0];
let playing = true;

const switchPlayer = () => {
  document.getElementById(`current--${activatePlayer}`).textContent = 0;
  activatePlayer = activatePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player1El.classList.toggle('player--active');
  player0El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', () => {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activatePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', () => {
  if (playing) {
    scores[activatePlayer] += currentScore;
    document.getElementById(`score--${activatePlayer}`).textContent =
      scores[activatePlayer];
    if (scores[activatePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activatePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activatePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});
btnNew.addEventListener('click', () => {
  window.location.reload();
});
