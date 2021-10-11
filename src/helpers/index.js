/**
 * @function
 * @param data
 * @returns {{}|{uf: (number|*), complemento: (number|*), logradouro: (number|*), bairro: (number|*), localidade: (number|*), cep: (number|*)}}
 */
exports.normalizeDataReturn = (data) => {
    if (data) {
        return {
            cep: data.cep,
            logradouro: data.logradouro,
            complemento: data.complemento,
            bairro: data.bairro,
            localidade: data.localidade,
            uf: data.uf
        }
    }
    return {}
}

/**
 * @function
 * @param cep
 * @returns {string}
 */
exports.maskCep = (cep) => cep.substring(0,5) + "-"  + cep.substring(5)
