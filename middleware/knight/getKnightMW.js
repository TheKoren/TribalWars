/**
 * Gets a knight from the DB for the given knightID
 */
 const requireOption = require("../requireOption").requireOption;

 module.exports = function (objectrepository) {
     const KnightModel = requireOption(objectrepository, 'KnightModel');
    return (req, res, next) => {
        return KnightModel.findOne({_id: req.params.knightid}, (err, knight) => {
            if(err || !knight){
                return next(err);
            }
            res.locals.knight = knight;
            return next();
        })
    };
};