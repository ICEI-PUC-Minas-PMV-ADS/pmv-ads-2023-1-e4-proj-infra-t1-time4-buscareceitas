const repository = require('../repository/RecipeRepository');


module.exports = {

    async findAll(params) {
        return await repository.findAll(params);
    },

    async update(id, recipe) {
        return await repository.update(id, recipe);
    },

    async delete(id) {
        return await repository.delete(id);
    }

};
