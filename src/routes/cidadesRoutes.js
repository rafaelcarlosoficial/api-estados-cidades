const express = require('express')
const router = express.Router()

const {
  listarCidades,
  listarCidadePorId,
  criarCidade,
  atualizarCidade,
  removerCidade,
} = require('../controllers/cidadesController')

router.get('/', listarCidades)
router.get('/:id', listarCidadePorId)
router.post('/', criarCidade)
router.put('/:id', atualizarCidade)
router.delete('/:id', removerCidade)

module.exports = router
