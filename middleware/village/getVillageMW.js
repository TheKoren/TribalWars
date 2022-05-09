/**
 * Gets a village from DB for the given :villageid
 */
 const requireOption = require("../requireOption").requireOption;

 module.exports = function (objectrepository) {
    const VillageModel = requireOption(objectrepository, 'VillageModel');
    return (req, res, next) => {
        return VillageModel.findOne({
            _id: req.params.villageid,
            _user: req.session.user_id
        },(err, village) => {
                if(err || !village){
                    return next(err);
                }

                res.locals.village = village;
                return next();
            });
    };
};