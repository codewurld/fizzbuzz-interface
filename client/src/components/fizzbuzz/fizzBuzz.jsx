import './fizzBuzz.css';

// function takes in no
// when divisible by 3 return fizz
// when divisible by 5 return buzz
// when dvisible by both return fizzbuzz
// when none of above conditions are met return number
// TDD test RPR


const FizzBuzz = () => {

    const handleFizzBuzzClick = (num) => {
        // check if no is divisible by 3 or 5 or combination of both
        // return fizzbuzz, fizz, buzz, or number
        if (num % 3 === 0 && num % 5 === 0) {
            console.log("fizzbuzz")
        } else if (num % 3 === 0) {
            console.log("fizz")
        } else if (num % 5 === 0) {
            console.log("buzz")
        } else {
            console.log(num)
        }
    }

    // test out random number
    console.log(handleFizzBuzzClick(20));

    // button onclick, print out game answer from handleFizzBuzzClick function with passed arg in console
    return (
        <div>
            <button id="btn" onClick={() => handleFizzBuzzClick(15)}>SantanderBuzz</button>
        </div>
    );
}

export default FizzBuzz;