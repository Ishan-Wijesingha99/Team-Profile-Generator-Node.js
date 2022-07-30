
const { Intern } = require("../src/Intern");

const testIntern = new Intern('Hugh Jackman', '11000', 'hugh@gmail.com', 'Monash University')



describe('Intern class, testing methods', () => {

    it('should return the role', () => {
        expect(testIntern.getRole()).toBe('Intern')
    });

    it('should return the fullName', () => {
        expect(testIntern.getName()).toBe('Hugh Jackman')
    });

    it('should return id', () => {
        expect(testIntern.getId()).toBe('11000')
    });

    it('should return email', () => {
        expect(testIntern.getEmail()).toBe('hugh@gmail.com')
    });

    it('should return school', () => {
        expect(testIntern.getSchool()).toBe('Monash University')
    });

});
