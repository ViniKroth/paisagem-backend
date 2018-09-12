const express = require("express");
var ResponseHelper = require("../Helpers/ResponseHelper");
const especieController = require("../Controllers/EspecieController");

const routerEspecie = express.Router();

routerEspecie.post("/", especieController.addEspecie);

routerEspecie.get("/:id", (req, res) => {
    especieController.getEspecieByID(req, res);
})
module.exports = routerEspecie;
