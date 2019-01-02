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
var randomWord = "";
var letterKey = "";
// var startBtn = document.getElementById('startBtn');


// THE GAME
//-----------------------

// START/RESTART - chooses a new word and sets counters/arrays back to starting point
function gameSet() {

  // set counters at startpoint
  numGuess = 8;

  // computer selects random word from array
  randomWord = wordArr[Math.floor(Math.random() * wordArr.length)];

  // test randomWord
  console.log(randomWord);

  // turn letters in randomWord into string
  randomWordLetters = randomWord.split("");

  // set array for letters
  answerArr = [];

  // turn letters in word into asterisks
  for (var i = 0; i < randomWordLetters.length; i++) {
    answerArr.push("*");
  }

  // test answerArr with asterisks
  console.log(answerArr);

  // set empty array for wrong guesses
  wrongLetter = [];

  // display 
  document.getElementById("letters").innerHTML = answerArr.join(" ");
  document.getElementById("wrongLetters").innerHTML = wrongLetter.join(" ");
  document.getElementById("guessCount").innerHTML = numGuess;
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
}

// CHECK GUESSED LETTERS
function checkLetter(keyGuess) {
  // I don't understand why I need this true/false part, but it was in examples I found and when I take it away again stuff breaks.
  var letter = false;
  for (var i = 0; i < randomWordLetters.length; i++) {
    if (randomWord[i] === keyGuess) {
      letter = true;
    }
  }
  if (letter) {
    for (var i = 0; i < randomWordLetters.length; i++) { // check the guessed letter against letters in the word
      if (randomWord[i] === keyGuess) { // if guessed letter is in word 
        answerArr[i] = keyGuess; // add letter to answer
      }
    }
    // test
    console.log(answerArr);

  } else { // if guessed letter is not in word 
    wrongLetter.push(keyGuess); // add letter to wrongLetter array 
    numGuess--; // subtract 1 from guesses
  }
}


// FINISH A WORD ROUND
function afterGuess() {
  // update HTML 
  document.getElementById("letters").innerHTML = answerArr.join(" ");
  document.getElementById("wrongLetters").innerHTML = wrongLetter.join(" ");
  document.getElementById("guessCount").innerHTML = numGuess;
  // game lost
  if (numGuess === 0) {
    // Add (1) to losses
    losses++;
    document.getElementById("losses").innerHTML = losses;
    // display losing message - change to image after figuring out basic functionality
    alert("Aw, man. Get it together!")
    gameSet();
  }
  // game won
  else if (randomWordLetters.toString() === answerArr.toString()) {
    // Add (1) to wins
    wins++;
    document.getElementById("wins").innerHTML = wins;
    // disply win message - change to image after figuring out basic functionality
    alert("Far out!")

    //restart the game
    gameSet();
  }
}

// PLAYING GAME?
//----------------------
// call the start of game 
gameSet();
// startBtn.addEventListener('click', gameSet()) {
// document.getElementById('startBtn').innerHTML
// }

// USER INPUT
document.onkeyup = function (event) {
  letterKey = event.key
  console.log(letterKey)

  // call the checkLetter function
  checkLetter(letterKey);
  // call the afterGuess function
  afterGuess();
}