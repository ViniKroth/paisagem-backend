const express       = require('express')
var ResponseHelper  = require('../Helpers/ResponseHelper')
const especieController = require('../Controllers/EspecieController');

const routerEspecie = express.Router()

routerEspecie.post('/cadastrar', especieController.addEspecie)

module.exports = routerEspecie;