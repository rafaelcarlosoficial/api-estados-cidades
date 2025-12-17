const estados = [
  { id: 1, nome: 'São Paulo', uf: 'SP' },
  { id: 2, nome: 'Rio de Janeiro', uf: 'RJ' },
]

function listarEstados(req, res) {
  res.json(estados)
}

module.exports = { listarEstados }
