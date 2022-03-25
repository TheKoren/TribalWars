/**
 * Saves the village properties to the DB, or updates an already existing one with the same ID.
 * If it's not an update, the function creates a new entity.
 * Can be used on both /village/addknight/:villageid and /knight/:villageid/:knightid/edit routes.
 */

 module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};