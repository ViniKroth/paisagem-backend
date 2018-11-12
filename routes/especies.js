const express = require("express");
var ResponseHelper = require("../Helpers/ResponseHelper");
const especieController = require("../Controllers/EspecieController");

const routerEspecie = express.Router();

routerEspecie.post("/", especieController.addEspecie);
routerEspecie.post("/cadastro/individuo", especieController.addIndividuo);
routerEspecie.post("/individuo", especieController.addIndividuo);

routerEspecie.get("/individuo/:id", (req, res) => {
  especieController.findIndividuoByEspecie(req, res);
});

routerEspecie.get("/individuo/imagens/:id", (req, res) => {
  especieController.getImageByIndividuos(req, res);
});


routerEspecie.get("/:id", (req, res) => {
  especieController.getEspecieByID(req, res);
});
//Fetch Routes
routerEspecie.get("/", (req, res) => {
  especieController.fetchEspecies(req.query, (error, data) => {
    res.json(ResponseHelper.createResponse(error, data, true));
  });
});


module.exports = routerEspecie;
