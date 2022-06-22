const express = require('express')
const {ExpressError, BadRequestError, NotFoundError} = require('../utils/errors')
const gift_exchange = express.Router()
const GiftExchange = require('../models/gift-exchange')

gift_exchange.post('/pairs', async (req, res, next) => {
    try {
    GiftExchange.pairs(req)
    }catch(error) {
        next(new BadRequestError())
    }
})

gift_exchange.post('/traditional', async (req, res) => {
    res.status(200).json({ping: "e"})
})

try {

}catch(error) {

}


module.exports = gift_exchange