
// importing relevant class
const { Engineer } = require("../src/Engineer");

// creating test object using class
const testEngineer = new Engineer('Tom Hamilton', '19000', 'thomas@gmail.com', 'TomCodes99')



// testing the methods of the test object
describe('Engineer class, testing methods', () => {

    it('should return the role', () => {
        expect(testEngineer.getRole()).toBe('Engineer')
    });

    it('should return the fullName', () => {
        expect(testEngineer.getName()).toBe('Tom Hamilton')
    });

    it('should return id', () => {
        expect(testEngineer.getId()).toBe('19000')
    });

    it('should return email', () => {
        expect(testEngineer.getEmail()).toBe('thomas@gmail.com')
    });

    it('should return github username', () => {
        expect(testEngineer.GetGithub()).toBe('TomCodes99')
    });

});