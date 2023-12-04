const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE)

mongoose.connection.on('error',(error)=>{
    console.log(error);
})

//Import models

require('../models/Vacancies')