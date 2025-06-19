/**
 * This example shows LSP violations - Poor Polymorphism.
 */

class WorkTool {

    saw() {
        console.log("This tool is sawing wood.");
    }

    hammer() {
        console.log("This tool is hammering a nail.");
    }

}

class ChainSaw extends WorkTool {

    hammer() {
        throw new Error("I can´t hammer... I'm a chainsaw!");
    }

}

function makeToolHammer(workTool: WorkTool) {
    workTool.hammer();
}

const chainSaw = new ChainSaw();
makeToolHammer(chainSaw); //Error at runtime: "I can´t hammer... I'm a chainsaw!"
