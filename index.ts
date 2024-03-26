#! /usr/bin/env node

import inquirer from "inquirer";

// computer will generate a random number
// user input for guessing number
// compaire user input with computer generate number and show result

const randomNumber = Math.floor(Math.random() * 10 +1);

console.log("welcome to number guessing game");



const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-10:",
    }
]);

if(answers.userGuessedNumber === randomNumber) {
    console.log("conguaratulations you guessed right number.");
}
else {
    console.log("you guessed wrong number.");
}