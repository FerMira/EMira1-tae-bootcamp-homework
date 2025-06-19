//const gradesStudent01: number[] = [100, 45, 89, -1, 80];
//const gradesStudent02: number[] = [10, 12, 8, -1, 1000, 10];
//const gradesStudent03: number[] = [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60];

const promptSync = require('prompt-sync')({sigint: true});
const myUserName: string = promptSync("Hey there! What is your name? ");
console.log("Welcome " + myUserName + " , Please enter how many grades would you like to enter for current student.")
let amountOfGrades: number = promptSync("Amount of grades: ");

let gradesStudent01: number[] = [];

do {
    let grade: number = promptSync("Insert grade: ");
    if (grade === null) {
        console.log("Invalid input (null). Please enter a number.");
        continue;
    }
    let num: number = Number(grade);
    if (isNaN(num)) {
        console.log("Invalid input (NaN). Please enter a number.");
        continue;
    }        
    gradesStudent01.push(num);
    amountOfGrades--;
} while (amountOfGrades !== 0)

console.log("Student Grades:", gradesStudent01);

let sum: number = 0;
let exceptionalStudent: boolean = false;

for (let i = 0; i < gradesStudent01.length; i++) {

    if (gradesStudent01[i] === -1){ 
        continue;
    }

    if (gradesStudent01[i] === 1000){ 
        console.log("Exceptional student! Average is 100!");
        exceptionalStudent = true;
        break;
    }

    sum += gradesStudent01[i];
    amountOfGrades++;

}

if (!exceptionalStudent ) {
    console.log("Average score for student: " + sum / amountOfGrades);
}



