/**
 * Deletes a village from the DB for the given villageID
 */

 module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("Deleting village");
        next();
    };
};

