const users = {
    name: 'Daniel',
    age: 19,
    stack: 'Fullstack'
}

const userAddress = {

    city: 'Presidente Prudente',
    state: 'SP',
    country: 'Brasil'
}

const newUserData = {...users,name: 'Daniel Lopes', address: {...userAddress}}

console.log(newUserData)