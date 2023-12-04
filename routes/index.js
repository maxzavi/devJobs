const express = require('express')
const homeController = require('../controllers/homeController.js')
const vacanciesController = require('../controllers/vacanciesController.js')
const router = express.Router()

module.exports = ()=>{
    router.get('/', homeController.showJobs)
    router.get('/vacancies/new', vacanciesController.formNew)
    return router
}