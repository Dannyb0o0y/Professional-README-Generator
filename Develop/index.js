const fs = require("fs");
const inquirer = require("inquirer");

const generatePage = require("./utils/generateMarkdown.js");

const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "github",
      message: "What is your GitHub?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your GitHub id!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("enter your email address!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "title",
      message: "What is the name of the project",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your project name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Please write a short description of your project.",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a description of your project!");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "license",
      message: "what is the license for project",
      choices: ["MIT", "GNU"],
      default: ["MIT"],
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("choose a license!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "install",
      message: "What are the steps required to install your project?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter steps required to install your project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "How do you use this app?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a usage description!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "test",
      message: "What command should be run to run tests?",
      default: "npm test",
    },
    {
      type: "input",
      name: "contributors",
      message:
        "What does the user need to know about contributing to the repo?",
    },
  ]);
};

const writeFile = (data) => {
  fs.writeFile("README.md", data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("README is ready");
    }
  });
};

questions()
  .then((answers) => {
    return generatePage(answers);
  })

  .then((data) => {
    return writeFile(data);
  })

  .catch((err) => {
    console.log(err);
  });
