const mongoose = require('mongoose')
const Vacancie = mongoose.model('Vacancie')

exports.showJobs = async (req,res, next)=>{
    const vacancies = await Vacancie.find()
    if(!vacancies) return next();
    res.render('home',{
        pageName: 'devJobs',
        tagline: 'Encuentra y publica trabajos para desarrolladores web',
        bar: true,
        button: true,
        vacancies
    })
}
