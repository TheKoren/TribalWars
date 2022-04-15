/**
 * Saves the village properties to the DB, or updates an already existing one with the same ID.
 * If it's not an update, the function creates a new entity.
 */

 const requireOption = require("../requireOption").requireOption;

 module.exports = function (objectrepository) {
    const VillageModel = requireOption(objectrepository, 'VillageModel');
    return function (req, res, next) {
        if(typeof req.body.name === 'undefined')             {
                console.log("Body undefined");
                return next();
            }
            if(typeof res.locals.village === 'undefined'){
                res.locals.village = new VillageModel();
                res.locals.village.name = req.body.name;
                res.locals.village.materials = 400;
                res.locals.village.knights = 0;

                res.locals.village.save(err => {
                    if(err){
                        return next(err);
                    }
                    res.redirect('/village')
                })
            }
            else{
                res.locals.village.name = req.body.name;
                res.locals.village.save(err => {
                    if(err) {
                        return next(err);
                    }
                    res.redirect('/village/edit/${res.locals.village._id}');
                    });            
                }
    };
};