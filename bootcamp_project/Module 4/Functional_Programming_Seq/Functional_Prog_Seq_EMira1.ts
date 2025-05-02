console.log("- Exercise to create an array method that takes\n ",
    "an array of strings and returns an array containing\n ",
    "the capitalized version of each string.");

const arrayOfStrings: string[] = ["array", "of", "strings", "to", "capitalize"];
const arrayCapitalized = arrayOfStrings.map(str => str.charAt(0).toUpperCase() + str.slice(1));

console.log(arrayOfStrings);
console.log(arrayCapitalized);


console.log("- Exercise to create an array method that takes\n ",
    "an array of numbers and only returns the ones that\n ",
    "are between 50 and 75.");

const arrayOfNumbers: number[] = [1, 2, 3, 50, 51, 52, 66, 70, 72, 75, 76, 85, 99, 101];
const arrayFiltered = arrayOfNumbers.filter(num => {
    if (num > 50 && num < 75) {
        return true;
    } else {
        return false;
    }
});  

console.log(arrayFiltered);
