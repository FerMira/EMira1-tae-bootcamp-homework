/**
 * This example shows poor Inheritance usage.
 * In this case we should use composition instead.
 */

class Tool {

    toolOn() {
        console.log("Tool is on");
    }
}

class Screwdriver extends Tool {

    drill() {
        console.log("Electric screwdriver is drilling");
    }

}

const electricScrew = new Screwdriver();
electricScrew.toolOn();
electricScrew.drill();
