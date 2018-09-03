module.exports = (sequelize, DataType) => {
    var Especies = sequelize.define("Especies", {
        id_especie: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome_cientifico: {
            type: DataType.STRING,
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
        foto: {
            type: DataType.STRING
        },
        desenho: {
            type: DataType.STRING
        },
        qtd_individuos: {
            type: DataType.INTEGER,
        },
        outono: {
            type: DataType.BOOLEAN
        },
        verao: {
            type: DataType.BOOLEAN
        },
        primavera: {
            type: DataType.BOOLEAN
        },
        inverno: {
            type: DataType.BOOLEAN
        },
    })

    return Especies
}