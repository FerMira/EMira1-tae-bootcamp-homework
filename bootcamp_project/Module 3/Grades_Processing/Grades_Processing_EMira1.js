var gradesStudent01 = [100, 45, 89, -1, 80];
var gradesStudent02 = [10, 12, 8, -1, 1000, 10];
var gradesStudent03 = [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60];
var sum = 0;
var ammountOfGrades = 0;
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
