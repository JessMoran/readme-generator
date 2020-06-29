const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
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
      type: "checkbox",
      message: "What kind of licence should your project have?",
      name: "licence",
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
      name: "usages"
    },
    {
      type: "input",
      message: "What does the user need to know about contributing the repo?",
      name: "contributions"
    },
  ]);
}

function generateREADME(answers) {
  return `# ${answers.title}
  ${answers.description}

  ## Usages
  ${answers.usages}

  ## Contents
  * [Installations](${answers.dependencies})
  * [Usages](${answers.usages})
  * [Contributions](${answers.contributions})
  * [Test](${answers.test})
  * [Licence](${answers.licence})
  * [Questions](${answers.questions})

  ## To run
  - Download or fork the application from [here](https://github.com/${answers.username}/${answers.title})

  ## Test
  ${answers.test}

  ## Links
  The following link demonstrates the deploying app:
  (https://github.com/${answers.username}/${answers.title})

  ## Author
  ${answers.username}
  - [github](https://github.com/${answers.username})

  ## Contributing
  ${answers.contributions}

  ## Licence
  - ${answers.licence}`;
}

async function init() {
  try {
    const answers = await promptUser();

    const readme = generateREADME(answers);

    await writeFileAsync("README.md", readme);
    console.log("Successfully README");
  } catch(err) {
    console.log(err);
  }
}

init();
