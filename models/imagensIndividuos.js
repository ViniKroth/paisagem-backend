module.exports = (sequelize, DataType) => {
    var imagensIndividuos = sequelize.define("imagensIndividuos", {
        id_imagem: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_individuo: {
            type: DataType.INTEGER,
            references: {
                model: 'individuos',
                key: 'id_individuo'
            }
        },
        path: {
            type: DataType.STRING
        },
    })

    return imagensIndividuos
}