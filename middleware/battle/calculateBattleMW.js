/**
 * Calculates the result of the Battle between 2 villages. The battle algorithm will work with a simple random number generator, the more
 * knights the villages have, the more chance they have to win the battle.
 */
 const requireOption = require("../requireOption").requireOption;

 module.exports = function (objectrepository) {
     const VillageModel = requireOption(objectrepository, 'VillageModel');
     const KnightModel = requireOption(objectrepository, 'KnightModel');
    return function (req, res, next) {
        if(typeof req.body.target === 'undefined'){
            return next();
        }
        if(res.locals.village.knights === 0){
            res.locals.error = "No knights available for attack!";
            return next();
        }
        return VillageModel.findOne({_id: req.body.target}, (err, enemy) => {
            if(err){
                return next(err);
            }
            return KnightModel.find({_home: enemy._id}, (err2, enemyKnights) => {
                if(err2){
                    return next(err2);
                }
                let ownPower = 0;
                let enemyPower = 0;
                res.locals.knights.forEach(item => {
                    ownPower += item.xp;
                });
                enemyKnights.forEach(item => {
                    enemyPower += item.xp;
                });
                ownPower = Math.floor(Math.random() * 5) + ownPower;
                enemyPower = Math.floor(Math.random() * 5) + enemyPower;
                if(ownPower > enemyPower){
                    var loss = (enemy.materials < 100) ? enemy.materials : 100;
                    res.locals.village.materials += loss;
                    enemy.materials -= loss;
                    res.locals.looted = loss;
                    res.locals.report = true;
                    res.locals.knights.forEach(item => {
                        item.xp += 1;
                    });
                }
                else{
                    res.locals.report = false;
                }
                enemyKnights.forEach(item => {
                    item.xp += 1;
                });

                return next();
            })
        }
    };
};