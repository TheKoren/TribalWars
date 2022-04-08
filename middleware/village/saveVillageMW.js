/**
 * Saves the village properties to the DB, or updates an already existing one with the same ID.
 * If it's not an update, the function creates a new entity.
 */

 module.exports = function (objectrepository) {
    return function (req, res, next) {
        if((typeof req.body.name === 'undefined') ||
        (typeof req.body.materials == 'undefined') ||
        (typeof req.body.knights == 'undefined'))
            {
                console.log("Body undefined");
                return next();
            }
            console.log("Saving village");
            console.log(req.body);
        return next();
    };
};