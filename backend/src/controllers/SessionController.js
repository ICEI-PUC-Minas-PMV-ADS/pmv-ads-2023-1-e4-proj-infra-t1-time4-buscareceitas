const User = require('../models/User');

module.exports = {

  async store(req, res) {
    // Capturando o Form do body da requisicao
    const { email } = req.body;

    // Busca no banco de dados se ja existe um usuario com o mesmo email
    let user = await User.findOne({ email });

    // Se nao existir, cria um novo usuario
    if (!user) {
      user = await User.create({ email });
    }
    
    return res.json(user);
  }
};
