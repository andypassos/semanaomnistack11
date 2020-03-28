const express = require('express')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

// Rota para login
routes.post('/sessions', SessionController.create)

// Rota para listar ongs
routes.get('/ongs', OngController.index)

// Rota para criar ongs
routes.post('/ongs', OngController.create)

// Rota para lista casos/incidents
routes.get('/incidents', IncidentController.index)

// Rota pra listar casos/incidents especificos
routes.get('/profile', ProfileController.index)

// Rota para criar casos/incidents
routes.post('/incidents', IncidentController.create)

// Rota para deletar casos/incidents
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes