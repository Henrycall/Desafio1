const axios = require('axios')


/**
 * @function
 * @param params
 * @returns {Promise<{data: null, status}|{data: never, status: number}>}
 */
const httpConsumer = async (params) => {
    try {
        const { data, status} = await axios(params)
        return {data, status}
    } catch (err) {
        console.log('err', err)
        return { data: null, status: err.response.status  }
    }
}

/**
 * @function
 * @param cep
 * @returns {Promise<{data: null, status}|{data: never, status: number}>}
 */
exports.getCep = async (cep) => {
    let { data, status } = await httpConsumer({
        url: `https://viacep.com.br/ws/${cep}/json/`,
        method: 'GET'
    })
    if (data?.erro) {
        data = null
        status = 204
    }

    return { data, status}
}