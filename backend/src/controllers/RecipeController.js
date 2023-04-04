const Recipe = require('../models/Recipe');

module.exports = {
  async store(req, res) {
    
    // Capturando o Form do body da requisicao
    const { recipeForm } = req.body;

    // Busca no banco de dados se ja existe uma receita com os mesmo atributos
    let recipe = await Recipe.findOne({ recipeForm });

    // Se nao existir, cria uma nova receita
    if (!recipe) {
      recipe = await Recipe.create({ recipe });
    }

    // Retorna a receita
    return res.json(recipe);
  },

  async findAll(req, res) {

    let recipeParams = req.query;
    
    // Capturando o Form do body da requisicao
    let recipeFinded = await Recipe.findOne({ recipeParams });

    // Retorna a receita
    return res.json(recipeFinded);
  }
};
