// const { estados } = require('./estadosController')

const db = require('../database/connection')

async function listarCidades(req, res) {
  try {
    const [rows] = await db.query('SELECT * FROM cidades')
    res.json(rows)
  } catch {
    res.status(500).json({ error: 'Erro ao buscar estados' })
    console.log(error)
  }
}

async function listarCidadePorId(req, res) {
  const id = parseInt(req.params.id)
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Id inválido' })
  }

  try {
    const [rows] = await db.query('SELECT * FROM cidades WHERE id = ?', [id])
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Cidade não encontrada' })
    }

    res.json(rows[0])
  } catch {
    res.status(500).json({ error: 'Erro ao buscar cidades' })
    console.log(error)
  }
}

async function criarCidade(req, res) {
  const { nome, estado_uf } = req.body

  try {
    // validar
    if (nome !== undefined && nome.trim() === '') {
      return res.status(400).json({ error: 'Nome inválido' })
    }
    if (!estado_uf || estado_uf.length !== 2) {
      return res.status(400).json({ error: 'Unidade Federal inválida' })
    }

    if (!nome || !estado_uf) {
      return res
        .status(400)
        .json({ error: 'Nome e estado_uf são obrigatórios' })
    }

    const [estados] = await db.query('SELECT * FROM estados WHERE uf = ?', [
      estado_uf,
    ])

    if (estados.length === 0) {
      return res.status(400).json({ error: 'Estado não existe' })
    }

    const [cidades] = await db.query(
      'SELECT * FROM cidades WHERE nome = ? AND estado_uf = ?',
      [nome, estado_uf]
    )

    if (cidades.length > 0) {
      return res
        .status(409)
        .json({ error: 'Cidade já cadastrada nesse estado' })
    }
    //inserir cidade
    const [result] = await db.query(
      'INSERT INTO cidades (nome, estado_uf) VALUES (?, ?)',
      [nome, estado_uf]
    )

    res.status(201).json({
      id: result.insertId,
      nome,
      estado_uf,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao criar cidade' })
  }
}

async function atualizarCidade(req, res) {
  const id = parseInt(req.params.id)
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Id inválido' })
  }
  const { nome, estado_uf } = req.body

  try {
    const [cidade] = await db.query('SELECT * FROM cidades WHERE id = ?', [id])

    if (nome !== undefined && nome.trim() === '') {
      return res.status(400).json({ error: 'Nome inválido' })
    }
    if (!estado_uf || estado_uf.length !== 2) {
      return res.status(400).json({ error: 'Unidade Federal inválida' })
    }
    if (cidade.length === 0) {
      return res.status(404).json({ error: 'Cidade não encontrada' })
    }

    if (nome !== undefined && nome.trim() === '') {
      return res.status(400).json({ error: 'Nome inválido' })
    }

    if (estado_uf) {
      const [estadoExiste] = await db.query(
        'SELECT * FROM estados WHERE uf = ?',
        [estado_uf]
      )

      if (estadoExiste.length === 0) {
        return res.status(400).json({ error: 'Estado não existe' })
      }
    }

    await db.query('UPDATE cidades SET nome = ?, estado_uf = ? WHERE id = ?', [
      nome ?? cidade[0].nome,
      estado_uf ?? cidade[0].estado_uf,
      id,
    ])

    res.json({ message: 'Cidade atualizada com sucesso' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao atualizar cidade' })
  }
}

async function removerCidade(req, res) {
  const id = parseInt(req.params.id)

  try {
    const [cidadeExiste] = await db.query(
      'SELECT * FROM cidades WHERE id = ?',
      [id]
    )
    if (cidadeExiste.length === 0) {
      return res.status(404).json({ error: 'Cidade não encontrada' })
    }
    await db.query('DELETE FROM cidades WHERE id = ?', [id])

    return res.status(204).send()
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao remover cidade' })
  }
}
module.exports = {
  listarCidades,
  listarCidadePorId,
  criarCidade,
  atualizarCidade,
  removerCidade,
}
