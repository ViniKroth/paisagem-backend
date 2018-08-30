const constants = require('../config/contants')
const db        = require('../models/index')

const users = db.sequelize.model('Users')

/*
 * Fetch a specific users page
 */
function fetchUsers(orderQuery, whereQuery, callback) {
    users.findAll({
        attributes: { exclude: ['password', 'salt'] },
        order:  (createOrderClause(orderQuery)),
        where:  (createWhereClause(whereQuery))
    })
        .then(users => {
            callback(null, users)
        })
        .catch(error => {
            let errorObj = { statusDesc: error, statusCode: constants.errorCodeSequelize }
            callback(errorObj, null)
        })
}

function findByID(id, callback) {
    users.findById( id, {
        attributes: { exclude: ['password', 'salt'] }
    })
        .then(user => {
            if(user) {
                return callback(null, user)
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

function addUser(user, callback) {
    users.create(user)
        .then(newUser => {
            delete newUser.dataValues.password
            delete newUser.dataValues.salt
            
            callback(null, newUser)
        })
        .catch(error => {
            let errorObj = { statusDesc: error, statusCode: constants.errorCodeSequelize }
            callback(errorObj, null)
        })
}

function updateUser(newUserData, callback) {
    users.findById(newUserData.id)
        .then(user => {
            if(user == null) {
                let errorObj = { statusDesc: constants.valueNotFound, statusCode: constants.errorCodeSequelize }
                callback(errorObj, null)
            } else {
                user.update(newUserData, {
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

function deleteUserBy(id, callback) {
    users.findById(id)
        .then(user => {
            if(user == null) {
                let errorObj = { statusDesc: constants.valueNotFound, statusCode: constants.errorCodeSequelize }
                callback(errorObj, null)
            } else {
                user.destroy({ returning: true })
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
            { id:       { like: `%${query.contains}%` }},
            { name:     { like: `%${query.contains}%` }},
            { username: { like: `%${query.contains}%` }},
            { email:    { like: `%${query.contains}%` }}
        ]
    }
    delete query.contains

    return query
}

module.exports.fetchUsers   = fetchUsers
module.exports.findByID     = findByID
module.exports.addUser      = addUser
module.exports.deleteUserBy = deleteUserBy
module.exports.updateUser   = updateUser
