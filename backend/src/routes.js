const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const RecipeController = require('./controllers/RecipeController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();
const upload = multer(uploadConfig);

// Endpoint de Criacao de Receita
routes.post('/api/v1/recipe', RecipeController.store);
routes.get('/api/v1/recipe', RecipeController.findAll);

routes.post('/api/v1/sessions', SessionController.store);

module.exports = routes;
