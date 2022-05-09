import express from 'express'
import {routers} from './src/routers/routers.js'
import path from 'path'
import exp from 'constants'
import dotenv from 'dotenv'

dotenv.config() // config pro render

const app = express()
const port = 3008 || process.env.PORT // config pro render
let __dirname = path.resolve(path.dirname(''))

console.log(__dirname)


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.set('view engine', 'ejs')
app.use(routers)
app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
    console.log(`Estou rodando na porta ${port}`);
})