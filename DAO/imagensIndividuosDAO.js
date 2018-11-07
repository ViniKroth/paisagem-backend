const constants = require("../config/contants");
const db = require("../models/index");
const imagensIndividuos = db.sequelize.model("imagensIndividuos");

function findByID(id_individuo, callback) {
    imagensIndividuos
      .findById(id_individuo, {
        attributes: {}
      })
      .then(imagem => {
        if (imagem) {
          return callback(null, imagem);
        } else {
          let errorObj = {
            statusDesc: constants.valueNotFound,
            statusCode: constants.errorCodeSequelize
          };
          return callback(errorObj, null);
        }
      })
      .catch(error => {
        let errorObj = {
          statusDesc: error,
          statusCode: constants.errorCodeSequelize
        };
        return callback(errorObj, null);
      });
  }


  function addImagem( imagenIndividuo, callback) {

    imagensIndividuos
      .create(imagenIndividuo)
      .then(imagem => {
        callback(null, imagem); 
      })
      .catch(error => {
        let errorObj = {
          statusDesc: error,
          statusCode: constants.errorCodeSequelize
        };
        callback(errorObj, null);
      });
  }

  function findByIndividuo(id_individuo, callback) {
    imagensIndividuos
      .findById(id_individuo, {
        attributes: {}
      })
      .then(imagem => {
        if (imagem) {
          return callback(null, imagem);
        } else {
          let errorObj = {
            statusDesc: constants.valueNotFound,
            statusCode: constants.errorCodeSequelize
          };
          return callback(errorObj, null);
        }
      })
      .catch(error => {
        let errorObj = {
          statusDesc: error,
          statusCode: constants.errorCodeSequelize
        };
        return callback(errorObj, null);
      });
  }


  module.exports.findByIndividuo = findByIndividuo;
  module.exports.addImagem = addImagem;
  module.exports.findByID = findByID;