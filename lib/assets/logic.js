const inquirer = require('inquirer');
const Manager = require('../Manager');
const Engineer = require('../Engineer');
const Intern = require('../Intern');

const teamMembers = [];


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
    teamManQuestions() {
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
            ])
    }
    initMenu() {
        return inquirer
            .prompt(
            {
                type: 'list',
                name: 'addEmployeeOpts',
                message: 'Would you like to add another team member?',
                choices: [
                'Add an Engineer',
                'Add an Intern',
                "I'm done adding team members"
                ]
            }
        ).then(selectionInput => {
            console.log(selectionInput.addEmployeeOpts);

            if(selectionInput.addEmployeeOpts === 'add an Engineer') {
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
            } else if (selectionInput.addEmployeeOpts === 'add an Intern') {
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
}

module.exports = Logic;