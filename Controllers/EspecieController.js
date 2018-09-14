const daoEspecie = require('../DAO/EspeciesDAO');

let especieController = {}

especieController.addEspecie = addEspecie;

module.exports = especieController;

class EspecieController {
    /*  ROTAS DE FETCH:
     *  Todas as rotas de fetch lidam com informações pertinentes a vários usuários
     */
    
    //Fetch especie
  static fetchEspecies(query, callback) {
    console.log(callback);

    const orderQuery = EspecieController.constructOrderQuery(query);
    const whereQuery = EspecieController.constructWhereQuery(query);

    return DAO.fetchEspecies(orderQuery, whereQuery, callback);
  }

}

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

