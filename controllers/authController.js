const passport = require('passport')

exports.authenticateUser = passport.authenticate ('local',{
    successRedirect:"/admin",
    failureRedirect: "/login",
    failureFlash: true
})