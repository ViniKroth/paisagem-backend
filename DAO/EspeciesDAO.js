const constants = require('../config/contants')
const db        = require('../models/index')

const especies = db.sequelize.model('Especies')

/*
 * Fetch a specific especies page
 */
function fetchEspecies(orderQuery, whereQuery, callback) {
    especies.findAll({
        attributes: { exclude: ['password', 'salt'] },
        order:  (createOrderClause(orderQuery)),
        where:  (createWhereClause(whereQuery))
    })
        .then(especies => {
            callback(null, especies)
        })
        .catch(error => {
            let errorObj = { statusDesc: error, statusCode: constants.errorCodeSequelize }
            callback(errorObj, null)
        })
}

function findByID(id_especie, callback) {
    especies.findById( id_especie, {
        attributes: { }
    })
        .then(especie => {
            if(especie) {
                return callback(null, especie)
            } else {
                let errorObj = { statusDesc: constants.valueNotFound, statusCode: constants.errorCodeSequelize }
                return callback(errorObj, null)
            }
        })
        .catch(error => {
            let errorObj = { statusDesc: error, statusCode: constants.errorCodeSequelize }
            return callback(errorObj, null)
        })
}

function findByNomePop(nome_popular, callback) {
    especies.findById( nome_popular, {
        attributes: { }
    })
        .then(especie => {
            if(especie) {
                return callback(null, especie)
            } else {
                let errorObj = { statusDesc: constants.valueNotFound, statusCode: constants.errorCodeSequelize }
                return callback(errorObj, null)
            }
        })
        .catch(error => {
            let errorObj = { statusDesc: error, statusCode: constants.errorCodeSequelize }
            return callback(errorObj, null)
        })
}

function addEspecie(especie, callback) {
    especies.create(especie)
        .then(newEspecie => {
            delete newEspecie.dataValues.password
            delete newEspecie.dataValues.salt
            
            callback(null, newEspecie)
        })
        .catch(error => {
            let errorObj = { statusDesc: error, statusCode: constants.errorCodeSequelize }
            callback(errorObj, null)
        })
}

function updateEspecie(newEspecieData, callback) {
    especies.findById(newEspecieData.id_especie)
        .then(especie => {
            if(especie == null) {
                let errorObj = { statusDesc: constants.valueNotFound, statusCode: constants.errorCodeSequelize }
                callback(errorObj, null)
            } else {
                especie.update(newEspecieData, {
                    returning: true
                })
                    .then(instance => {
                        callback(null, instance)
                    })
            }
        })
        .catch(error => {
        let errorObj = { statusDesc: error, statusCode: constants.errorCodeSequelize }
            callback(errorObj, null)
        })
}

function deleteEspecieBy(id_especie, callback) {
    especies.findById(id_especie)
        .then(especie => {
            if(especie == null) {
                let errorObj = { statusDesc: constants.valueNotFound, statusCode: constants.errorCodeSequelize }
                callback(errorObj, null)
            } else {
                especie.destroy({ returning: true })
                    .then(instance => {
                        callback(null, instance)
                    })
            }
        })
        .catch(error => {
            let errorObj = { statusDesc: error, statusCode: constants.errorCodeSequelize }
            callback(errorObj, null)
        })
}

function createOrderClause(query) {  
    return [query.model === undefined? [query.field, query.isAscending] : [db[query.model], query.field, query.isAscending]]
}

function createWhereClause(query) {
    if(query.contains !== undefined){
        query.$or = [
            { id_especie:       { like: `%${query.contains}%` }},
            { nome_cientifico:     { like: `%${query.contains}%` }},
            { nome_popular: { like: `%${query.contains}%` }},
            { naturalidade:    { like: `%${query.contains}%` }},
            { porte:    { like: `%${query.contains}%` }},
            { genero:    { like: `%${query.contains}%` }},
            { populacao:    { like: `%${query.contains}%` }}
        ]
    }
    delete query.contains

    return query
}

module.exports.fetchEspecies   = fetchEspecies
module.exports.findByID     = findByID
module.exports.addEspecie     = addEspecie
module.exports.deleteEspecieBy = deleteEspecieBy
module.exports.updateEspecie   = updateEspecie
