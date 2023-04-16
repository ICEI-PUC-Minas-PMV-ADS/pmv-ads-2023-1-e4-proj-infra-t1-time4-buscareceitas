const mongoose = require('mongoose');

// Modelo de dados para uma receita
const RecipeSchema = new mongoose.Schema({

  id: String,
  titulo: String,
  tempoPreparo: String,
  rendimento: String,
  ingredientes: String,
  modoPreparo: String,
  categoria: String,
  informacoesAdicionais: String,
  usuarioNome: String,
  usuarioEmail: String
});

module.exports = mongoose.model('Recipe', RecipeSchema);