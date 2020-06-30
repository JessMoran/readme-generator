const markdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
let licenseBadge = [];

const writeFileAsync = util.promisify(fs.writeFile);

function promptUserREADME() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your Github username?",
      name: "username"
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "address"
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
      type: "input",
      message: "What does the user need to know about using the repo?",
      name: "usages"
    },
    {
      type: "input",
      message: "Please, write your file's demo name",
      name: "demo"
    },
    {
      type: "input",
      message: "How to run?",
      name: "run"
    },
    {
      type: "checkbox",
      message: "What kind of licence should your project have?",
      name: "license",
      choices: [
        "MIT",
        "APACHE 2.0",
        "GPL 3.0",
        "Boost Software License 1.0",
        "Mozilla Public License 2.0",
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
  ]);
}

const licenceOpt = (data) => {
   let userLicense = data.license

  if (userLicense == 'MIT') {
    licenseBadge.push("![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)")
  }

  if (userLicense == "APACHE 2.0") {
    licenseBadge.push("![License: APACHE](https://img.shields.io/badge/License-Apache%202.0-blue.svg)")
  }

  if (userLicense == "GPL 3.0") {
    licenseBadge.push("![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)")
  }

  if (userLicense == "Boost Software License 1.0") {
    licenseBadge.push("![License: Boost](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)")
  }

  if (userLicense == "Mozilla Public License 2.0") {
    licenseBadge.push("![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)")
  }
}

async function init() {
  try {
    const data = await promptUserREADME();

    await licenceOpt(data);

    const readme = markdown(data,licenseBadge);

    await writeFileAsync("README.md", readme);
    console.log("Successfully README");
  } catch(err) {
    console.log(err);
  }
}

init();
