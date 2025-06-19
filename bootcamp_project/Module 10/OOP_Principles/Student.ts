/**
 * This example violates OOP Principle - Encapsulation
 */

class Student {

    /**
     * The 'name' property is public and can be modified directly.
     */
    public name: string;

    /**
     * The 'age' property is public and can be modified directly.
     */
    public age: number;

    /**
     * The 'grades' property is public and can be modified directly.
     */
    public grades: number[];

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.grades = [];
    }

    /**
     * No validation on how grades are added. Negative grades or grades greater than a particular limit can be added.
     * @param grade
     */

    public addGrade(grade: number) {
        this.grades.push(grade);
    }


}

// Poor encapsulation example
const student = new Student("John Doe", 20);
student.grades.push(100); // Accessing grades array directly.
student.grades.push(900); // No control over grades value.
