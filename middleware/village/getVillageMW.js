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
                if(err){
                    return next(err);
                }
                if(village === null)
                {
                    return res.redirect('/village');
                }

                res.locals.village = village;
                return next();
            });
    };
};