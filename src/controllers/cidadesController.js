const { estados } = require('./estadosController')

let cidades = [
  { id: 1, nome: 'Campinas', estado_uf: 'SP' },
  { id: 2, nome: 'Rio de Janeiro', estado_uf: 'RJ' },
  { id: 3, nome: 'Belo Horizonte', estado_uf: 'MG' },
  { id: 4, nome: 'Curitiba', estado_uf: 'PR' },
  { id: 5, nome: 'Porto Alegre', estado_uf: 'RS' },
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
  // console.log(nome)

  if (!nome || !estado_uf) {
    return res.status(400).json({ error: 'Nome e estado_uf são obrigatórios' })
  }

  const cidadeExiste = cidades.some((e) => {
    return (
      e.nome.toLowerCase() === nome.toLowerCase() &&
      e.estado_uf.toLowerCase() === estado_uf.toLowerCase()
    )
  })

  console.log(cidadeExiste)
  if (cidadeExiste) {
    return res.status(409).json({ error: 'Estado e cidades já cadastrado' })
  }

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

function atualizarCidade(req, res) {
  const id = parseInt(req.params.id)
  const { nome, estado_uf } = req.body

  const cidade = cidades.find((c) => c.id === id)

  if (!cidade) {
    return res.status(404).json({ error: 'Cidade não encontrada' })
  }

  if (nome !== undefined && nome.trim() === '') {
    return res.status(400).json({ error: 'Nome inválido' })
  }

  if (estado_uf) {
    const estadoExiste = estados.some((e) => e.uf === estado_uf)
    if (!estadoExiste) {
      return res.status(400).json({ error: 'Estado não existe' })
    }
  }

  if (nome) cidade.nome = nome
  if (estado_uf) cidade.estado_uf = estado_uf

  res.json(cidade)
}

function removerCidade(req, res) {
  const id = parseInt(req.params.id)
  const index = cidades.findIndex((c) => c.id === id)

  if (index === -1) {
    return res.status(404).json({ error: 'Cidade não encontrada' })
  }

  cidades.splice(index, 1)
  res.status(204).send()
}

module.exports = {
  listarCidades,
  listarCidadePorId,
  criarCidade,
  atualizarCidade,
  removerCidade,
}
