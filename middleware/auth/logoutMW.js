
const requireOption = require("../requireOption").requireOption;

module.exports = function (objectrepository) {
    return function (req, res, next) {
        return req.session.destroy(err => {
            if(typeof err !== 'undefined'){
                return next(err);
            }
            return res.redirect('/');
        })
    };
};