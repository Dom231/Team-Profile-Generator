const inquirer = require("inquirer");
const fs = require('fs');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const { listenerCount } = require("process");
const { default: Choice } = require("inquirer/lib/objects/choice");

const generateHTML = require("./src/generateHTML");



const managerArr= [];
const engineerArr= [];
const internArr= [];


function createEngineer() {
    inquirer 
       .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Team Engineer's name ?",
          },
        {
            type: 'input',
            name: 'eId',
            message: "What is the Team Engineer's ID?",
            
          },
          {
            type: 'input',
            name: 'eEmail',
            message: "What is the Team Enginer's Email?",
          },
          {
            type: 'input',
            name: 'git',
            message: "What is the Team Engineers's Github Username ?",
          },

       ])
       .then((answers)=>{
        const engineer = new Engineer(answers.name,answers.eId,answers.eEmail,answers.git)

    engineerArr.push(engineer);

    employeeSelection()

       })

} ;

function createIntern(){
    inquirer 
      .prompt ([
        {
            type: 'input',
            name: 'name',
            message: "What is the Team Intern's name ?",
          },
    {
        type: 'input',
        name: 'iId',
        message: "What is the Team Intern's ID?",
      },
      {
        type: 'input',
        name: 'iEmail',
        message: "What is the Team Intern's email?",
      },
      {
        type: 'input',
        name: 'school',
        message: "What school does the Team Intern attend?",
      },
    ])
    .then((answers)=>{
        const intern = new Intern(answers.name,answers.iId,answers.iEmail,answers.school)

    internArr.push(intern);

    employeeSelection()

       })
};

function employeeSelection(){
    inquirer 
      .prompt([
        {
            type:'list', 
            name:'employee',
            message: "Would you like to add a team members information ? ",
            choices:['Engineer','Intern','finished building my team']
        
        
          },
      ])
      .then((answer) => {
        if(answer.employee === "Engineer"){
            createEngineer()
        }
        else if(answer.employee === "Intern"){
            createIntern()
        }else{
            const htmlContent = generateHTML(managerArr,engineerArr,internArr)
       
            fs.writeFile('index.HTML', htmlContent, 
            (err) => err ? console.log(err) : console.log('Sucessfuly created index.HTML')
            )
        }

      }
      )
};



inquirer
   .prompt([
    {
        type: 'input',
        name: 'name',
        message: "What is the Team Manager's name ?",
      },
    {
    type: 'input',
    name: 'mId',
    message: "What is the Team Manager's ID ?",
  },
  {
    type: 'input',
    name: 'mEmail',
    message: "What is the Team Manager's Email?",
  },
  {
    type: 'input',
    name: 'office',
    message: "What is the Team Manager's Office number?",
  },
 
 
  
   ])

   .then((answers) => {
    const manager = new Manager(answers.name,answers.mId,answers.mEmail,answers.office)

    managerArr.push(manager);

    employeeSelection()

   
   }
   );