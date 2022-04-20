/**
 * Saves the village properties to the DB, or updates an already existing one with the same ID.
 * If it's not an update, the function creates a new entity.
 * Can be used on both /village/addknight/:villageid and /knight/:villageid/:knightid/edit routes.
 */
 const requireOption = require("../requireOption").requireOption;

 module.exports = function (objectrepository) {
     const KnightModel = requireOption(objectrepository, 'KnightModel');

    return (req, res, next) => {
        if(typeof req.body.knightName === 'undefined'){
            return next();
        }
        if(typeof res.locals.knight === 'undefined')
        {
            res.locals.knight = new KnightModel();
            res.locals.knight.experience = "Novice";
            res.locals.knight._home = res.locals.village;
            res.locals.village.knights = res.locals.village.knights + 1;
            res.locals.knight.save(err => {
                if(err){
                    return next(err);
                }
                return res.locals.village.save(err => {
                    if(err){
                        return next(err);
                    }
                    return res.redirect(`/village/view/${res.locals.village._id}`);
                });
            });
        }else{
            res.locals.knight.name = req.body.knightName;
            res.locals.knight.save(err => {
                if(err){
                    return next(err);
                }
                return res.locals.village.save(err => {
                    if(err){
                        return next(err);
                    }
                    return res.redirect(`/village/view/${res.locals.village._id}`);
                });
            });
        }
    };
};