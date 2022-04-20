const requireOption = require("../requireOption").requireOption;

 module.exports = function (objectrepository) {
    const UserModel = requireOption(objectrepository, 'UserModel');
    return function (req, res, next) {
        if((typeof req.body.email === 'undefined') ||
            (typeof req.body.username === 'undefined') ||
            (typeof req.body.password === 'undefined')){
                return next();
            }
            return UserModel.findOne({$or: [{email: req.body.email},{username: req.body.username}]}, (err, user) => {
                if(err){
                    return next(err);
                }
                if(user !== null)
                {
                    res.locals.error = 'Username / email already taken!';
                    return next();
                }else{
                    const newUser = new UserModel();
                    newUser.email = req.body.email;
                    newUser.username = req.body.username;
                    newUser.password = req.body.password;
                    return newUser.save(next);
                }
            })
    };
};