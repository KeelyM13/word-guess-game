//Variables and arrays

var words = ["dog", "cat", "elephant"];
var wins = 0;
var losses = 0;
var guesses = 6;
var lettersGuessed = [];



//functions

function resetGame() {
guesses = 6;
lettersGuessed = [];
document.querySelector("#guessed-letters").innerHTML=lettersGuessed;
document.querySelector("#guesses-remaining").innerHTML=guesses;

}









//main process
document.querySelector("#wins").innerHTML=wins;
document.querySelector("#guesses-remaining").innerHTML=guesses;

document.onkeypress = function(event){
    var userGuess = String.fromCharCode(event.which).toLowerCase();
    console.log(userGuess);
    lettersGuessed.push(userGuess);
    console.log(lettersGuessed);
    document.querySelector("#guessed-letters").innerHTML=lettersGuessed;
    guesses--;
    document.querySelector("#guesses-remaining").innerHTML=guesses;
    if (guesses===0) {
        resetGame();
    }
};
