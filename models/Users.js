const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const bcrypt = require('bcrypt')
const usersSchema = new mongoose.Schema({
    email:{
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    token: String,
    expire: Date
})

usersSchema.pre('save', async function(next){
    if (!this.isModified('password')){
        return next()
    }
    const hash = await bcrypt.hash(this.password, 12)
    this.password = hash
    next()
})

usersSchema.post('save', function (error, doc, next){
    if (error.name === 'MongoServerError' && error.code===11000){
        next('El correo ya está registrado')
    }else{
        next(error)
    }
})

//Authenticate user
usersSchema.methods={
    comparePassword : function(password){
        return bcrypt.compareSync(password, this.password)
    }
}
module.exports = mongoose.model('Users', usersSchema)