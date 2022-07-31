
// importing Employee class
const {Employee} = require('./Employee')

// extending Employee class to create Intern class
class Intern extends Employee {
    constructor(fullName, id, email, school) {
        super(fullName, id, email)
        this.school = school;
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return 'Intern'
    }
}

// exporting Intern class
module.exports = {Intern}