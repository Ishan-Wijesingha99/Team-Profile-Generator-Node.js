
class Intern extends Employee {
    constructor(school) {
        this.school = school;
    }

    getSchool() {
        return school
    }

    getRole() {
        return 'Intern'
    }
}


module.exports = {Intern}