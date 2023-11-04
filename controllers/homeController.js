exports.showJobs = (req,res)=>{
    res.render('home',{
        pageName: 'devJobs',
        tagline: 'Encuentra y publica trabajos para desarrolladores web',
        bar: true,
        button: true
    })
}