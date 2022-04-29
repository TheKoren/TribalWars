const requireOption = require("../requireOption").requireOption;

module.exports = function (objectrepository) {
    return function(req,res,next){
        if(req.session.result){
            res.locals.result = req.session.result;
            console.log(res.locals.knights)
            req.session.result = null;
            return next();
        }
        else{
            res.locals.error = "No valid result for battle!";
            return next();
        }
    };
};