module.exports = (sequelize, DataType) => {
    var Familias = sequelize.define("Familias", {
        id_familia: {
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

    return Familias
}