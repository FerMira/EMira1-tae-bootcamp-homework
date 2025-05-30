class AnimalTestCat extends Animal {

    constructor(name: string, age: number) {
        super(name, age);
    }

    makeSound(): void {
        console.log("Meow!");
    }

    getName(): string {
        return `Name: ${this.name}`;
    }

}

const cat1 = new AnimalTestCat("Michi", 5);
const cat2 = new AnimalTestCat("Felix", 8);



cat1.getName();
cat2.getName();

cat1.makeSound();
cat2.makeSound();

try {
    console.log("Age is: " + cat1.age);
} catch (error) {
    console.error("Cannot access property:", error.message);
}

try {
    console.log("Age is: " + cat2.age);
} catch (error) {
    console.error("Cannot access property:", error.message);
}

cat1.getAge();
cat2.getAge();
