
class Employee {
    constructor(firstName, id, email) {
        this.firstName = firstName;
        this.id = id;
        this.email = email;
    }

    getName() {
        return firstName
    }

    getId() {
        return id
    }
   
    getEmail() {
        return email
    }

    getRole() {
        return 'Employee'
    }

}

module.exports = {Employee}