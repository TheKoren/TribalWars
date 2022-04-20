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
            res.locals.village.knights = res.locals.village.knights - 1;
            return res.locals.village.save(err =>{
                if(err){
                    return next();
                }
                return res.redirect(`/village/view/${res.locals.village._id}`);
            });
        });
    };
};