//const gradesStudent01: number[] = [100, 45, 89, -1, 80];
//const gradesStudent02: number[] = [10, 12, 8, -1, 1000, 10];
//const gradesStudent03: number[] = [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60];
var promptSync = require('prompt-sync')({ sigint: true });
var myUserName = promptSync("Hey there! What is your name? ");
console.log("Welcome " + myUserName + " , Please enter how many grades would you like to enter for current student.");
var ammountOfGrades = promptSync("Ammount of grades: ");
var gradesStudent01 = [];
do {
    var grade = promptSync("Insert grade: ");
    if (grade !== null) {
        var num = Number(grade);
        if (!isNaN(num)) {
            gradesStudent01.push(num);
        }
        else {
            console.log("Invalid input. Please enter a number.");
        }
    }
    ammountOfGrades--;
} while (ammountOfGrades !== 0);
console.log("Student Grades:", gradesStudent01);
var sum = 0;
var exceptionalStudent = false;
for (var i = 0; i < gradesStudent01.length; i++) {
    if (gradesStudent01[i] === -1) {
        continue;
    }
    if (gradesStudent01[i] === 1000) {
        console.log("Exceptional student! Average is 100!");
        exceptionalStudent = true;
        break;
    }
    sum += gradesStudent01[i];
    ammountOfGrades++;
}
if (!exceptionalStudent) {
    console.log("Average score for student: " + sum / ammountOfGrades);
}
