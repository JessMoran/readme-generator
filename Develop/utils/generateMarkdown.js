// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${data.description}

  ## Usages
  ${data.usages}

  ## Contents
  * [Installations](#dependencies)
  * [Usages](#usages)
  * [Contributions](#contributions)
  * [Test](#test)
  * [License](#license)

  ## To run
  - You can invoked with the following command:
  \`\`\`
  ${data.run}
  \`\`\`

  ## Test
  ${data.test}

  ## Links
  The following link demonstrates the deploying app:
  (https://github.com/${data.username}/${data.title})

  ## Author
  ${data.username}
  - [github](https://github.com/${data.username})

  ## Contributing
  ${data.contributions}from [here](https://github.com/${data.username}/${data.title})

  ## License
  - ${data.license}`
}

module.exports = generateMarkdown;
