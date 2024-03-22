#!/usr/bin/env node
import inquirer from "inquirer";
const randomNummber = Math.floor(Math.random() * 10 + 1);

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10: "
    },
]);
if (answer.userGuessedNumber == randomNummber) {
    console.log("Congratulations! You guessed a correct number: ");
}
else {
    console.log("try again! You guessed a wrong number: ");
};

