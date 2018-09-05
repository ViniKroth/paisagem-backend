module.exports = (sequelize, DataType) => {
    var especies = sequelize.define("Especies", {
        id_especie: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_familia: {
            type: DataType.INTEGER,
            /*references: {
                model: 'Familias',
                key: 'id_familia'
            }*/
        }, 
        id_classificacao: {
            type: DataType.INTEGER,
            /*references: {
                model: 'Classificacoes',
                key: 'id_classificacao'
            }*/
        }, 
        nome_cientifico: {
            type: DataType.STRING,
        },
        floracao: {
            type: DataType.STRING,
        },
        folhagem: {
            type: DataType.STRING,
        },
        origem: {
            type: DataType.STRING,
        },
        nome_popular: {
            type: DataType.STRING
        },
        potencialarq: {
            type: DataType.STRING,
        },
        potencialpaisag: {
            type: DataType.STRING,
        },
        /*naturalidade: {
            type: DataType.STRING
        },*/
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

    return especies
}