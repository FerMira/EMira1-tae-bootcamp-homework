const promptSync = require('prompt-sync')({sigint: true});
const myUserName: string = promptSync("Hey there! What is your name? ");
console.log("Welcome " + myUserName + " , A random number between 0 and 99 will be generated and you'll have 3 opportunities to guess it. Let's play!")


const randomNumber: number = getRandom(0,99);
let attempt: number = 3;



     while (attempt > 0) {
        let myGuess: number = parseInt(promptSync("Please guess the number ") || '0');

            if (myGuess === randomNumber) {

                console.log("Congratulations " + myUserName + "! You won!! Secret number was " +  randomNumber);
                break;
            } 

            attempt--;

            if (attempt > 0) {
                if (myGuess < randomNumber) {
                    console.log("Your guess is lower than the secret number. Aim higher.");
                } else { console.log("Your guess is higher than the secret number. Aim lower."); }
            }
                   
     }

     console.log("That's sad, the secret number was " + randomNumber);
    
     

function getRandom(min, max) {
    const floatRandom = Math.random()
  
    const difference = max - min
  
    // random between 0 and the difference
    const random = Math.round(difference * floatRandom)
  
    const randomWithinRange = random + min
  
    return randomWithinRange
  }
