// To make prompting work in Node.js follow the next steps
// In the directory where this file lives, execute:
//
// tsc file-name.ts (in order to compile the file)
// npm init (in order to initialize an npm project that can use external tools)
//
// The following two are external packages needed for prompting to work:
//
// npm i prompt-sync
// npm i --save-dev @types/node
// npm i --save-dev @types/prompt-sync
//
// This should have generated properly a package.json, package-lock.json files
// and a node_modules folder
// The sigint argument is needed so that the console can be killed
// by the console user by executing ctrl+C
var promptSync = require('prompt-sync')({ sigint: true });
var myName = promptSync("What is your name? ");
// This lets myVar be typed as a number OR a list of numbers
var myVar;
if (myName === "Andres") {
    myVar = 3;
}
else {
    myVar = [3];
}
var myOtherVar = 3;
// This will always print true, even in situations where it shouldn't
console.log(myVar == myOtherVar);
// This will print always the expected result
console.log(myVar === myOtherVar);
