abstract class Animal {

    protected name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    abstract makeSound(): void;

    public getName(): string {
        return `Name: ${this.name}`;
    }

    public getAge(): number {
        return this.age;
    }

}
