const mongoose = require('mongoose')
const Users = mongoose.model('Users')

exports.formCreateAccount = async (req,res,next)=>{
    res.render('account-create',{
        pageName: 'Crea tu cuenta en devJobs',
        tagline: 'Comienza a publicar tus vacanetes gratis, solo debes crear una cuenta'
    })
}

exports.createUser = async (req,res, next) =>{
    const user = new Users(req.body)
    try {
        await user.save(user)
        res.redirect('/login')
    } catch (error) {
        console.log(error);
        req.flash('error', error)
        res.redirect('/account-create')
    }
    //const newUser = await user.save(user)
    //if (!newUser) return next()
}

exports.validateRegister = async (req,res,next)=>{
    req.sanitizeBody('name').escape()
    req.sanitizeBody('email').escape()
    req.sanitizeBody('password').escape()
    req.sanitizeBody('confirm').escape()

    req.checkBody ('name','El nombre es obligatorio').notEmpty()
    req.checkBody ('email','El email debe ser válido').isEmail()
    req.checkBody ('password','El password no puede estar vacío').notEmpty()
    req.checkBody ('confirm','Confirmar password no puede estar vacío').notEmpty()
    req.checkBody ('password','El password es diferente').equals(req.body.confirm)
    
    const errors = req.validationErrors()
    if(errors){
        req.flash('error', errors.map(error=>error.msg))
        res.render('account-create',{
            pageName: 'Crea tu cuenta en devJobs',
            tagline: 'Comienza a publicar tus vacanetes gratis, solo debes crear una cuenta',
            messages: req.flash()
        })
        return;
    }
    next()
}

exports.formLogin = async (req,res,next)=>{
    res.render('login',{
        pageName: 'Iniciar sesión en devJobs'
    })
}