/**
 * Checks the password from POST. If it's the right one, creates a session for the user, and redirects to /village
 */
 const requireOption = require("../requireOption").requireOption;

 module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
}; 