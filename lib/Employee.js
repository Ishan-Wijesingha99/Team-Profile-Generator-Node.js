
// creating Employee class
class Employee {
    constructor(fullName, id, email) {
        this.fullName = fullName;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.fullName
    }

    getId() {
        return this.id
    }
   
    getEmail() {
        return this.email
    }

    getRole() {
        return 'Employee'
    }

}

// exporting Employee class
module.exports = {Employee}