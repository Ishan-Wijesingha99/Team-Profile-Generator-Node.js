
// importing relevant classes
const {Employee} = require('./src/Employee')
const {Engineer} = require('./src/Engineer')
const {Intern} = require('./src/Intern')
const {Manager} = require('./src/Manager')

// import modules we need
const inquirer = require('inquirer');
const { writeFileSync } = require('fs');

let condition;
let answerObject;
let managerArray;
let engineerArray;
let internArray;

let managerObject;
let engineerObject;
let internObject;

let allRolesArray = [];
let engineerP;
let internP;




// // PUT ASYNC AWAIT INTO TRY-CATCH BLOCKS!!!





const asyncPrompter = async function() {

    // the first question is always about the manager
    await inquirer.prompt([
        {
            type: 'input',
            message: "Enter the team manager's name, employee ID, email address and office number. Give your answers seperated by a comma. EG - John Smith, 19983, johnsmith@gmail.com, 36",
            name: 'managerDetails' 
        },
    ]).then(managerDetailsObject => {

        // create array basef of managerDetailsObject
        managerArray = managerDetailsObject.managerDetails.split(', ')
        managerArray.push('Manager')

        managerObject = new Manager(managerArray[0], managerArray[1], managerArray[2], managerArray[3])
        allRolesArray.push(managerObject);
        
    })





    while(condition !== 'Finish') {

        const p = await inquirer.prompt([
            {
                type: 'list',
                choices: ['Engineer', 'Intern', 'Finish'],
                message: 'add an Engineer or an Intern or finish',
                name: 'userChoice' 
            },
        ])



        if(p.userChoice === 'Engineer') {
            condition = 'Engineer'

            engineerP = await inquirer.prompt([
                {
                    type: 'input',
                    message: "Enter the Engineer's name, employee ID, email address and GitHub username. Give your answers seperated by a comma. EG - James Martin, 20119, jamesmartin@gmail.com, james99martin",
                    name: 'engineerDetails' 
                },
            ])

            // using arrays
            engineerArray = engineerP.engineerDetails.split(', ')

            // using classes and objects
            engineerObject = new Engineer(engineerArray[0], engineerArray[1], engineerArray[2], engineerArray[3])


            allRolesArray.push(engineerObject)
          
            
        } else if(p.userChoice === 'Intern') {
            condition = 'Intern'

            internP = await inquirer.prompt([
                {
                    type: 'input',
                    message: "Enter the Intern's name, employee ID, email address and school. Give your answers seperated by a comma. EG - Dylan Mark, 19897, dylanmark@gmail.com, Monash University",
                    name: 'internDetails' 
                },
            ])
            
            // using arrays
            internArray = internP.internDetails.split(', ')
            

            // using classes and objects
            internObject = new Intern(internArray[0], internArray[1], internArray[2], internArray[3])


            allRolesArray.push(internObject)
            
        } else if(p.userChoice === 'Finish') {
            condition = 'Finish'

            console.log(allRolesArray);





           

            // function that outputs Office Number, GitHub, or School
            const officeOrGithubOrSchool = function(roleObject) {
                

                if(roleObject.getRole() === 'Manager') {
                    return `Office Number - ${roleObject.officeNumber}`
                } else if(roleObject.getRole() === 'Engineer') {
                    return `GitHub - ${roleObject.github}`
                } else if(roleObject.getRole() === 'Intern') {
                    return `School - ${roleObject.school}`
                }

            }





            // function that loops through all the roles and outputs html all of those cards
            let entireHTMLString = ''

            let cardHTMLoutput = function(rolesArray) {
                rolesArray.forEach(eachObject => {
                    entireHTMLString = entireHTMLString.concat(`
                    \n
                    <div class="card">

                        <div class="red-part">
                            <p class="name">${eachObject.fullName}</p>
                            <p class="position">${eachObject.getRole()}</p> 
                        </div>

                        <div class="grey-part">
                            <p class="id">ID - ${eachObject.id}</p>
                            <p class="email">Email - ${eachObject.email}</p>
                            <p class="office-github-school">${officeOrGithubOrSchool(eachObject)}</p>
                        </div>

                    </div>
                    \n
                    `)
                });
            }

            cardHTMLoutput(allRolesArray);




            // this is where you create a html file and css file based off the roles 
            writeFileSync('./dist/index.html', `
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>

        <link rel="stylesheet" href="./index2.css">

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
            `)

        }

    }

}



asyncPrompter()
















