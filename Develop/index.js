// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter the title!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your application.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your application?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples how to use your application.',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'How to contribute to your application?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'How to run tests for your application?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['none', 'MIT', 'GPLv2', 'Apache', 'GPLv3']
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?(Required)',
        validate: usernameInput => {
          if (usernameInput) {
            return true;
          } else {
            console.log('Please enter the username!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?(Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter the email!');
            return false;
          }
        }
      }
    ]);
  };

// TODO: Create a function to write README file
const writeToFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};
module.exports = writeToFile;

// Function call to initialize app
questions()
.then(data => {
  return generateMarkdown(data);
})
.then(pageMD => {
  return writeToFile(pageMD);
})
.catch(err => {
  console.log(err);
});