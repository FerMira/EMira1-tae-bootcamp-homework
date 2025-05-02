var promptSync = require('prompt-sync')({ sigint: true });
var myUserName = promptSync("Hey there! What is your name? ");
console.log("Welcome " + myUserName);
console.log("This is a Temperature converter between Celsius and Kelvin");
var optionSelected;
do {
    console.log("Menu:");
    console.log("Select Option 1 to convert Celsius to Kelvin");
    console.log("Select Option 2 to convert Kelvin to Celsius");
    console.log("Select Option 3 to Exit the program");
    optionSelected = parseInt(promptSync("Please enter an option ") || '0');
    switch (optionSelected) {
        case 1:
            var celsiusDegrees1 = void 0;
            do {
                celsiusDegrees1 = parseInt(promptSync("Please enter Celsius degrees you want to convert to Kelvin: ") || '0');
                if (celsiusDegrees1 < -273.15) {
                    console.log("Invalid input. Kelvin degrees cannot be negative. Enter a greater value than -273.15.");
                }
                else {
                    var kelvinDegrees1 = celsiusDegrees1 + 273.15;
                    console.log(celsiusDegrees1 + " Celsuis is equal to " + kelvinDegrees1 + " Kelvin degrees.");
                }
            } while (celsiusDegrees1 < -273.15);
            break;
        case 2:
            var kelvinDegrees2 = void 0;
            do {
                kelvinDegrees2 = parseInt(promptSync("Please enter Kelvin degrees you want to convert to Celsius: ") || '0');
                if (kelvinDegrees2 < 0) {
                    console.log("Invalid input. Kelvin degrees cannot be negative. Enter a positive value.");
                }
                else {
                    var celsiusDegrees2 = kelvinDegrees2 - 273.15;
                    console.log(kelvinDegrees2 + " Kelvin is equal to " + celsiusDegrees2 + " Celsius degrees.");
                }
            } while (kelvinDegrees2 < 0);
            break;
        case 3:
            console.log("Exiting. Thanks for using our program. See you soon!");
            break;
        default:
            console.log("Invalid choice. Please try again.");
    }
} while (optionSelected !== 3);
