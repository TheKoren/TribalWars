/**
 * Saves the User and Password in the database. Can be used on /forgottenpassword and /newaccount routes
 */
 const requireOption = require("../requireOption").requireOption;

 module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};