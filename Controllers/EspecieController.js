const daoEspecie = require('../DAO/EspeciesDAO');

let especieController = {}

especieController.addEspecie = addEspecie;

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