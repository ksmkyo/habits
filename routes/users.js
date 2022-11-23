const { usersDb }= require('../models/users');
var MD5 = require("crypto-js/md5");

var createUser= async (req, res) => {
    var dados = req.body;

    dados.password = MD5(dados.password).toString();

    await usersDb.create(dados)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Usuário Criado"
        })
    }).catch((erro) => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro na criação de Usuário!!! Error: " + erro
        })
    })
}

module.exports = createUser;