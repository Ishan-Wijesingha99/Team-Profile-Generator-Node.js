
// importing relevant class
const { Manager } = require("../lib/Manager");

// creating test object using class
const testManager = new Manager('Michael Jordan', '22000', 'mjordan@gmail.com', '19')



// testing the methods of the test object
describe('Manager class, testing methods', () => {

    it('should return the role', () => {
        expect(testManager.getRole()).toBe('Manager')
    });

    it('should return the fullName', () => {
        expect(testManager.getName()).toBe('Michael Jordan')
    });

    it('should return id', () => {
        expect(testManager.getId()).toBe('22000')
    });

    it('should return email', () => {
        expect(testManager.getEmail()).toBe('mjordan@gmail.com')
    });

    it('should return office number', () => {
        expect(testManager.getOfficeNumber()).toBe('19')
    });

});
