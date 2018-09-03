const constants = require('../config/contants')
const db        = require('../models')

const usuarios = db.sequelize.model('Usuarios')

/*
 * Fetch a specific Usuarios page
 */
function fetchUsuarios(orderQuery, whereQuery, callback) {
    usuarios.findAll({
        attributes: { exclude: ['password', 'salt'] },
        order:  (createOrderClause(orderQuery)),
        where:  (createWhereClause(whereQuery))
    })
        .then(usuarios => {
            callback(null, usuarios)
        })
        .catch(error => {
            let errorObj = { statusDesc: error, statusCode: constants.errorCodeSequelize }
            callback(errorObj, null)
        })
}

function findByID(id_usuario, callback) {
    usuarios.findById( id_usuario, {
        attributes: { exclude: ['password', 'salt'] }
    })
        .then(usuario => {
            if(usuario) {
                return callback(null, usuario)
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

function findByNome(nome, callback) {
    usuarios.findById( nome, {
        attributes: { exclude: ['password', 'salt'] }
    })
        .then(usuario => {
            if(usuario) {
                return callback(null, usuario)
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

function addUsuario(usuario, callback) {
    usuarios.create(usuario)
        .then(newUsuario => {
            delete newusuario.dataValues.password
            delete newusuario.dataValues.salt
            
            callback(null, newusuario)
        })
        .catch(error => {
            let errorObj = { statusDesc: error, statusCode: constants.errorCodeSequelize }
            callback(errorObj, null)
        })
}

function updateUsuario(newUsuarioData, callback) {
    usuarios.findById(newUsuarioData.id)
        .then(usuario => {
            if(usuario == null) {
                let errorObj = { statusDesc: constants.valueNotFound, statusCode: constants.errorCodeSequelize }
                callback(errorObj, null)
            } else {
                usuario.update(newUsuarioData, {
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

function deleteUsuarioBy(id, callback) {
    usuarios.findById(id)
        .then(usuario => {
            if(usuario == null) {
                let errorObj = { statusDesc: constants.valueNotFound, statusCode: constants.errorCodeSequelize }
                callback(errorObj, null)
            } else {
                usuario.destroy({ returning: true })
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
            { id_usuario:       { like: `%${query.contains}%` }},
            { nome:     { like: `%${query.contains}%` }},
            { username: { like: `%${query.contains}%` }},
            { email:    { like: `%${query.contains}%` }}
        ]
    }
    delete query.contains

    return query
}

module.exports.fetchUsuarios   = fetchUsuarios
module.exports.findByID     = findByID
module.exports.findByNome = findByNome
module.exports.addUsuario      = addUsuario
module.exports.deleteUsuarioBy = deleteUsuarioBy
module.exports.updateUsuario   = updateUsuario
