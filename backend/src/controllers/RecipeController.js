const Recipe = require('../models/Recipe');
const service = require('../service/RecipeService');

module.exports = {
  async store(req, res) {

    // Capturando o Form do body da requisicao
    const recipeForm = req.body;

    recipe = service.store(recipeForm);

    console.log(recipe)
    // Retorna a receita
    return res.json(recipe);
  },

  async findAll(req, res) {

    let recipeParams = req.query;

    // Capturando o Form do body da requisicao
    let recipeFinded = await service.findAll(recipeParams);

    // Retorna a receita
    return res.json(recipeFinded);
  },


  async update(req, res) {

    const id = req.params.id;
    console.log(req.params, req.body)

    const updatedRecipe = req.body;

    console.log(updatedRecipe)

    // Busca no banco de dados se ja existe uma receita com os mesmo atributos
    let recipeUpdated = await service.update(id, updatedRecipe);

    // Retorna a receita
    return res.json(recipeUpdated);

  },

  async delete(req, res) {

    //Busca receita que estamos tentando excluir
    receita = new Recipe();
    //Monta Objeto para verificar se a receita marcada para excluir existe na base de dados    
    receita.id = req.params.id;
    let recipe = null;

    try {
      //Verifica se o registro existe no BD
      console.log('Buscando receita....');
      recipe = await service.findAll(receita);

      // Se existir, exclui a recceita
      if (recipe[0] != null) {
        await service.delete(req.params.id);
        console.log('Receita excluida: ' + req.params.id);
        res.status(200).send('[Sucesso] - Receita excluida com sucesso!');
      } else {
        //Se nao excluir a receita, retorna mensagem de receita nao encontrada
        res.status(200).send('[Sucesso] - Receita nao encontrada!');
      }
    } catch (err) {
      console.error("Erro ao tentar excluir receita: " + err);
      res.status(500).send(err.message);
    }

    //Retorna numero de registros excluidos
    return 'Sucesso';

  }


};
