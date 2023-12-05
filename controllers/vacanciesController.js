const mongoose = require('mongoose')
const Vacancie = mongoose.model('Vacancie')

exports.formNew = async (req,res)=>{
    res.render('vacancie-new',{
        pageName: 'Nueva vacante',
        tagline: 'Llena el formulario y publica tu vacante'
    })
}
//Add vacancie in Database
exports.addVacancie = async (req,res)=>{
    const vacancie = new Vacancie(req.body)
    vacancie.skills = req.body.skills.split(',')
    const newVacancie = await vacancie.save()
    res.redirect (`/vacancies/${newVacancie.url}`)
} 