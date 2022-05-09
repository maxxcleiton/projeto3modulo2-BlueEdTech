import Sequelize from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

export const connection = new Sequelize(
    process.env.DB_BASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_LOCAL, //url do bd
        port: 5432, //porta que esta rodando o bd
        dialect: 'postgres' //pra eu falar pro sequelize qual estou trabalhando(mysql,postgres), preciso dar o dialeto, que é o postgres
    }
)