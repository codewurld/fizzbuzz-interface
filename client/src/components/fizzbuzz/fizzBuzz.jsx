import './fizzBuzz.css';
import { useState } from 'react';

// function takes in no
// when divisible by 3 return fizz
// when divisible by 5 return buzz
// when dvisible by both return fizzbuzz
// when none of above conditions are met return number
// TDD test RPR


const FizzBuzz = () => {

    // set initial state to empty string
    // when button is clicked change state to output
    const [fizzBuzzGame, setFizzBuzzGame] = useState("");

    const handleFizzBuzzClick = (num) => {
        // check if no is divisible by 3 or 5 or combination of both
        // return fizzbuzz, fizz, buzz, or number
        if (num % 3 === 0 && num % 5 === 0) {
            return "fizzbuzz"
        } else if (num % 3 === 0) {
            return "fizz"
        } else if (num % 5 === 0) {
            return "buzz"
        } else {
            return num
        }
    }

    // test out random number
    console.log(handleFizzBuzzClick(20));

    // button onclick, print out game answer from handleFizzBuzzClick function with passed arg in console
    // change state and render result of game in p tag when button is clicked
    return (
        <div>
            <h2 id="myText">This is a SantanderBuzz Game</h2>
            <p>{fizzBuzzGame}</p>
            <button id="btn" onClick={() => setFizzBuzzGame(handleFizzBuzzClick(15))}>Click Me</button>
        </div>
    );
}

export default FizzBuzz;