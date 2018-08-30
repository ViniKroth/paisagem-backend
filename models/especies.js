module.exports = (sequelize, DataType) => {
    var Especies = sequelize.define("Especies", {
        id_especies: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome_cientifico: {
            type: DataType.STRING,
            primaryKey: true
        },
        nome_popular: {
            type: DataType.STRING
        },
        naturalidade: {
            type: DataType.STRING
        },
        porte: {
            type: DataType.STRING
        },
        genero: {
            type: DataType.STRING
        },
        populacao: {
            type: DataType.STRING
        },
    })

    return Especies
}