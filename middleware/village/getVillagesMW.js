/**
 * Gets all villages from DB
 */

 module.exports = function (objectrepository) {
    return function (req, res, next) {
            res.locals.villages = [
                {
                    _id : '1',
                    name: 'Nev1',
                    materials: '420',
                    knights: '2'
                },
                {
                    _id : '2',
                    name: 'Nev2',
                    materials: '69',
                    knights: '1'
                }
            ];
            return next();
    };
};