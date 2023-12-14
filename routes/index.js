const express = require('express')
const homeController = require('../controllers/homeController.js')
const vacanciesController = require('../controllers/vacanciesController.js')
const usersController = require('../controllers/usersController.js')
const authController = require('../controllers/authController.js')

const router = express.Router()

module.exports = ()=>{
    router.get('/', homeController.showJobs)
    router.get('/vacancies/new', vacanciesController.formNew)
    router.post('/vacancies/new', vacanciesController.addVacancie)
    //Show vacancie
    router.get('/vacancies/:url',vacanciesController.showVacancie)
    //Edit vacancie
    router.get('/vacancies/edit/:url',vacanciesController.formEditVacancie)
    router.post('/vacancies/edit/:url',vacanciesController.editVacancie)

    //Create account
    router.get('/account-create', usersController.formCreateAccount)
    router.post('/account-create', 
        usersController.validateRegister,
        usersController.createUser)
    //Login
    router.get('/login', usersController.formLogin)
    router.post('/login', authController.authenticateUser)
    return router
}