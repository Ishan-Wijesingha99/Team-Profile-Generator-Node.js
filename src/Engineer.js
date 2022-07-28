
class Engineer extends Employee {
    constructor(github) {
        this.github = github;
    }

    GetGithub() {
        return github
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = {Engineer}