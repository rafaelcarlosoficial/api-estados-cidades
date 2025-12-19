const express = require('express')
const router = express.Router()

const {
  listarEstados,
  listarEstadoPorId,
} = require('../controllers/estadosController')

router.get('/', listarEstados)
router.get('/:id', listarEstadoPorId)

module.exports = router
