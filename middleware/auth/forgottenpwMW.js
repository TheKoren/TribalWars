const requireOption = require("../requireOption").requireOption;

 module.exports = function (objectrepository) {
     const UserModel = requireOption(objectrepository, 'UserModel');
    return (req, res, next) => {
        UserModel.findOne({email: req.body.email}, (err, user) =>
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
                user.password = `${Math.random()}`.substr(2);
                user.save(err2=>{
                    console.log(`New password: ${user.password}`);
                });
            }
        })

    };
};