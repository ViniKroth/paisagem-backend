module.exports = (sequelize, DataType) => {
    var nomesPopulares = sequelize.define("nomesPopulares", {
        id_nome_popular: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_especie: {
            type: DataType.INTEGER,
            // references: 'especies',
            // referencesKey: 'id_especie'
        },
        descricao: {
            type: DataType.STRING
        },
    })

    return nomesPopulares
}