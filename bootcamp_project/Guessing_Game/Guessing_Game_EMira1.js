var promptSync = require('prompt-sync')({ sigint: true });
var myUserName = promptSync("Hey there! What is your name? ");
console.log("Welcome " + myUserName + " , A random number between 0 and 99 will be generated and you'll have 3 opportunities to guess it. Let's play!");
var randomNumber = getRandom(0, 99);
var maxOpportunities = 3;
var numberOfTry = 0;
console.log(randomNumber);
for (numberOfTry = 1; numberOfTry <= maxOpportunities; numberOfTry++) {
    var myGuess = parseInt(promptSync("Please guess the number ") || '0');
    if (myGuess === randomNumber) {
        console.log("Congratulations " + myUserName + "! You won!! Secret number was " + randomNumber);
        break;
    }
    else if (numberOfTry <= maxOpportunities - 1) {
        if (myGuess < randomNumber) {
            console.log("Your guess is lower than the secret number. Aim higher");
        }
        else {
            console.log("Your guess is higher than the secret number. Aim lower");
        }
    }
    else {
        console.log("That's sad, the secret number was " + randomNumber);
    }
}
function getRandom(min, max) {
    var floatRandom = Math.random();
    var difference = max - min;
    // random between 0 and the difference
    var random = Math.round(difference * floatRandom);
    var randomWithinRange = random + min;
    return randomWithinRange;
}
