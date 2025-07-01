import { Animal } from './Animal';

export class Cat extends Animal {

    constructor(name: string, age: number) {
        super(name, age);
    }

    makeSound(): void {
        console.log("Meow!");
    }

}
