// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${data.description}

  ## Usages
  ${data.usages}

  ## Contents
  * [Installations](${data.dependencies})
  * [Usages](${data.usages})
  * [Contributions](${data.contributions})
  * [Test](${data.test})
  * [License](${data.license})

  ## To run
  - Download or fork the application from [here](https://github.com/${data.username}/${data.title})

  ## Test
  ${data.test}

  ## Links
  The following link demonstrates the deploying app:
  (https://github.com/${data.username}/${data.title})

  ## Author
  ${data.username}
  - [github](https://github.com/${data.username})

  ## Contributing
  ${data.contributions}

  ## License
  - ${data.license}`
}

module.exports = generateMarkdown;
