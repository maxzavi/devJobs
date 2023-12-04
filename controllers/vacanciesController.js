exports.formNew = async (req,res)=>{
    res.render('vacancie-new',{
        pageName: 'Nueva vacante',
        tagline: 'Llena el formulario y publica tu vacante'
    })
}