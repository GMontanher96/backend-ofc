const Endereco = require("../models/Endereco");
const User = require("../models/User");

module.exports = {
  async listEndereco(req, res) {
    try {
      const { user_id } = req.params;

      const user = await User.findByPk(user_id);

      if (!user) {
        throw new Error("Não existe usuário cadastrado");
      }
      const enderecos = await Endereco.findAll({ where: { user_id } });

      res.status(200).send(enderecos);
    } catch (error) {
      console.log(error);
      res.status(400).json({ ...error });
    }
  },
  async createEndereco(req, res) {
    const { user_id } = req.params;
    const { endereco, bairro, cep, cidade, estado, numero, referencia } =
      req.body;

    const user = await User.findOne(user_id);

    if (!user) {
      throw new Error("Não existe usuário cadastrado");
    }

    const enderecos = await Endereco.create({
      endereco,
      bairro,
      cep,
      cidade,
      estado,
      numero,
      referencia,
      user_id,
    });

    return res.json(enderecos);
  },


  async updateEndereco(req, res) {
    try {
      const { id } = req.params;

      const endereco = await Endereco.findByPk(id);      
      endereco.set(req.body);
      await endereco.save();

      res.status(200).send(endereco);
    } catch (error) {
      console.log(error);
      res.status(400).json({ ...error });
    }
},
  async deleteEndereco(req, res) {
    const { user_id } = req.params;
    const { id } = req.params;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: "User não existe" });
    }

    const endereco = await Endereco.findOne({ where: { id } });
    if (!endereco) {
      res.status(401).json({ message: "Endereço não encontrado " });
    } else {
      await Endereco.destroy({ where: { id } });
      res.status(200).json({ ok: true });
    }
  },
};
