/**
 * Deletes a village from the DB for the given villageID
 */
 const requireOption = require("../requireOption").requireOption;

 module.exports = function (objectrepository) {
    return function (req, res, next) {
        if(typeof res.locals.village === 'undefined'){
            return next();
        }
        
        res.locals.village.remove(err => {
            if(err){
                return next(err);
            }
            
            return res.redirect('/village')
        })
    };
};

