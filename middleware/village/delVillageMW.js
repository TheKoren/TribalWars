/**
 * Deletes a village from the DB for the given villageID
 */
 const requireOption = require("../requireOption").requireOption;

 module.exports = function (objectrepository) {
    return async (req, res, next) => {
        if(typeof res.locals.village === 'undefined'){
            return next();
        }
        
        for(var i of res.locals.knights){
            await i.remove(err => {
                if(err){
                   return next(err);
                }
            });
        }

        await res.locals.village.remove(err => {
            if(err){
                return next(err);
            }
            
            return res.redirect('/village');
        })
    };
};

