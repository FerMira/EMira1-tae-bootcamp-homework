import { Animal } from './Animal';

export class Dog extends Animal {

    constructor(name: string, age: number) {
        super(name, age);
    }

    makeSound(): void {
        console.log("Woof!");
    }

}
