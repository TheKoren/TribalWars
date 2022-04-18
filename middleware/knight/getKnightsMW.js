/**
 * Gets all the Knights from the DB for the given villageID
 */
 const requireOption = require("../requireOption").requireOption;

 module.exports = function (objectrepository) {
     const KnightModel = requireOption(objectrepository, 'KnightModel');
    return (req, res, next) => {
        if(typeof res.locals.village === 'undefined'){
            return next();
        }

        return KnightModel.find({_village: res.locals.village._id}, (err, knights) => {
            if(err){
                return next(err);
            }

            res.locals.knights = knights;
            return next();
        });
    };
};