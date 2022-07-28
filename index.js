
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



const asyncPrompter = async function() {

    while(condition !== 'Finish') {

        answerObject = await inquirer.prompt([
            {
                type: 'list',
                choices: ['Engineer', 'Intern', 'Finish'],
                name: 'userChoice' 
            },
        ]).then(answerObject => {
            console.log(answerObject)

            if(answerObject.userChoice === 'Engineer') {
                condition = 'Engineer'
            } else if(answerObject.userChoice === 'Intern') {
                condition = 'Intern'
            } else if(answerObject.userChoice === 'Finish') {
                condition = 'Finish'
            }
        })

    }

}

asyncPrompter()





// while(condition !== 'Finish') {

//     asyncPrompter()

// }







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

