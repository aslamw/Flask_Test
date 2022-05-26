const conexao = require('../conexao')

const listarAutores = async (req, res) => {
    const usuarios = await conexao.query('select * from usuarios limit 10')
    res.json(usuarios)
}
const obterAutor = async (req, res) => {
    
}
const cadastrarAutor = async (req, res) => {
    
}
const atualizarAutor = async (req, res) => {
    
}
const excluirAutor = async (req, res) => {
    
}

module.export = {
    listarAutores,
    obterAutor,
    cadastrarAutor,
    atualizarAutor,
    excluirAutor
}