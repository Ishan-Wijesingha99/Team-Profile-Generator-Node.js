
// importing Employee class
const {Employee} = require('./Employee')

// extending Employee class to create Engineer class
class Engineer extends Employee {
    constructor(fullName, id, email, github) {
        super(fullName, id, email)
        this.github = github;
    }

    GetGithub() {
        return this.github
    }

    getRole() {
        return 'Engineer'
    }
}

// exporting Engineer class
module.exports = {Engineer}