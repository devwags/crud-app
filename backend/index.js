const express = require('express')
const app = express()
const port = 8080
const cors = require('cors')
const knex = require('knex')(require('./knexfile.js')['development']);

const corsOptions = {
    origin: 'http://localhost:3000',
}

app.use(cors(corsOptions))

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.get('/api/items', (req, res) => {
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