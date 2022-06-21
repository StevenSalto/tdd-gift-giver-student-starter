const express = require('express')
const morgan = require('morgan')
const gift = require("./routes/gift-exchange")

const app = express()
app.use("/gift-exchange", gift)
app.use(morgan("tiny"))
app.use(express.json());
app.get("/", async (req, res, next) => {
    res.status(200).json({ping: "pong"})
})

module.exports = app