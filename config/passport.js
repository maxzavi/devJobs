const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const { Strategy } = require('passport-local')
const Users = mongoose.model('Users')

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done)=>{
    const user = await Users.findOne({email})
    if (!user) return done (null, false, {
        message: 'Usuario no existe'
    })

    const verifyPassword = user.comparePassword(password)
    if (!verifyPassword) return done (null, false, {
        message: 'Clave incorrecta!!!'
    })

    return done(null, user)
}))

passport.serializeUser((user, done)=> done (null, user._id))

passport.deserializeUser(async (id, done)=>{
    const user = await Users.findById(id)
    return (null, user)
})

module.exports = passport