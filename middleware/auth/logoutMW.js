
const requireOption = require("../requireOption").requireOption;

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};