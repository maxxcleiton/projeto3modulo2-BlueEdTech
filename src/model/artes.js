import Sequelize from 'sequelize'
import {connection} from '../database/connection.js'

export const artes = connection.define('artes', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    diretor: {
        type: Sequelize.STRING,
        allowNull: false
    },
    img: {
        type: Sequelize.STRING,
        allowNull: false
    },
    duracao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ano: {
        type: Sequelize.STRING,
        allowNull: false
    },
    iframe: {
        type: Sequelize.STRING,
        allowNull: true
    },
}, {
     freezeTableName: true,
     createdAt: false,
     updateAt: false,
     timestamps: false
})

const initTable = async () => {
    try {
        await artes.sync()
    }
    catch (error) {
        return error.message
    }
}

initTable()