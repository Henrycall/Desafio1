const { connectDatabase } = require('../../database')

/**
 * @function
 * @param cep
 * @returns {Promise<Document | null>}
 */
exports.getCepDatabase = async (cep) => {
    let connect = null
    try {
        connect = await connectDatabase()
        return connect.db().collection('ceps').findOne({ cep }, { projection: { _id : 0, cep: 1, logradouro: 1, complemento: 1, bairro: 1, localidade: 1, uf: 1 } })
    } catch (err) {
        if (connect !== null) await connect.close()
        throw new Error('Error ao buscar os dados no banco!')
    }
}

/**
 * @function
 * @param data
 * @returns {Promise<InsertOneResult<Document>>}
 */
exports.insertCepCollection = async (data) => {
    let connect = null
    try {
        connect = await connectDatabase()
        return connect.db().collection('ceps').insertOne(data)
    } catch (err) {
        console.log('err', err)
        if (connect !== null) await connect.close()
        throw new Error('Error ao buscar os dados no banco!')
    }
}