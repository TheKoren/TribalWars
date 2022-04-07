/**
 * Gets all the Knights from the DB for the given villageID
 */

 module.exports = function (objectrepository) {
    return function (req, res, next) {

        res.locals.knights = [
            {
                _id : 'id1',
                name: 'Nev1',
                xp: 'Novice'
            },
            {
                _id : 'id2',
                name: 'Nev2',
                xp: 'Pro'
            }
        ];
        next();
    };
};