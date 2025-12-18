const express = require('express')
const router = express.Router()
const {
  listarEstados,
  listarEstadoPorId,
} = require('../controllers/estadosController')

// Rota já existente
router.get('/estados', listarEstados)

// Nova rota
router.get('/estados/:id', listarEstadoPorId)

module.exports = router
