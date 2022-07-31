
// importing Employee class
const {Employee} = require('./Employee')

// extending Employee class to create Manager class
class Manager extends Employee {
    constructor(fullName, id, email, officeNumber) {
        super(fullName, id, email)
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return 'Manager'
    }
}

// exporting Manager class
module.exports = {Manager}