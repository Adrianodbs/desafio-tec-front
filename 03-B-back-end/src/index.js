const express = require('express')
const cors = require('cors')
//Fake database
let dados = []

//Criar o app
const app = express()
app.use(cors())

app.use(express.json())

app.post('/dados', (req, res) => {
  const { nome, idade, email } = req.body
  const dado = { nome, idade, email }

  dados.push(dado)

  return res.status(201).json(dado)
})

app.get('/dados', (req, res) => {
  return res.status(200).json(dados)
})

//Mandar o servidor rodar
app.listen(3333, () => console.log('Servidor rodando'))
