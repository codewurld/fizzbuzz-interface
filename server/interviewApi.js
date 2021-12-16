// get express
const express = require('express');

// call instance of express
const app = express();

// enable data to be converted to json
app.use(express.json());

// declare PORT 
PORT = 8080

// ROUTES
// get object if url link is interview 
// if ok respond with 200 status and payload of today's interview information
// else catch user or server error

app.get('/interview', (req, res) => {
    try {
        return res.status(200).send.json({
            success: true,
            interviewer: "Tim Snow",
            interviewee: "Shola Quadri",
            testType: "Fizz Buzz",
            durationInHours: 1
        });
    } catch (err) {
        if (err.name === "ValidationError") {
            return res.status(400).json({
                success: false,
                error: "User Error"
            })
        } else {
            return res.status(500).json({
                success: false,
                error: "Server Error"
            })
        }
    }


})

// activate server 

app.listen(PORT, console.log(`Server Running on ${PORT}`))

module.exports = app
