/**
 * Deletes a knight from the DB for the given knightID
 */
 const requireOption = require("../requireOption").requireOption;

 module.exports = function (objectrepository) {
    return (req, res, next) => {
        if(typeof res.locals.knight === 'undefined'){
            return next();
        }

        return res.locals.knight.remove(err => {
            if(err){
                return next(err)
            }
            return res.redirect(`/village/view/${res.locals.village._id}`);
        })
    };
};