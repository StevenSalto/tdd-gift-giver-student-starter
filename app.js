const express = require('express')
const morgan = require('morgan')
const gift = require("./routes/gift-exchange")
const {ExpressError, BadRequestError, NotFoundError} = require('./utils/errors')

const app = express()

app.use("/gift-exchange", gift)
app.use(morgan("tiny"))
app.use(express.json());

app.get("/", async (req, res, next) => {
    res.status(200).json({ping: "pong"})
})



app.use((req, res, next) => {
    let err = new NotFoundError;
    console.log(err)
    return next(err);
})

app.use((req, res, next, error) => {
    console.log(error.status, error.message)
    const status = error.status || 500;
    const message = error.message;
    return res.status(status).json({
        error: {message, status}
    })
})

module.exports = app