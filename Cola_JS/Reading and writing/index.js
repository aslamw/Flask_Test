const fsPromises = require('fs/promises')
const fs = require('fs')

console.log('antes de ler')

// leitura de arquivos síncronos
/* const a = fs.readFileSync('text.txt').toString()
console.log(a) */


//forma asícrona
/* fs.readFile('text.txt',(erro,data)=>{
    if(erro){
        console.log(erro)
    }
    else console.log(data.toString())
})*/

//com promisis

const a = fsPromises.readFile('text.txt')

a.then((data)=>{
    console.log(data.toString())
})
a.catch((erro)=>{
    console.log(erro)
})

//com async await

/* (async function () {
    const a = await fsPromises.readFile('text.txt')

    console.log(a.toString())
})() */

console.log('depois de ler')

// mudando os dados no Json

const open = require('fs/promises')

(async function (){
    const arquivoJson = await open.readFile('teste.json')

    console.log(arquivoJson.toString())
})()