const { estados } = require('./estadosController')

let cidades = [
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

function criarCidade(req, res) {
  const { nome, estado_uf } = req.body

  //  valida se o estado existe
  const estadoExiste = estados.some((e) => e.uf === estado_uf)

  if (!estadoExiste) {
    return res.status(400).json({ error: 'Estado não existe' })
  }

  const novaCidade = {
    id: cidades.length + 1,
    nome,
    estado_uf,
  }

  cidades.push(novaCidade)
  res.status(201).json(novaCidade)
}

module.exports = {
  listarCidades,
  listarCidadePorId,
  criarCidade,
}
