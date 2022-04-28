const requireOption = require("../requireOption").requireOption;

 module.exports = function (objectrepository) {
     const UserModel = requireOption(objectrepository, 'UserModel');
    return (req, res, next) => {
        if(typeof req.body.email === 'undefined'){
                return next();
            }
        return UserModel.findOne({email: req.body.email}, (err, user) =>
        {
            if(err)
            {
                return next(err);
            }
            if(user === null)
            {
                res.locals.error = "No user found";
                return next();
            }else{
                user.password = (Math.random() + 1).toString(36).substring(7);
                user.save(err2=>{
                    res.locals.error = "New password: " + user.password;
                    console.log(`New password: ${user.password}`);
                    return next();
                });
            }
        })

    };
};