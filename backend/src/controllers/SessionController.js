const User = require('../models/User');
const bcrypt = require("bcryptjs");
const Joi = require("@hapi/joi");
const service = require('../service/SessionService');
module.exports = {

  async store(req, res) {

    // Validação do Schema
    const registerSchema = Joi.object({
      name: Joi.string().min(2).required(),
      email: Joi.string().min(2).required().email(),
      password: Joi.string().min(3).required(),
    });

    const body = req.body;
    const {error} = registerSchema.validate(body);


    if(error){
      return res.status(400).send(error.details[0].message);
    }

    try {
      return res.status(202).send(await service.store(body));
    }catch(err){
      return res.status(400).send(err.message);
    }
    
  },

  async login(req, res) {

    const loginSchema = Joi.object({
      email: Joi.string().min(6).required().email(),
      password: Joi.string().min(6).required(),
    });


    const body = req.body;
    const {error} = loginSchema.validate(body);


    if(error){
      return res.status(400).send(error.details[0].message);
    }

    try {
      return res.status(200).send(await service.login(body));
    }catch(err){
      return res.status(400).send(err.message);
    }
  }
  
};
