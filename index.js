const express = require('express')
const exphbs = require('express-handlebars')

const path = require('path')
const { router } = require('./routes/index.js')

const app = express()

// Enable view handlebars
app.engine('handlebars', 
    exphbs({
        defaultLayout: 'layout'
    })
)

app.set('view engine', 'handlebars');

// static files
app.use(express.static(path.join(__dirname, 'public')));


app.use("/",router)

app.listen(3000)