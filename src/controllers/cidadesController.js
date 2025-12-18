const cidades = [
  { id: 1, nome: 'Campinas', estado_uf: 'SP' },
  { id: 2, nome: 'Rio de Janeiro', estado_uf: 'RJ' },
]

function listarCidades(req, res) {
  res.json(cidades)
}

function listarCidadePorId(req, res) {
  const id = parseInt(req.params.id)
  const cidade = cidades.find((c) => c.id === id)

  if (!cidade) {
    return res.status(404).json({ error: 'Cidade não encontrada' })
  }

  res.json(cidade)
}

module.exports = { listarCidades, listarCidadePorId }
