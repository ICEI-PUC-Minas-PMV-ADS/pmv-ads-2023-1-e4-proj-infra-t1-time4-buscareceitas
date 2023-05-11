const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const RecipeController = require('./controllers/RecipeController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();
const upload = multer(uploadConfig);

// Endpoint de Criacao de Receita
routes.post('/api/v1/recipe', RecipeController.store);

routes.put('/api/v1/recipe/:id', RecipeController.update);

routes.get('/api/v1/recipe', RecipeController.findAll);

routes.delete('/api/v1/recipe/:id', RecipeController.delete);

routes.post('/api/v1/sessions', SessionController.store);

routes.post('/api/v1/sessions/login', SessionController.login);

module.exports = routes;
