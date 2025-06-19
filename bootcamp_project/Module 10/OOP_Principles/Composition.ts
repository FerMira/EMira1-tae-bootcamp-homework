/**
 * This example fixes Inheritance poor usage by using composition instead.
 */

class ATool {

    toolOn() {
        console.log("Tool is on");
    }
}

class AScrewdriver {
    constructor(private tool: ATool) {}

    drill() {
        this.tool.toolOn();
        console.log("Electric screwdriver is drilling");
    }

}
