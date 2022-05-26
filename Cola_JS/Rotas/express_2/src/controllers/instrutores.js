let instrutores = require('../bancodedados')
let { bancoDeDados} = require('../bancodedados')

const listaInstrutores = (req,res) => {
    return res.status(200).json(instrutores.bancoDeDados.instrutores)
}

const obterInstrutor = (req,res) => {
    const { id } = req.params

    const instrutor = instrutores.bancoDeDados.instrutores.find((instrutor) => {
        return instrutor.id === Number(id)
    })

    if(!instrutor){
        return res.status(404).json({mensagem: 'Instrutor não encontrado'})

    }
    return res.status(200).json(instrutor)
}

const cadastraInstrutor = (req,res) => {
    const { nome, email, status } = req.body

    if(!nome){
        return res.status(400).json({mensagem:'nome é obrigatorio'})
    }
    else if(!email){
        return res.status(400).json({mensagem:'email é obrigatorio'})
    }

    const instrutor = {
        id: bancoDeDados.identificadorInstrutor++,
        nome,
        email,
        status:status ?? true
    }

    instrutores.bancoDeDados.instrutores.push(instrutor)
    
    return res.status(201).json(instrutor)
}

const atualizarInstrutor = (req,res) =>{
    const {id} = req.params
    const { nome, email, status } = req.body

    if(!nome){
        return res.status(400).json({mensagem:'nome é obrigatorio'})
    }
    if(!email){
        return res.status(400).json({mensagem:'email é obrigatorio'})
    }
    if(!status){
        return res.status(400).json({mensagem:'status é obrigatorio'})
    }

    const instrutor = instrutores.bancoDeDados.instrutores.find((instrutor) => {
        return instrutor.id === Number(id)
    })

    if(!instrutor){
        return res.status(404).json({mensagem: 'Instrutor não encontrado'})

    }    

    instrutor.nome = nome
    instrutor.email = email
    instrutor.status = status

    return res.status(203).send()
}

const atualizarStatus = (req,res) => {
    const {id} = req.params
    const { status } = req.body

    const instrutor = instrutores.bancoDeDados.instrutores.find((instrutor) => {
        return instrutor.id === Number(id)
    })

    if(!instrutor){
        return res.status(404).json({mensagem: 'Instrutor não encontrado'})

    }    
    instrutor.status = status

    return res.status(203).send()
 }
 const excluir = (req,res)=>{

    const {id} = req.params

    const instrutor = instrutores.bancoDeDados.instrutores.find((instrutor) => {
        return instrutor.id === Number(id)
    })

    if(!instrutor){
        return res.status(404).json({menssagem:'não encontrado'})
    }

    instrutores = instrutores.bancoDeDados.instrutores.filter((instrutor) =>{
        return instrutor.id !== Number(id)
    })
    return res.status(204).send()
 }
module.exports = {
    listaInstrutores, 
    obterInstrutor,
    cadastraInstrutor,
    atualizarInstrutor,
    atualizarStatus,
    excluir
} 