const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt(
    [
      {
        type: "input",
        message: "What is your Github username?",
        name: "title"
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "title"
      },
      {
        type: "input",
        message: "What is your project's name?",
        name: "title"
      },
      {
        type: "input",
        message: "Please! Write a description of your project",
        name: "description"
      },
      {
        type: "checkbox",
        message: "What kind of licence should your project have?",
        name: "stack",
        choices: [
          "MIT",
          "APACHE 2.0",
          "GLP 3.0",
          "BSD 3",
          "NONE"
        ]
      },
      {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "dependencies"
      },
      {
        type: "input",
        message: "What command should be run to run test?",
        name: "test"
      },
      {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "username"
      },
      {
        type: "input",
        message: "What does the user need to know about contributing the repo?",
        name: "username"
      },
    ])

// array of questions for user
const questions = [];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
