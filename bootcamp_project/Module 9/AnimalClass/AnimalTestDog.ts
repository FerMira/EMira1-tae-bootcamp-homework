//import {Dog} from './Dog';
//import {Cat} from './Cat';

class AnimalTestDog extends Animal {

    constructor(name: string, age: number) {
        super(name, age);
    }

    makeSound(): void {
        console.log("Woof!");
    }

    getName(): string {
        return `Name: ${this.name}`;
    }

}

const dog1 = new Dog("Firulai", 9);
const dog2 = new Dog("Roco", 3);



dog1.getName();
dog2.getName();

dog1.makeSound();
dog2.makeSound();

try {
    console.log("Age is: " + dog1.age);
} catch (error) {
    console.error("Cannot access property:", error.message);
}

dog1.getAge();
dog2.getAge();
