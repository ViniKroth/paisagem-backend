const express = require("express");
var ResponseHelper = require("../Helpers/ResponseHelper");
const especieController = require("../Controllers/EspecieController");

const routerEspecie = express.Router();

routerEspecie.post("/", especieController.addEspecie);
routerEspecie.post("/cadastro/individuo", especieController.addIndividuo);

routerEspecie.get("/:id", (req, res) => {
  especieController.getEspecieByID(req, res);
});
//Fetch Routes
routerEspecie.get("/", (req, res) => {
  especieController.fetchEspecies(req.query, (error, data) => {
    res.json(ResponseHelper.createResponse(error, data, true));
  });
});

routerEspecie.get('/', especieController.addIndividuo);

module.exports = routerEspecie;
