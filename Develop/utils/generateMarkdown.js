// function to generate markdown for README
function generateMarkdown(data) {
  return `#Title
  ${data.title}

  ## Description
  ${data.description}

  ## Usages
  ${data.usages}

  ## Contents
  The generated README includes the following sections:

  * [Title](#title)
  * [Description](#description)
  * [Usage](#usages)
  * [Table of Contents](#contents)
  * [Installation](#to-run)
  * [Tests](#test)
  * [Demo](#links)
  * [Contributing](#contributions)
  * [License](#license)
  * [Author](#author)
  * [Questions](#questions)

  ## To run
  - You can invoked with the following command:
  \`\`\`
  ${data.run}
  \`\`\`

  ## Test
  \`\`\`
  ${data.test}
  \`\`\`

  ## Links
  - The following link demonstrates the deploying app: [link](https://github.com/${data.username}/${data.title})

  - The following image demonstrates the application functionality: [demo](./assets/${data.demo})

  ## Contributing
  Pull requests and stars are always welcome.
  For bugs and feature requests, please create an issue [here](https://github.com/${data.username}/${data.title}/issues)

  ## License
  - ${data.license}

  ## Author
  ${data.username}
  - [github](https://github.com/${data.username})

  ## Questions
  If you're having any problem or questions, please send me an email and I'll be happy to help.
  ${data.address}`
}

module.exports = generateMarkdown;
