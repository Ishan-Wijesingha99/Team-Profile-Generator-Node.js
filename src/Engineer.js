
const {Employee} = require('./Employee')

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

module.exports = {Engineer}