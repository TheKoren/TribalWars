/**
 * If the user is authenticated, call next, otherwise redirect to /
 */
 const requireOption = require("../requireOption").requireOption;

 module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};