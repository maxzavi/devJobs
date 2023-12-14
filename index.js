const mongoose = require('mongoose')
const Handlebars = require('handlebars')

const express = require('express')
const exphbs = require('express-handlebars')
const expressValidator = require('express-validator')
const flash = require('connect-flash')

require('dotenv').config()
require('./config/db')

const path = require('path')
const router  = require('./routes')

const cookieParser = require('cookie-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const bodyParser = require('body-parser')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

const app = express()

//Enable body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(expressValidator())

// Enable view handlebars
app.engine('handlebars', 
    exphbs({
        defaultLayout: 'layout',
        helpers: require('./helpers/handlebars'),
        handlebars: allowInsecurePrototypeAccess(Handlebars)
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
//Alerts and flash messages
app.use(flash())

//Create midleware
app.use((req,res,next) => {
    res.locals.messages = req.flash()
    next()
})

app.use("/",router())

app.listen(process.env.PORT)
