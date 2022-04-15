/**
 * Calculates the result of the Battle between 2 villages. The battle algorithm will work with a simple random number generator, the more
 * knights the villages have, the more chance they have to win the battle.
 */
 const requireOption = require("../requireOption").requireOption;

 module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("Calculating battle");
        next();
    };
};