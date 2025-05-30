class Dog extends Animal {

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
