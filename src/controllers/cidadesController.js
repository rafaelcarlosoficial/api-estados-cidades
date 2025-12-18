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

function criarCidade(req, res) {
  const { nome, estado_uf } = req.body

  if (!nome || !estado_uf) {
    return res.status(400).json({ error: 'nome e estado_uf são obrigatórios' })
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
