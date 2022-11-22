const { habitsDb } = require('../models/habits');

const createHabit = async (req, res) => {
    var dados = req.body;

    console.log(dados);

    await habitsDb.create({
        "title": "Rdk&ksm",
        "question": "Gyn?",
        "definition": "gym",
        "qtd": 5 ,
        "created_at":  "2018-12-10T13:45:00.000Z",
        "update_at": "2018-12-10T13:45:00.000Z"
    })
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