const express = require('express')
const homeController = require('../controllers/homeController.js')
const vacanciesController = require('../controllers/vacanciesController.js')
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
    return router
}