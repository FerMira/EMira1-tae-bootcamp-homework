import { Dog } from './Dog';
import { Cat } from './Cat';

class AnimalTest{

    private dog: Dog;
    private cat: Cat;

    constructor() {
        this.dog = new Dog("Bluey", 5);
        this.cat = new Cat("Kitty", 3);
    }

    testGetName():void {
        console.log(`Dog is called ${this.dog.getName()}`);
        console.log(`Cat is called ${this.cat.getName()}`);
    }

    testMakeSound():void {
        console.log(`Dog says ${this.dog.makeSound()}`);
        console.log(`Cat says ${this.cat.makeSound()}`);
    }

    testGetAgeCorrectly():void {
        try {
            console.log("Age is: " + this.dog.getAge());
            console.log("Age is: " + this.cat.getAge());
        } catch (error) {
            console.error("Cannot access property:", error.message);
        }
    }

    testGetAge():void {
        try {
            console.log("Age is: " + this.dog.age);
            console.log("Age is: " + this.cat.age);
        } catch (error) {
            console.error("Cannot access property:", error.message);
        }
    }
}

const tests = new AnimalTest();

tests.testGetName();
tests.testMakeSound();
tests.testGetAgeCorrectly();
tests.testGetAge();
