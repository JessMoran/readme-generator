// function to generate markdown for README
function generateMarkdown(data,licenseBadge) {
  return `# ${data.title}

  ## License
  ${licenseBadge}

  ## Description
  ${data.description}

  ## Usages
  ${data.usages}

  ## Contents
  The generated README includes the following sections:

  * [Title](#title)
   * [License](#license)
  * [Description](#description)
  * [Usage](#usages)
  * [Table of Contents](#contents)
  * [Installation](#to-run)
  * [Tests](#test)
  * [Demo](#links)
  * [Contributing](#contributing)
  * [Questions](#questions)
  * [Author](#author)

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

  - The following image demonstrates the application functionality: ![demo](./assets/${data.demo})

  ## Contributing
  Pull requests and stars are always welcome.
  For bugs and feature requests, please create an issue [here](https://github.com/${data.username}/${data.title}/issues)

  ## Questions
  If you're having any problem or questions, please send me a [mail](mailto:${data.address}) and I'll be happy to help.

  ## Author
  ${data.username}
  - [github](https://github.com/${data.username})

  `
}

module.exports = generateMarkdown;
