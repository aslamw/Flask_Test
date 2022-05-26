const express = require('express')
const rotas = express()
const {
    listaInstrutores, 
    obterInstrutor,
    cadastraInstrutor,
    atualizarInstrutor,
    atualizarStatus,
    excluir
} = require('./controllers/instrutores')

rotas.get('/instrutores', listaInstrutores)
rotas.get('/instrutores/:id', obterInstrutor)

rotas.post('/instrutores',cadastraInstrutor)
rotas.put('/instrutores/:id', atualizarInstrutor)
rotas.patch('/instrutores/:id/status', atualizarStatus)//alterar uma parte pequena
rotas.delete('/instrutores/:id', excluir)

module.exports = rotas
