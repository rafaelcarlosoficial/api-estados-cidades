const express = require('express')
const router = express.Router()
const { listarEstados } = require('../controllers/estadosController')

router.get('/estados', listarEstados)

module.exports = router
