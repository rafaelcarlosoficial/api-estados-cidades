const estados = [
  { id: 1, nome: 'São Paulo', uf: 'SP' },
  { id: 2, nome: 'Rio de Janeiro', uf: 'RJ' },
]

function listarEstados(req, res) {
  res.json(estados)
}

function listarEstadoPorId(req, res) {
  const id = parseInt(req.params.id)
  const estado = estados.find((e) => e.id === id)

  if (!estado) {
    return res.status(404).json({ error: 'Estado não encontrado' })
  }

  res.json(estado)
}

module.exports = { estados, listarEstados, listarEstadoPorId }
