const express = require('express')

const gift_exchange = express.Router()

gift_exchange.post('/pairs', async (req, res) => {
    res.status(200).json({ping: "e"})
})

gift_exchange.post('/traditional', async (req, res) => {
    res.status(200).json({ping: "e"})
})

module.exports = gift_exchange