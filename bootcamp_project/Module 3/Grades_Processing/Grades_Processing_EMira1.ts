const gradesStudent01: number[] = [100, 45, 89, -1, 80];
const gradesStudent02: number[] = [10, 12, 8, -1, 1000, 10];
const gradesStudent03: number[] = [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60];

let sum: number = 0;
let ammountOfGrades: number = 0;
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
    ammountOfGrades++;

}

if (!exceptionalStudent ) {
    console.log("Average score for student: " + sum / ammountOfGrades);
}



