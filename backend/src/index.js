const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/Listar informação no back-end
 * 
 * POST: Cria informação no back-end
 * 
 * PUT: Altera informação no back-end
 * 
 * DELETE: Deleta informação no back-end
 */


/**
 * Tipos de Parâmetros:
 * 
 * Query Params: Parâmetros enviados na rota após o (?)
 * (Filtros, paginação)
 * 
 * Route Params: Parâmetros utilizados para identificar recursos
 * 
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * 
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * 
 * Query Builder: table('users).select('*').where()
 */

/**
 * Usando Knex com driver para sqlite3
 * 
 * npx knex init / para criar o knexfile.js
 */


app.listen(3333)
