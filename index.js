require('dotenv').config()

const express = require('express')
const app = express()


// Estudar sobre API e seus padrões.

// http://localhost:${port}/desafio
// METHOD: GET | POST | PUT | DELETE | PATCH
// BODY: Copo da requisição
// Methods: (POST | PUT | PATCH | DELETE)
// QUERY(Query params | params) ?name=higor&email=diego key=value
    // - é opcional
// path (path params | path variable) /:id/:name/:email/:idade
    // - é obrigatório
// headers ({ key: value }) - a maioria das autorizações de api fica no header
    // - headers os valores são opcional exceto content-type

// middleware
    // (req, res, next)
    // req, res
    // req, res, next

// calculadora
    // valor1 = 10
    // valor2 = 20
// rules internal
    // valor3 = 30

//
// function middlewareValor(req, res, next) {
//     req.query.valor3 = 30
//     next()
// }

// example one
app.get('/api/cep/:cep', function(req, res){
    const cep = req.params.cep
    // continuar o desafio aqui
    res.status(201).json(req.params)
})

app.listen(3000, () => console.log('listing port http://localhost:3000'))

