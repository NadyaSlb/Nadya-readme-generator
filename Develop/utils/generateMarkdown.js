// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = data => {
  if (data.license == "none") {
    return ``;
  }
  else if (data.license == "MIT") {
    return `![GitHub license](https://img.shields.io/badge/license-MIT-blue)`
  }
  else if (data.license == "GPLv2") {
    return `![GitHub license](https://img.shields.io/badge/license-GPLv2-green)`
  }
  else if (data.license == "Apache") {
    return `![GitHub license](https://img.shields.io/badge/license-Apache-yellow)`
  }
  else if (data.license == "GPLv3") {
    return `![GitHub license](https://img.shields.io/badge/license-GPLv3-red)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

const renderLicenseLink = data => {
  if (data.license == "none") {
    return `No license added`;
  }
  else if (data.license == "MIT") {
    return `[MIT License](https://choosealicense.com/licenses/mit/)`
  }
  else if (data.license == "GPLv2") {
    return `[GNU General Public License v2.0](https://choosealicense.com/licenses/gpl-2.0/)`
  }
  else if (data.license == "Apache") {
    return `[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)`
  }
  else if (data.license == "GPLv3") {
    return `[GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## ${renderLicenseBadge(data)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseLink(data)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions you can reach me by email ${data.email}. 
  My GitHub account: [GitHub](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
