/**
 * Gets a knight from the DB for the given knightID
 */
 const requireOption = require("../requireOption").requireOption;

 module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.knight = 
        {
            _id: '1',
            name: 'Sir Arthur',
            xp: 'Amateur'
        }; 
        next();
    };
};