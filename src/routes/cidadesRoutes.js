const express = require('express')
const router = express.Router()
const {
  listarCidades,
  listarCidadePorId,
} = require('../controllers/cidadesController')

// Rotas GET
router.get('/cidades', listarCidades)
router.get('/cidades/:id', listarCidadePorId)

module.exports = router
