# API de Estados e Cidades do Brasil
<a href="https://documenter.getpostman.com/view/47396454/2sBXVhBqBc" target="_blank">
  📄 Documentação completa (Postman)
</a>


Esta é uma **API REST simples** desenvolvida em **Node.js** com **Express**, que permite gerenciar **Estados** e **Cidades** do Brasil.  
O projeto atualmente possui **CRUD completo para cidades** e endpoints para listar estados. Futuramente, será conectada a um banco de dados MySQL.

---

## Tecnologias utilizadas

- Node.js
- Express
- MySQL (planejado para integração em breve)
- JavaScript (ES6+)

---

## Estrutura do projeto


---

## Endpoints da API

### Estados

| Método | Endpoint         | Descrição                        |
|--------|----------------|----------------------------------|
| GET    | `/estados`       | Lista todos os estados           |
| GET    | `/estados/:id`   | Busca um estado pelo ID          |

### Cidades

| Método | Endpoint          | Descrição                                |
|--------|-----------------|------------------------------------------|
| GET    | `/cidades`       | Lista todas as cidades                   |
| GET    | `/cidades/:id`   | Busca uma cidade pelo ID                 |
| POST   | `/cidades`       | Cria uma nova cidade                     |
| PUT    | `/cidades/:id`   | Atualiza uma cidade existente            |
| DELETE | `/cidades/:id`   | Remove uma cidade                         |

**Observações:**
- Ao criar ou atualizar uma cidade, é necessário informar `nome` e `estado_uf`.
- O campo `estado_uf` deve existir previamente na lista de estados.

---

## Regras de negócio

- Cada cidade deve estar vinculada a um estado (`estado_uf`).
- Não é permitido criar cidades com nomes vazios ou com estados inexistentes.
- IDs são gerados automaticamente.

---

## Como rodar o projeto

1. Clone o repositório:  
   ```bash
   git clone https://github.com/rafaelcarlosoficial/api-estados-cidades
   cd api-estados-cidades
