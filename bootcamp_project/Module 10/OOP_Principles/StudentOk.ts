class StudentOK {


    private name: string;
    private age: number;
    private grades: number[];

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.grades = [];
    }


    public addGrade(grade: number) {
        if (grade >= 0 && grade <= 100) {
            this.grades.push(grade);
        } else {
            console.error("Invalid grade");
        }
    }


}

const studentok = new StudentOK("John Doe", 20);
studentok.addGrade(100);
studentok.addGrade(150); // Will throw console error
//studentok.grades.push(900); // Grades is private hence will throw an error.
