const { Pool } = require('pg')
const poll = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'usuarios',
    password: '123456677',
    port:5432

})

const query = (text, param) => {
    return Pool.query(text,param)
}

module.exports = {
    query
}