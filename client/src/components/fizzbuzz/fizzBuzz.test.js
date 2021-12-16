// get fizbuzzfunction from js file
const app = require('./fizzBuzz');

// test to check fizzbuzz works
// Red Green Refactor - Fail, Pass and then refactor where possible
// build describe block
// test if fizz is returned when no is divisble by 3
// match function with arg toEqual keyword: fizz and return

describe('Fizzbuzz Game Works', () => {
    test('Fizz is returned when no is divisible by 3', () => {
        return expect(fizzBuzz(9)).toEqual("fizz")
    })
})