const express = require('express')
const app = express()
const port = 8080
const knex = require('knex')(require('./knexfile.js')['development']);

app.get('/', (req, res) => {
    res.send(process.env.DB_CONNECTION_STRING)
})

app.get('/items', (req, res) => {
    knex.select('*').from('items')
        .then(data => {
            res.json(data)
        })
        .catch((err) => {
            res.send(err)
        })
})

app.listen(port, () => {
    console.log(`Crud app listening on port ${port}`)
})