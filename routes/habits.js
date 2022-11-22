const { habitsDb } = require('../models/habits');

const createHabit = async (req, res) => {
    var dados = req.body;
    console.log(dados);

    await habitsDb.create(dados)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Hábito Criado"
        })
    }).catch((erro) => {
        return res.json({
            erro: true,
            mensagem: "Erro na criação de hábito!!! Error: " + erro
        })
    })
}

module.exports = createHabit;