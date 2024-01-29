const express = require('express')
const app = express()
const port = 8080
const cors = require('cors')
const knex = require('knex')(require('./knexfile.js')['development']);

const corsOptions = {
    origin: 'http://localhost:3000',
}

app.use(cors(corsOptions))
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.get('/api/items', (req, res) => {
    knex.select('*').from('items')
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.send(err)
        })
})

app.get('/api/items/:id', (req, res) => {
    knex.select('*').from('items').where('id',req.params.id).first()
        .then((data) => res.json(data))
        .catch((err) => res.send(err))
})

app.post('/api/users/login', (req, res) => {
    knex.select('*').from('users').where({
        username: req.body.username,
        password: req.body.password
    }).first()
        .then((data) => {
            if (data) {
                delete data.password
                console.log(data)
                res.json(data)
            } else {
                res.status(401).send({message: 'Invalid Login'})
            }
        })
        .catch((err) => res.send(err))
})

app.get('/api/users/:id/items', (req, res) => {
    knex.select('*').from('items').where('userId', req.params.id)
        .then((data) => res.json(data))
        .catch((err) => res.send(err))
})

app.delete('/api/items/', (req, res) => {
    knex.select('*').from('items').where('id', req.body.id).del()
        .then((data) => res.json(data))
        .catch((err) => res.send(err))
})

app.post('/api/items/', (req, res) => {

})

app.listen(port, () => {
    console.log(`Crud app listening on port ${port}`)
})