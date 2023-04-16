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

routes.post('/api/v1/sessions', SessionController.store);

routes.delete('/api/v1/recipe', RecipeController.delete);

module.exports = routes;
