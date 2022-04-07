/**
 * Renders the values into the html webpage
 */

 module.exports = function (objectrepository, viewName) {
    return function (req, res, next) {
        res.render(viewName, res.locals);
        console.log('render: ' + viewName);
        console.log(res.locals);
    };
};