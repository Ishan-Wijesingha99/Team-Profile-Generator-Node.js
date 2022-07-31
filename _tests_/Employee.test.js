// importing relevant class
const { Employee } = require("../lib/Employee");

// creating test object using class
const testEmployee = new Employee('Ishan Wijesingha', '13000', 'ishanwijes@gmail.com')



// testing the methods of the test object
describe('Employee class, testing methods', () => {

    it('should return the role', () => {
        expect(testEmployee.getRole()).toBe('Employee')
    });

    it('should return the fullName', () => {
        expect(testEmployee.getName()).toBe('Ishan Wijesingha')
    });

    it('should return id', () => {
        expect(testEmployee.getId()).toBe('13000')
    });

    it('should return email', () => {
        expect(testEmployee.getEmail()).toBe('ishanwijes@gmail.com')
    });

});