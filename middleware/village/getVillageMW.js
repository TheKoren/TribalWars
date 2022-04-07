/**
 * Gets a village from DB for the given :villageid
 */

 module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.village =
            {
                _id : '1',
                name: 'Nev1',
                materials: '420',
                knights: '2'
            };
        return next();
    };
};