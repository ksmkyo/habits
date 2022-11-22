const express = require('express');
const app = express();

const createHabit = require('./routes/habits')

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    })
})

app.post('/habits/create' , createHabit)

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
})