/**
 * Renders the values into the html webpage
 */

const requireOption = require('./requireOption');

 module.exports = function (objectrepository, viewName) {
    return function (req, res, next) {
        res.render(viewName, res.locals);
    };
};