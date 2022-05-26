// TODO: Include packages needed for this application
const inquirer = require('inquirer');


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
        type: 'checkbox',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['none', 'MIT', 'GPLv2', 'Apache', 'GPLv3']
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      }
    ]);
  };

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
questions();
