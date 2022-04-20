/**
 * Saves the village properties to the DB, or updates an already existing one with the same ID.
 * If it's not an update, the function creates a new entity.
 */

 const requireOption = require("../requireOption").requireOption;

 module.exports = function (objectrepository) {
    const VillageModel = requireOption(objectrepository, 'VillageModel');
    const UserModel = requireOption(objectrepository, 'UserModel');
    return (req, res, next) => {
        if(typeof req.body.villageNameInput === 'undefined')             {
                return next();
            }
            if(typeof res.locals.village === 'undefined'){
                res.locals.village = new VillageModel();
                res.locals.village.name = req.body.villageNameInput;
                res.locals.village.materials = 400;
                res.locals.village.knights = 0;
                
                UserModel.findOne({_id: req.session.user_id},
                    (err, user) =>{
                        if(err || !user){
                            return next(err);
                        }
                        return res.locals.village._owner = user;
                    })

                res.locals.village.save(err => {
                    if(err){
                        return next(err);
                    }
                    return res.redirect('/village')
                })
            }
            else{
                res.locals.village.name = req.body.villageNameInput;
                res.locals.village.save(err => {
                    if(err) {
                        return next(err);
                    }
                    return res.redirect(`/village/edit/${res.locals.village._id}`);
                    });            
                }
    };
};