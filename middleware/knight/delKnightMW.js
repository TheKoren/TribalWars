/**
 * Deletes a knight from the DB for the given knightID
 */
 const requireOption = require("../requireOption").requireOption;

 module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("Deleting knight");
        next();
    };
};