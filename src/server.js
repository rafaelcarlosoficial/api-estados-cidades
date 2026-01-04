const express = require('express')
const app = express()

app.use(express.json())

// Middleware de autenticação
app.use((req, res, next) => {
  // console.log('HEADERS:', req.headers)
  const auth = req.headers.authorization
  // console.log(auth)
  if (auth !== 'Bearer MEU_TOKEN_FIXO') {
    return res.status(401).json({ error: 'Não autorizado' })
  }
  next()
})

// Rotas
app.use('/cidades', require('./routes/cidadesRoutes'))
app.use('/estados', require('./routes/estadosRoutes'))

// Servidor
app.listen(3000, () => {
  console.log('API rodando na porta 3000')
})
