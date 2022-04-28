/**
 * Gets all villages from DB
 */

const { default: mongoose } = require("mongoose");

const requireOption = require("../requireOption").requireOption;

 module.exports = function (objectrepository, ownVillage) {
    const VillageModel = requireOption(objectrepository, 'VillageModel');
    if(ownVillage){
        return (req, res, next) => {
            return VillageModel.find({_user: req.session.user_id}, function (err, villages) {
                if(err){
                    return next(err);
                }
    
                res.locals.villages = villages;
                return next();
            });
        };
    }
    else{
        return (req, res, next) => {
            return VillageModel.find({_user: { $ne: req.session.user_id}}, function (err, villages) {
                if(err){
                    return next(err);
                }
    
                res.locals.enemyvillages = villages;
                return next();
            });
        };
    }
};