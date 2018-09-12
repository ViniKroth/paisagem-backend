module.exports = (sequelize, DataType) => {
    var nomesPopulares = sequelize.define("nomesPopulares", {
        id_nomepopular: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_especie: {
            type: DataType.INTEGER,
            references: {
                model: 'Especies',
                key: 'id_especie'
            }
        },
        descricao: {
            type: DataType.STRING
        },
    })

    return nomesPopulares
}