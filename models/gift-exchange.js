const express = require("express")
const {ExpressError, BadRequestError, NotFoundError} = require('../utils/errors')


class GiftExchange {
    static pairs(names) {
        let returnPairs = [];
        let len = names.length;
        if(names.length % 2 != 0) {
            throw new BadRequestError();
        }
        for(let i = len/2; i > 0; i--){
            let ind1 = Math.floor(Math.random() * (i));
            let ind2 = Math.floor(Math.random() * (i));
            while(ind1 == ind2) {
               console.log(ind1, ind2);
               ind2 = Math.floor(Math.random() * (i+1));
            }
            returnPairs.push([names[ind1], names[ind2]]);
        }
        console.log(returnPairs);
        return returnPairs;
    }
    static traditional(names) {
        console.log("in traditional: ", names);
    }
}

module.exports = GiftExchange;