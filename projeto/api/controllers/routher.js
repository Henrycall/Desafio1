module.exports = app => {
    app.get('/teste', (req, res) => {
        getDB().then(async(db) => {

            res.send({result:"Pesquisados na base de dados"});
            console.log("Consulta realizada com sucesso");
        })
    });
    app.get('/busca', (req, res) => {
        getDB().then(async(db) => {
            const nome = req.body.nome
            const query ={
                nome:nome
            }
            const options = {
                projection: {
                    nome:1
                }
            };
            const retornaUsuario = await db.collection('cepPessoa').findOne(query, options);
            console.log(query)
            console.log("Consulta realizada com sucesso");
            res.send(JSON.stringify(retornaUsuario));
        })
    });


}