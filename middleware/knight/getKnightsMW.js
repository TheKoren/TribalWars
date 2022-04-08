/**
 * Gets all the Knights from the DB for the given villageID
 */

 module.exports = function (objectrepository) {
    return function (req, res, next) {

        res.locals.knights = [
            {
                _id : '2',
                name: 'Nev1',
                xp: 'Novice'
            },
            {
                _id : '3',
                name: 'Nev2',
                xp: 'Pro'
            }
        ];
        next();
    };
};