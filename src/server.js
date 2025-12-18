const express = require('express')

const app = express()

// Middleware para ler JSON
app.use(express.json())

// Middleware de autenticação por token fixo
app.use((req, res, next) => {
  const auth = req.headers.authorization

  if (auth !== 'Bearer MEU_TOKEN_FIXO') {
    return res.status(401).json({ error: 'Não autorizado' })
  }
  //
  next()
})

// Servidor
app.listen(3000, () => {
  console.log('API rodando na porta 3000')
})

const estadosRoutes = require('./routes/estadosRoutes')
app.use('/', estadosRoutes)
