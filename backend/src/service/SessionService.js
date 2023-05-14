
const User = require('../models/User');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {

  async store(body) {

    // Capturando o Form do body da requisicao
    const email = body.email;

    // Busca no banco de dados se ja existe um usuario com o mesmo email
    let repeatedUser = await User.findOne({ email });

    // Se nao existir, cria um novo usuario
    if (repeatedUser) {
      throw new Error("Email already exists");
    }

    // Realiza a encriptação da senha
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(body.password, salt);

    const user = new User({
      name: body.name,
      email: body.email,
      password: hashPassword,
    });


    // Tenta salvar o usuario no banco de dados
    try {
      const savedUser = await user.save();
      return savedUser;
    } catch (err) {
      throw err;
    }
  },

  async update(body) {

    console.log(body)
    // Capturando o Form do body da requisicao
    const email = body.email;


    // Realiza a encriptação da senha
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(body.password, salt);

    const user = new User({
      id: body.id,
      name: body.name,
      email: body.email,
      password: hashPassword,
    });

    // Tenta salvar o usuario no banco de dados
    try {
      const updatedUser = await User.updateOne({id: user.id}, {$set: user}, { returnOriginal: false });
      return updatedUser;
    } catch (err) {
      throw err;
    }
  },

  async delete(email) {
    try {
      await User.deleteOne({email: email});
      console.log("1 document deleted");
      return email;
    } catch (err) {
      throw err;
    }
  },

  async login(body) {

    const email = body.email;

    let validateEmail = await User.findOne({ email });

    if (!validateEmail) {
      throw new Error("Email or password is wrong");
    }

    const validPass = await bcrypt.compare(body.password, validateEmail.password);

    if (!validPass) {
      throw new Error("Email or password is wrong");
    }

    const token = jwt.sign({ _id: validateEmail._id }, "BNm7R0P7j0");

    const userData = {
      userInfo: validateEmail,
      userToken: token
    }

    return userData;
  },

};
