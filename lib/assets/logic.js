const inquirer = require('inquirer');
const Manager = require('../Manager');
const Engineer = require('../Engineer');
const Intern = require('../Intern');
const generateHTML = require('./generateHTML');
const fs = require('fs');

const teamMembers = [];

const teamManQuestions = () => {
    return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'teamManName',
                    message: "What is your team manager's name?",
                    validate: manName => {
                        if (!manName) {
                            return false;
                        } 
                        return true;
                    }
                },
                {
                    type: 'input',
                    name: 'teamManId',
                    message: "What is your team manager's employee ID?",
                    validate: teamManEmpId => {
                        if (!teamManEmpId) {
                            return false;
                        }
                        return true;
                    }
                },
                {
                    type: 'input',
                    name: 'teamManEmail',
                    message: "What is your team manager's email?",
                    validate: teamManEm => {
                        if (!teamManEm) {
                            return false;
                        }
                        return true;
                    }
                },
                {
                    type: 'input',
                    name: 'teamManOfficeNum',
                    message: "What is your team manager's office number?",
                    validate: teamManOfficeNumber => {
                        if (!teamManOfficeNumber) {
                            return false;
                        }
                        return true;
                    }
                }
            ]).then(response => {
                teamMembers.push(response);
                console.log(teamMembers);
            })
}

const engQuestions = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'engName',
                message: "What is this engineer's name?",
                validate: engNameInput => {
                    if (!engNameInput) {
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'engId',
                message: "What is this engineer's employee ID?",
                validate: engIdInput => {
                    if (!engIdInput) {
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'engEmail',
                message: "What is this engineer's email?",
                validate: engEmailInput => {
                    if (!engEmailInput) {
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'engGitHub',
                message: "What is this engineer's github username?",
                validate: engGithub => {
                    if (!engGithub) {
                        return false;
                    }
                    return true;
                }
            }
        ])
};

const IntQuestions = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'intName',
                message: "What is this Intern's name?",
                validate: intNameInput => {
                    if (!intNameInput) {
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'intId',
                message: "What is this Intern's employee ID?",
                validate: engIdInput => {
                    if (!engIdInput) {
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'intEmail',
                message: "What is this Intern's email?",
                validate: intEmailInput => {
                    if (!intEmailInput) {
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'intSchool',
                message: "What is the name of this Intern's school?",
                validate: intSchoolInput => {
                    if (!intSchoolInput) {
                        return false;
                    }
                    return true;
                }
            }
        ])
};


class Logic {

    initMenu() {
        return inquirer
                .prompt(
            {
                type: 'list',
                name: 'addEmployeeOpts',
                message: 'What type of team member would you like to add?',
                choices: [
                'Add a Team Manager',
                'Add an Engineer',
                'Add an Intern',
                "I'm done adding team members"
                ]
            }
        ).then(selectionInput => {
            console.log(selectionInput.addEmployeeOpts);
            
            if (selectionInput.addEmployeeOpts === 'Add a Team Manager') {
                inquirer.prompt(teamManQuestions).then(selectionInput => {
                    const manager = new Manager(
                        selectionInput.teamManName,
                        selectionInput.teamManId,
                        selectionInput.teamManEmail,
                        selectionInput.teamManOfficeNum
                    );

                    teamMembers.push(manager);
                    return this.initMenu();
                })
            } else if(selectionInput.addEmployeeOpts === 'Add an Engineer') {
                inquirer.prompt(engQuestions).then(selectionInput => {
                     const engineer = new Engineer(
                        selectionInput.engName,
                        selectionInput.engId,
                        selectionInput.engEmail,
                        selectionInput.engGitHub
                    );

                        teamMembers.push(engineer);

                        return this.initMenu();
                })
            } else if (selectionInput.addEmployeeOpts === 'Add an Intern') {
                inquirer.prompt(IntQuestions).then(selectionInput => {
                    const intern = new Intern(
                        selectionInput.intName,
                        selectionInput.intId,
                        selectionInput.intEmail,
                        selectionInput.intSchool
                    );

                        teamMembers.push(intern);

                        return this.initMenu();
                })
            } else {
                return generateHTML(teamMembers);
            }
        })
    }
    writeData (userInput) {
        const writeHTMLFile = generateHTML(userInput);

        fs.writeFile('./dist/index.html', writeHTMLFile, (err) => {
            if (err) throw new Error(err);
        });
    }
}

module.exports = Logic;