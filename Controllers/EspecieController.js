const daoEspecie = require('../DAO/EspeciesDAO');

let especieController = {}

especieController.addEspecie = addEspecie;
especieController.getEspecieByID = getEspecieByID;

module.exports = especieController;

function addEspecie(req, res, next){
    daoEspecie.addEspecie(req.body, (error, especie) => {
        if(error){
            res.json(error);
            res.status(400);
        } else {
            res.json(especie);
            res.status(200);
        }
    });
}

function getEspecieByID(req, res, next){
    daoEspecie.findByID(req.params.id, (error, especie)=>{
        if(error){
            res.json(error);
            res.status(400);
        } else {
            res.json(especie);
            res.status(200);
        }
    })
}