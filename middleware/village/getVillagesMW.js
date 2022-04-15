/**
 * Gets all villages from DB
 */

const requireOption = require("../requireOption").requireOption;

 module.exports = function (objectrepository) {

    const VillageModel = requireOption(objectrepository, 'VillageModel');

    return function (req, res, next) {
        VillageModel.find({}, function (err, villages) {
            if(err){
                return next(err);
            }

            res.locals.villages = villages;
            return next();
        });
    };
};