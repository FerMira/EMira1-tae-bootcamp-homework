# EMira1-tae-bootcamp-homework
This repository contains al related homework from TAE Bootcamp

-- Steps to make prompting work on Node.js --
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
const promptSync = require('prompt-sync')({sigint: true});
const myName: string = promptSync("What is your name? ");
