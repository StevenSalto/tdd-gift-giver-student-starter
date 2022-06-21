const express = require("express")

class GiftExchange {
    static pairs(names) {
        let returnPairs = [];
        if(names.length % 2 != 0) {
            return "cannot be odd";
        } else {
            while(names.length > 0){
                let ind1 = Math.random(0, names.length);
                let ind2 = Math.random(0, names.length);
                while(ind1 == ind2) {
                    ind2 = Math.random(0, names.length)
                }
                returnPairs += (names[ind1], names[ind2]);
                names.splice(ind1, 1);
                names.splice(ind2, 1);
            }
        }
    }
    static traditional(names) {
        while(names.length > 0){
            let ind1 = Math.random(0, names.length);
            let ind2 = Math.random(0, names.length);
            while(ind1 == ind2) {
                ind2 = Math.random(0, names.length)
            }
            returnPairs += names[ind1]+" is giving a gift to "+names[ind2];
            names.splice(ind1, 1);
            names.splice(ind2, 1);
        }
    }
}

module.exports = GiftExchange;