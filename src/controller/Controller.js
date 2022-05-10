import {connection} from '../database/connection.js'
import {artes} from '../model/artes.js'

export const getIndex = async (req, res) => {
    try {
        const listArtes = await artes.findAll()
        console.log(listArtes)
        res.render('index.ejs',{ 
            listArtes
        })
    } catch(error) {
        res.send(error.message)
    }
}

export const getDetalhes = async (req,res) => {
    try {
        const artesDetalhes = await artes.findByPk(req.params.id)
        res.render('detalhes.ejs',{
            artesDetalhes
        })
    }
    catch(error) {
        res.send(error.message)
    }
}

export const getDeletar = async (req, res) => {
    try {
        await artes.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/')
    }
    catch(error) {
        res.send(error.message)
    }
}

export const getCriar = (req, res) => {
    res.render('criar.ejs', {toggle: false})
}

export const postCriar = async (req, res) => {
    const {
        nome,
        diretor,
        img,
        duracao,
        ano,
        iframe
    } = req.body
    try {
        if (!nome || !diretor || !img || !duracao || !ano || !iframe) {
            res.send('Todos os campos são obrigatórios!')
        } else {
            await artes.create({
                nome,
                diretor,
                img,
                duracao,
                ano,
                iframe
            })
            res.render('criar.ejs', {toggle: true})
        }
    } catch (error) {
        res.send(error.message)
    }
}

export const getEditar = async (req, res) => {
    try {
        const arteAtual = await artes.findByPk(req.params.id)
        res.render('editar.ejs', {
            arteAtual
        })
    } catch (error) {
        res.send(error.message)
    }
}

export const postEditar = async (req, res) => {
    try {
        const {
            nome,
            diretor,
            img,
            duracao,
            ano,
            iframe
        } = req.body
        await artes.update({
            nome: nome,
            diretor: diretor,
            img: img,
            duracao: duracao,
            ano: ano,
            iframe: iframe
        }, {
            where: {
                id: req.params.id
            }
        })
        res.redirect('/')
    } catch (error) {
        res.send(error.message)
    }
}