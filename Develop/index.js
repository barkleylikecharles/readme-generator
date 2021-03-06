// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown")

const fs=require('fs')
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions  = ( )=> {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('You need to enter a project title!');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to enter a project description!');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions. (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('You need to enter instructions!');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('You need to enter a project description!');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'credit',
        message: 'Who contributed to this project? (Required)',
        validate: creditInput => {
            if (creditInput) {
                return true;
            } else {
                console.log('You need to enter a project description!');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'test',
        message: 'Provide any test instructions (Required)',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('You need to enter a project description!');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter your GitHub profile link. (Required)',
        validate: linkInput => {
            if (linkInput) {
                return true;
            } else {
                console.log('You need to enter a GitHub link!');
                return false;
            }
        }
      },
    
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: websiteInput => {
            if (websiteInput) {
                return true;
            } else {
                console.log('You need to enter a valid email!');
                return false;
            }
        }
      },
    
      {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'GNU', 'Apache 2.0'],
        default: ["MIT"],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('You need to choose a license');
                return false;
            }
        }
      },
      {
        type: 'confirm',
        name: 'confirmCreateReadme',
        message: 'Would you like to generate the README?',
        default: true,
      }
    ]);
    };
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the README has been created 
        } else {
            console.log("Your README has been successfully created!")
        }
    })
}; 
//Function to initalize app
questions()
//Get user answers
.then(answers => {
    return generateMarkdown(answers);
})
// Display data 
.then(data => {
    return writeFile(data);
})
// Catch errors
.catch(err => {
    console.log(err)
})

