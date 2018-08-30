module.exports = (sequelize, DataType) => {
    var Classificacao = sequelize.define("Familias", {
        id_classificacao: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataType.STRING
        },
        descricao: {
            type: DataType.STRING
        },
    })

    return Classificacao
}