// array of words 
var wordArr = ["groovy", "aquarius", "stoned", "protest", "peaceful", "incense", "counterculture", "hallucination", "psychedelic", "tripping", "woodstock",
  "liberation", "karma", "rocknroll", "headband", "sixties", "flowerpower"
];

// countdown the guesses
var numGuess = 8
document.getElementById('guessCount');

// count the wins and losses
var wins = 0
document.getElementById('wins');
// var losses = 0

// Click event on start button to begin the game
var startBtn = document.getElementById('startBtn');

// random word from the array  
var randomWord = wordArr[Math.floor(Math.random() * wordArr.length)];

// create an array that placeholds astericks in place of letters
var answerArr = [];

var remainingLetters = randomWord.length;

function gameStart() {}
for (var i = 0; i < randomWord.length; i++) {
  answerArr[i] = "*";
  // display word on screen
  document.getElementById("letters").innerHTML = answerArr.join(" ");

}

// user presses letter key - I can't figure out how this works
document.onkeyup()



// if letter key is in randomWord reveal the letter
for (var j = 0; j < randomWord.length; j++)
  if (randomWord[j] === guess) {
    answerArr[j] = guess;
    remainingLetters--;
  }

// if not in randomWord add letter to wrong guesses
// if not subtract 1 from numGuess

// if not a letter key then alert(Hey man, that's not a letter)


// When remainingLetters = 0 create "You Won!" alert thing
// Add (1) to wins

// When numGuess = 0 create "You Lost" alert thing
// Add (1) to losses

// restart game with function
// gamestart();



// Where does this go? should I bother with a start button? 
// startBtn.addEventListener('click', gameStart);