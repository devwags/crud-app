const express = require('express')
const app = express()
const port = 8080
const knex = require('knex')(require('./knexfile.js')['development']);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/items', (req, res) => {
    knex('items')
        .select('*')
        .then(items => {
            res.json(items)
        })
        .catch((err) => {
            res.send(err)
        })
})

app.listen(port, () => {
    console.log(`Crud app listening on port ${port}`)
})