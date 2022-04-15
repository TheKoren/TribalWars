/**
 * Gets a village from DB for the given :villageid
 */
 const requireOption = require("../requireOption").requireOption;

 module.exports = function (objectrepository) {
    const VillageModel = requireOption(objectrepository, 'VillageModel');
    return function (req, res, next) {
        VillageModel.findOne({_id: req.params.villageid},
            (err, village) => {
                if(err || !village){
                    return next(err);
                }

                res.locals.village = village;
                return next();
            });
    };
};