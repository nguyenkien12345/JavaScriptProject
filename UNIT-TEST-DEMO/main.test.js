import { isOddNumber, isEvenNumber, countOddNumbers ,countEvenNumbers, Caculator, isLeapYear } from './main.js';

const expect = chai.expect;
// --------------------------------------------------------------------------------------------------------------------------------------
describe('function isOddNumber', () => {
    it('should be true if 3', () => {
        const result = isOddNumber(3);
        expect(result).to.be.true;
    });

    it('should be false if 2', () => {
        const result = isOddNumber(2);
        expect(result).to.be.false;
    });
})
// --------------------------------------------------------------------------------------------------------------------------------------
describe('function isEvenNumber', () => {
    it('should be true if 4', () => {
        const result = isEvenNumber(4);
        expect(result).to.be.true;
    });

    it('should be false if 3', () => {
        const result = isEvenNumber(3);
        expect(result).to.be.false;
    });
})
// --------------------------------------------------------------------------------------------------------------------------------------
describe('function countEvenNumbers', () => {
    it('should be 0 if null', () => {
        const result = countEvenNumbers(null);
        expect(result).to.equal(0);
    });
    it('should be 0 if []', () => {
        const result = countEvenNumbers([]);
        expect(result).to.equal(0);
    });
    it('should equal 1 if [1,2,3]', () => {
        const result = countEvenNumbers([1,2,3]);
        expect(result).to.equal(1);
    });
    it('should equal 2 if [1,2,3,4]', () => {
        const result = countEvenNumbers([1,2,3,4]);
        expect(result).to.equal(2);
    });
})
// --------------------------------------------------------------------------------------------------------------------------------------
describe('function countOddNumbers', () => {
    it('should be 0 if null', () => {
        const result = countOddNumbers(null);
        expect(result).to.equal(0);
    });
    it('should be 0 if []', () => {
        const result = countOddNumbers([]);
        expect(result).to.equal(0);
    });
    it('should equal 1 if [1,2,3]', () => {
        const result = countOddNumbers([1,2,3]);
        expect(result).to.equal(2);
    });
    it('should equal 2 if [1,2,3,4]', () => {
        const result = countOddNumbers([1,2,3,4]);
        expect(result).to.equal(2);
    });
})
// --------------------------------------------------------------------------------------------------------------------------------------
describe('Caculator', () => {
    it('The result should be 30 if you do the addition between 10 and 20', () => {
        // Set up
        const caculator_add = new Caculator();
        // Run
        const result = caculator_add.Summation(10, 20);
        // Assert
        expect(result).to.equal(30);
    });
    it('The result should be 50 if you do the addition between 100 and 50', () => {
        // Set up
        const caculator_sub = new Caculator();
        // Run
        const result = caculator_sub.Subtraction(100, 50);
        // Assert
        expect(result).to.equal(50);
    });
    it('The result should be 5000 if you do the addition between 100 and 50', () => {
        // Set up
        const caculator_mul = new Caculator();
        // Run
        const result = caculator_mul.Multiplication(100, 50);
        // Assert
        expect(result).to.equal(5000);
    });
    it('The result should be 22 if you do the addition between 44 and 2', () => {
        // Set up
        const caculator_div = new Caculator();
        // Run
        const result = caculator_div.Division(44, 2);
        // Assert
        expect(result).to.equal(22);
    });
})
// --------------------------------------------------------------------------------------------------------------------------------------
describe('function isLeapYear', () => {
    it('should be false if Leap Year is 1990', () => {
        const result = isLeapYear(1990);
        expect(result).to.be.false;
    });
    it('should be false if Leap Year is 2003', () => {
        const result = isLeapYear(2003);
        expect(result).to.be.false;
    });
    it('should be true if Leap Year is 400', () => {
        const result = isLeapYear(400);
        expect(result).to.be.true;
    });
    it('should be true if Leap Year is 2000', () => {
        const result = isLeapYear(2000);
        expect(result).to.be.true;
    });
})

