/**
 */
 const requireOption = require("../requireOption").requireOption;

 module.exports = function (objectrepository) {
    const UserModel = requireOption(objectrepository, 'UserModel');

    return function (req, res, next) {
        if ((typeof req.body.username === 'undefined') ||
            (typeof req.body.password === 'undefined')){

                return next();
            }
        return UserModel.findOne({
            username: req.body.username,
            password: req.body.passoword
        },(err, user) => {
                if(err){
                    return next(err);
                }

                if(user === null)
                {                
                    res.locals.error = "No user found";
                    return next();
                }
                if(user.password !== req.body.password)
                {
                    res.locals.error = "Wrong password!";
                    return next();
                }else{
                    req.session.user_id = user.user_id;
                    return req.session.save(err =>{
                        if(err){
                            return next(err);
                        }
                        return res.redirect('/login');
                    });
                }
            })
    };
};