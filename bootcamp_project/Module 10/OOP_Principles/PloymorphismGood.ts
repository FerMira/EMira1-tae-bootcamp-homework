/**
 * This example fixes LSP violation from PolymorphismBad.ts file.
 */

class WorkTool {

    isDoingWork() {
        console.log("This tool is working correctly.");
    }


}

class SawingTool extends WorkTool {

    saw() {
        console.log("This tool is sawing wood.");
    }

}

class ElectricSaw extends SawingTool {
    sawMetal() {
        console.log("This saw can saw through metal.");
    }
}

class Drill extends WorkTool {
    drill() {
        console.log("Drilling correctly.")
    }
}

// Usage
const electriSaw = new ElectricSaw();
electriSaw.saw();

const drill = new Drill();
drill.drill();
