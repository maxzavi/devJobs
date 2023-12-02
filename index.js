const mongoose = require('mongoose')

const express = require('express')
const exphbs = require('express-handlebars')

require('dotenv').config()
require('./config/db')

const path = require('path')
const router  = require('./routes')

const cookieParser = require('cookie-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

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

app.use(cookieParser())

app.use(session({
    secret: process.env.SECRET,
    key: process.env.KEY,
    resave: false,
    saveUninitialized:false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}))

app.use("/",router())

app.listen(process.env.PORT)
