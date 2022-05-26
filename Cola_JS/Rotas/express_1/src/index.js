const express = require('express');
const {filtragemProfessor, encontrarUmProfessor} = require('./controladores/professores')

const app = express();

const oneInter = (req,res,next)=>{
  console.log('passou no primeiro inter')
  next()
}

const interDaRota = (req,res,next) =>{
  console.log('passei pelo inter da rota')
  next()
}

app.use(oneInter)

app.get('/professores',interDaRota,  filtragemProfessor);

app.get('/professores/:id',encontrarUmProfessor)

app.listen(3000)
