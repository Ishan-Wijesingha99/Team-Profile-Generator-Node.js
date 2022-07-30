
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

let allRolesArray = [];
let engineerP;
let internP;




// // PUT ASYNC AWAIT INTO TRY-CATCH BLOCKS!!!

//    // add another inquirer.prompt in here to collect data about engineer
//    const asyncEngineerFunction = async function() {

//     const p = await inquirer.prompt([
//         {
//             type: 'input',
//             message: "Enter the Engineer's name, employee ID, email address and GitHub username. Give your answers seperated by a comma. EG - James Martin, 20119, jamesmartin@gmail.com, james99martin",
//             name: 'engineerDetails' 
//         },
//     ]).then(engineerDetailsObject => {

//         engineerArray = engineerDetailsObject.engineerDetails.split(', ')

//         allRolesArray.push(engineerArray)
        
//     })

// }


// const asyncInternFunction = async function() {

//     const p = await inquirer.prompt([
//         {
//             type: 'input',
//             message: "Enter the Intern's name, employee ID, email address and school. Give your answers seperated by a comma. EG - Dylan Mark, 19897, dylanmark@gmail.com, dylan101",
//             name: 'internDetails' 
//         },
//     ]).then(internDetailsObject => {

//         internArray = internDetailsObject.internDetails.split(', ')

//         allRolesArray.push(internArray)
        
//     })   

// }




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
        allRolesArray.push(managerArray);
        
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

            engineerArray = engineerP.engineerDetails.split(', ')
            engineerArray.push('Engineer')

            allRolesArray.push(engineerArray)
          
            
        } else if(p.userChoice === 'Intern') {
            condition = 'Intern'

            internP = await inquirer.prompt([
                {
                    type: 'input',
                    message: "Enter the Intern's name, employee ID, email address and school. Give your answers seperated by a comma. EG - Dylan Mark, 19897, dylanmark@gmail.com, Monash University",
                    name: 'internDetails' 
                },
            ])
            
            internArray = internP.internDetails.split(', ')
            internArray.push('Intern')

            allRolesArray.push(internArray)
            
        } else if(p.userChoice === 'Finish') {
            condition = 'Finish'

            console.log(allRolesArray);





            // function to output what position
            const positionOutput = function(arrayOfSingleRole) {
                const lastEntree = arrayOfSingleRole.slice(-1)

                if(lastEntree[0] === 'Manager') {
                    return 'Manager'
                } else if(lastEntree[0] === 'Engineer') {
                    return 'Enginner'
                } else if(lastEntree[0] === 'Intern') {
                    return 'Intern'
                }
            }

            // function that outputs Office Number, GitHub, or School
            const officeOrGithubOrSchool = function(arrayOfSingleRole) {
                const lastEntree = arrayOfSingleRole.slice(-1)

                if(lastEntree[0] === 'Manager') {
                    return 'Office Number'
                } else if(lastEntree[0] === 'Engineer') {
                    return 'GitHub'
                } else if(lastEntree[0] === 'Intern') {
                    return 'School'
                }
            }





            // function that loops through all the roles and outputs html all of those cards
            let entireHTMLString = ''

            let cardHTMLoutput = function(rolesArray) {
                rolesArray.forEach(eachArray => {
                    entireHTMLString = entireHTMLString.concat(`
                    \n
                    <div class="card">

                        <div class="red-part">
                            <p class="name">${eachArray[0]}</p>
                            <p class="position">${positionOutput(eachArray)}</p> 
                        </div>

                        <div class="grey-part">
                            <p class="id">ID - ${eachArray[1]}</p>
                            <p class="email">Email - ${eachArray[2]}</p>
                            <p class="office-github-school">${officeOrGithubOrSchool(eachArray)} - ${eachArray[3]}</p>
                        </div>

                    </div>
                    \n
                    `)
                });
            }

            cardHTMLoutput(allRolesArray);




            // this is where you create a html file and css file based off the roles 
            writeFileSync('./dist/index2.html', `
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

            writeFileSync('./dist/index2.css', `
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














// while(condition !== 'Finish') {

//     console.log('hello1')

//     await asyncPrompter()

//     console.log('hello2')

//     if(answerObject.userChoice === 'Engineer') {
//         condition = 'Engineer'
//     } else if(answerObject.userChoice === 'Intern') {
//         condition = 'Intern'
//     } else if(answerObject.userChoice === 'Finish') {
//         condition = 'Finish'
//     }

//     console.log('hello3')

// }




// inquirer.prompt([
//     {
//         type: 'list',
//         choices: ['yeet1', 'yeet2', 'yeet3'],
//         // message: "Enter the team manager's name, employee ID, email address, and office number. Give your answers seperated by commas",
//         name: 'manager',
//         loop: true
//     }
// ]).then(answer => {
//     // make manager part in html
//     console.log(answer)

// })



// while loop
// can either be 'Engineer', 'Intern' or 'Finish'


// while(condition !== 'Finish') {
    
//     inquirer.prompt([
//         {
//             type: 'list',
//             choices: ['Engineer', 'Intern', 'Finish'],
//             name: 'userChoice' 
//         },
    
//     ]).then(answer => {
//         if(answer.userChoice === 'Engineer') {
//             condition = 'Engineer'
//         } else if(answer.userChoice === 'Intern') {
//             condition = 'Intern'
//         } else if(answer.userChoice === 'Finish') {
//             condition = 'Finish'
//         }
//     })


// }

