const express = require('express')
const { showJobs } = require('../controllers/homeController.js')
const router = express.Router()

router.get("/", showJobs)

module.exports={
    router
}