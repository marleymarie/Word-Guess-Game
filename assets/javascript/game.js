var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var attempts = 10;

var guesses = [];


var hiddenWord = [];

var computerWord = [];





var computerOptions = ["bts", "twice", "ateez", "seventeen", "blackpink",];
var computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];


function truth(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        } 
    }
    return true;
}

var winsText = document.getElementById("wins");
var wordDisplay = document.getElementById("word");
var attemptsText = document.getElementById("guesses-left");
var guessesText = document.getElementById("already-guessed");


document.onkeyup = function(event) {
    var letter = event.key.toLowerCase();

    
    if ((alphabet.indexOf(letter) > -1) && (guesses.indexOf(letter) < 0)) {
        
        if (computerWord.indexOf(letter) > -1) {
            
            for (var i = 0; i < computerWord.length; i++) {
                if (letter == computerWord[i]) {
                    hiddenWord[i] = letter;
                    wordDisplay.textContent = hiddenWord.join("");
                }
            }
            
        }

        if (truth(hiddenWord, computerWord)) {
            wins += 1;
            winsText.textContent = wins;
            
        }
        
    }
}


for (var i = 0; i < computerChoice.length; i++) {
    hiddenWord[i] = "-";
}
wordDisplay.textContent = hiddenWord.join("");

for (var i = 0; i < computerChoice.length; i++) {
    computerWord[i] = computerChoice[i];
}
