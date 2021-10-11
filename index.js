require('dotenv').config()
const express = require('express')
const app = express()
const { getCep } = require('./src/services')
const { getCepDatabase, insertCepCollection } = require('./src/repository/cep')
const { normalizeDataReturn, maskCep } = require('./src/helpers')

// example one
app.get('/api/cep/:cep', async (req, res ) =>{
        // pego o cep que o usuário enviou
        const cepParams = req.params.cep

        // Colocando mascara para o cep
        const cep = maskCep(cepParams)
        // pesquiso no banco se tem
        const result = await getCepDatabase(cep)

        // caso tenha retorno para o usuário
        if (result) return res.status(200).json(result)


        // caso não tem, vou buscar na api de cep
        const { data, status } = await getCep(cep)

        // caso retorne algo la da api do cep tenho que inserir na minha collection
        if (data) await insertCepCollection(data)

        // retorno para o usuário o que ele pediu
        return res.status(status).json(normalizeDataReturn(data))
    
})

app.listen(3000, () => console.log('listing port http://localhost:3000'))

