// array of words 
var wordArr = ["groovy", "aquarius", "stoned", "protest", "peaceful", "incense", "counterculture", "hallucination", "psychedelic", "tripping", "woodstock",
  "liberation", "karma", "rocknroll", "headband", "sixties", "flowerpower"
];

// VARIABLES NEEDED
// random word from array
var randomWord = wordArr[Math.floor(Math.random() * wordArr.length)];
// counting variables
var numGuess = 8;
var wins = 0;
var losses = 0;
// Wrong letters array (blank so letters can be stored there as guessed)
var wrongLetters = [];
// Click event on start button to begin the game (figure this out later, after getting some functionality in the actual game)
// var startBtn = document.getElementById('startBtn');
// Array that placeholds astericks in place of letters
var answerArr = [];
// Turns letters in randomWord into string
var randomWordArr = randomWord.split("");

// SET UP THE GAME FROM START - The state the game is in when started (numbers and random word reset)
// function gameStart() {}
// Turn word into asterisks
for (var i = 0; i < randomWord.length; i++) {
  answerArr[i] = "*";
  // display word on screen
  document.getElementById("letters").innerHTML = answerArr.join(" ");
}

// WHERE DO I PUT THIS? 
document.getElementById("guessCount").innerHTML = numGuess;
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;

// GET USER INPUT
document.onkeyup = function (event) {
  var guess = event.key
  checkGuess(guess);
}

// check if letters in guess match randomWord - NOT WORKING!! PROBABLY BECAUSE I'M DOING IT WRONG
function checkGuess(guess) {
  for (var i = 0; i < randomWordArr.length; i++) {
    // if letter key is in randomWord reveal the letter
    if (randomWordArr[i] === guess) {
      answerArr[i] = guess;
    } else {
      // if not in randomWord add letter to wrongLetters array
      wrongLetters.push(guess);
      // set up wrongLetters for screen
      document.getElementById("wrongLetters").innerHTML = wrongLetters.join(" ");
      // if not subtract 1 from numGuess
      numGuess--;
    }
  }
}


// Add (1) to wins

// Add (1) to losses



// Tutoring help, but I'm not sure where he was going with these true/false variables...
/* for (var i = 0; i < randomWordArr.length; i++) {
    if (randomWordArr[i] === guess) {
      isLetterFound = true;
      console.log("success");
    }
  } */




// restart game with function
// gamestart();



// Where does this go? should I bother with a start button? 
// startBtn.addEventListener('click', gameStart);