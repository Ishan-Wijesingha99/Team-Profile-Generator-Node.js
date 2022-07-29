
// importing relevant classes
const {Employee} = require('./src/Employee')
const {Engineer} = require('./src/Engineer')
const {Intern} = require('./src/Intern')
const {Manager} = require('./src/Manager')

// import modules we need
const inquirer = require('inquirer');
const { writeFile } = require('fs');

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

            allRolesArray.push(internArray)
            
        } else if(p.userChoice === 'Finish') {
            condition = 'Finish'

            console.log(allRolesArray);

            // this is where you create a html file and css file based off the roles 
            





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

