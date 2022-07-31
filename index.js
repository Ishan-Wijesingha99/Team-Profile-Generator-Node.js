
// importing relevant classes
const {Employee} = require('./lib/Employee')
const {Engineer} = require('./lib/Engineer')
const {Intern} = require('./lib/Intern')
const {Manager} = require('./lib/Manager')

// import modules we need
const inquirer = require('inquirer');
const { writeFileSync } = require('fs');

// initialising variables
let condition;

let managerArray;
let engineerArray;
let internArray;

let managerObject;
let engineerObject;
let internObject;

let allRolesArray = [];
let engineerPromiseObject;
let internPromiseObject;



// If a team member is a manager, they will have an office number. If a team member is an engineer, they will have a GitHub username. If a team member is an intern, they will have a school. Create a function for these different options
const officeOrGithubOrSchool = function(roleObject) {
                
    if(roleObject.getRole() === 'Manager') {
        return `Office Number - ${roleObject.officeNumber}`
    } else if(roleObject.getRole() === 'Engineer') {
        return `GitHub - ${roleObject.github}`
    } else if(roleObject.getRole() === 'Intern') {
        return `School - ${roleObject.school}`
    }

}





// in order to use async-await, we must put all the code we wish to execute inside an async function
const asyncPrompter = async function() {

    // the first question is always about the manager
    await inquirer.prompt([
        {
            type: 'input',
            message: "Enter the team manager's name, employee ID, email address and office number. Give your answers seperated by a comma. EG - John Smith, 19900, johnsmith@gmail.com, 36",
            name: 'managerDetails' 
        },
    ]).then(managerDetailsObject => {

        // create array based of managerDetailsObject
        managerArray = managerDetailsObject.managerDetails.split(', ')

        // create an instance of the Manager class, based off the values in the array
        managerObject = new Manager(managerArray[0], managerArray[1], managerArray[2], managerArray[3])
        
        // push this instance into the allRolesArray
        allRolesArray.push(managerObject);
        
    })



    // to allow the user to add as many team members as they want, we must utilise a while-loop. This while-loop will keep running until the user finalises the team
    while(condition !== 'Finalise') {

        // user is asked whether they want to add an Engineer or Intern to the team, or finalise the team
        const p = await inquirer.prompt([
            {
                type: 'list',
                choices: ['Engineer', 'Intern', 'Finalise'],
                message: 'add an Engineer or an Intern or finalise',
                name: 'userChoice' 
            },
        ])



        if(p.userChoice === 'Engineer') {
            // if the user chose to add an Engineer, execute this code

            // change condition to Engineer
            condition = 'Engineer'

            // collect details about the team member from the user in the terminal
            engineerPromiseObject = await inquirer.prompt([
                {
                    type: 'input',
                    message: "Enter the Engineer's name, employee ID, email address and GitHub username. Give your answers seperated by a comma. EG - James Martin, 21000, jamesmartin@gmail.com, james99martin",
                    name: 'engineerDetails' 
                },
            ])

            // create array for answer given
            engineerArray = engineerPromiseObject.engineerDetails.split(', ')

            // create an instance from the Engineer class based off the array
            engineerObject = new Engineer(engineerArray[0], engineerArray[1], engineerArray[2], engineerArray[3])

            // push this instance into the allRolesArray
            allRolesArray.push(engineerObject)
            
        } else if(p.userChoice === 'Intern') {
            // if user chose to add an Intern, execute this code

            // change condition to Intern
            condition = 'Intern'

            // collect details about the team member from the user in the terminal
            internPromiseObject = await inquirer.prompt([
                {
                    type: 'input',
                    message: "Enter the Intern's name, employee ID, email address and school. Give your answers seperated by a comma. EG - Dylan Mark, 19897, dylanmark@gmail.com, Monash University",
                    name: 'internDetails' 
                },
            ])
            
            // create array for answer given
            internArray = internPromiseObject.internDetails.split(', ')
            
            // create an instance from the Intern class based off the array
            internObject = new Intern(internArray[0], internArray[1], internArray[2], internArray[3])

            // push this instance into the allRolesArray
            allRolesArray.push(internObject)
            
        } else if(p.userChoice === 'Finalise') {
            // if user chose to finalise the team, execute this code

            // change condition to Finalise
            condition = 'Finalise'
            
            // initialise an empty string
            let entireHTMLString = ''

            // function that loops through all the objects in the allRolesArray and outputs html for all of them
            let cardHTMLoutput = function(rolesArray) {
                rolesArray.forEach(eachObject => {
                    entireHTMLString = entireHTMLString.concat(`
        \n
        <div class="card">

            <div class="red-part">
                <p class="name">${eachObject.getName()}</p>
                <p class="position">${eachObject.getRole()}</p> 
            </div>

            <div class="grey-part">
                <p class="id">ID - ${eachObject.getId()}</p>
                <a class="email" href="mailto:${eachObject.getEmail()}">Email - ${eachObject.getEmail()}</a>
                <a class="office-github-school" ${eachObject.getRole() === 'Engineer' ? `href="https://github.com/${eachObject.github}" target="_blank"`: 'style="text-decoration:none;"'}>${officeOrGithubOrSchool(eachObject)}</a>
            </div>

        </div>
        \n
                    `)
                });
            }

            // call function so that entireHTMLString has HTML for all team members
            cardHTMLoutput(allRolesArray);



            // write a html file based off the roles given by the user 
            writeFileSync('./dist/index.html', `
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>

        <link rel="stylesheet" href="./index.css">

        <script defer src="../index.js"></script>
    </head>
    
    <body>
        <nav class="navbar">My Team</nav>

        <section class="team-cards">
            ${entireHTMLString}
        </section>
    </body>
</html>
            `)


            // write a css file based off the roles given by the user
            writeFileSync('./dist/index.css', `
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

.navbar {
    padding: 40px;
    text-align: center;
    font-size: 2rem;
    background-color: rgb(227, 93, 93);
    color: white;
    box-shadow: 0 4px 2px -2px black;
}

.team-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 80px;
}

.card {
    padding: 30px;
    background-color: rgb(237, 232, 232);
    margin: 10px;
    width: 300px;
    border-radius: 10px;
    box-shadow: 2px 2px 2px black;
}

.red-part {
    background-color: rgb(227, 93, 93);
    border: 2px solid black;
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    color: white;
}

.id, .email, .office-github-school {
    padding: 10px;
    margin: 5px;
    background-color: rgb(237, 232, 232);
    border: 2px solid black;
    border-radius: 10px;
}

a {
    display: block;
}
            `)

        }

    }

}



// call function
asyncPrompter()
















