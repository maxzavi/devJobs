const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE, { useNewUrlParser:true})

mongoose.connection.on('error',(error)=>{
    console.log(error);
})

//Import models

require('../models/Vacancies')