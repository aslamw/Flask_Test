const fs = require('fs/promises')

const teste = async ()=> {
    const arquivoJson = await fs.readFile('teste.json')
    const pessoas = JSON.parse(arquivoJson)
    pessoas.push({
            nome: 'Guido',
            idade: 31
        })

    const arrayJson = JSON.stringify(pessoas)

    console.log(arrayJson)
}



teste()