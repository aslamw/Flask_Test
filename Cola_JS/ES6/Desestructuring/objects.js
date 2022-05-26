const users = {
    name: 'Daniel',
    age: 19,
    stack: 'Fullstack',
    address: {
        city: 'Presidente Prudente',
        state: 'SP',
        country: 'Brasil'
    }
}

const { name:Fullname, age, stack, address: { city, state, country } } = users

console.log(`${Fullname}, ${city}-${state}`)