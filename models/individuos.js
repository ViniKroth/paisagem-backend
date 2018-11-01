module.exports = (sequelize, DataType) => {
    var individuos = sequelize.define("individuos", {
        id_individuo: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },      
        descricaoLocal: {
            type: DataType.STRING
        },
        id_especie: {
            type: DataType.INTEGER,
            references: {
                model: 'Especies',
                key: 'id_especie'
            }
        },
        lat: {
            type: DataType.STRING,
        },
        long: {
            type: DataType.STRING,
        },
    })

    return individuos
}