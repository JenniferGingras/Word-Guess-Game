// ARRAYS
//----------------------
// array of words 
var wordArr = ["groovy", "aquarius", "stoned", "protest", "peaceful", "incense", "counterculture", "hallucination", "psychedelic", "tripping", "woodstock",
  "liberation", "karma", "rocknroll", "headband", "sixties", "flowerpower"
];
// Array to hold the letters of the randomWord
var randomWordLetters = [];
// Array to hold the asterisks pushed in place of each letter
var answerArr = [];
// Wrong letters array (blank so letters can be stored there as guessed)
var wrongLetter = [];


// VARIABLES
//---------------------------
// counting variables
var numGuess = 8;
var wins = 0;
var losses = 0;
// variables which get values during gameplay
var keyGuess;
var randomWord;
// var startBtn = document.getElementById('startBtn');


// THE GAME
//-----------------------

// START/RESTART - chooses a new word and sets counters/arrays back to starting point
// function gameSet() {

  // set counters at startpoint
  numGuess = 8;
  wrongLetter = [];

  // computer selects random word from array
  randomWord = wordArr[Math.floor(Math.random() * wordArr.length)];

  // turn letters in randomWord into string
  randomWordLetters = randomWord.split("");

  // turn letters in word into asterisks
  for (var i = 0; i < randomWordLetters.length; i++) {
    answerArr.push("*");
  }
  // display 
  document.getElementById("letters").innerHTML = answerArr.join(" ");
  document.getElementById("wrongLetters").innerHTML = wrongLetter.join(" ");
  document.getElementById("guessCount").innerHTML = numGuess;
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
// }


// USER INPUT
document.onkeyup = function (event) {
  keyGuess = event.key;
  // console.log(keyGuess)
}


// CHECK GUESSED LETTERS
function checkLetter(letter) {
  if (keyGuess >= 65 && keyGuess <= 90) { // check to make sure it's a letter
    for (var i = 0; i < randomWordLetters.length; i++) { // check the guessed letter against letters in the word
      if (keyGuess === randomWordLetters[i]) { // if guessed letter is in word 
        answerArr[i] = keyGuess; // add letter to answer
      } else { // if guessed letter is not in word 
        wrongLetter.push(keyGuess); // add letter to wrongLetter array 
        numGuess--; // subtract 1 from guesses
      }
    }
  }
}

// FINISH A WORD ROUND
function roundEnd() {
  // game lost
  if (numGuess === 0) {
    // Add (1) to losses
    losses++;
    // display losing message - change to image after figuring out basic functionality
    alert("Aw, man. Get it together!")
  }
  // game won
  // if () {
  // Add (1) to wins
  wins++;
  // disply win message - change to image after figuring out basic functionality
  alert("Far out!")
}
// }

// PLAYING GAME?
//----------------------

// startBtn.addEventListener('click', gameSet);

// checkLetter();