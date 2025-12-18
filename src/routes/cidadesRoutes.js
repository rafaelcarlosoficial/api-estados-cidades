const express = require('express')
const router = express.Router()
const {
  listarCidades,
  listarCidadePorId,
  criarCidade,
} = require('../controllers/cidadesController')

// GET
router.get('/', listarCidades)
router.get('/:id', listarCidadePorId)

// POST
router.post('/', criarCidade)

module.exports = router
