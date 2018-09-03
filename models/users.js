module.exports = (sequelize, DataType) => {
    var users = sequelize.define("Users", {
        id_usuario: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataType.STRING
        },
        username: {
            type: DataType.STRING,
            required: true,
            unique: true
        },
        email: {
            type: DataType.STRING
        },
        matricula: {
            type: DataType.STRING
        },
        cargo: {
            type: DataType.STRING
        },
        senha: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        salt: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
        
    })

    return users;
}