const User = require("../models/User");

module.exports = {

 
  async createUser(req, res) {
    try {
      const { name, email, password } = req.body;

      const user = await User.findOne({ where: { email } });

      if (user) {
        res
          .status(401)
          .json({ message: "JÁ EXISTE UM USUÁRIO COM ESTE EMAIL" });
      } else {
        const user = await User.create({ name, email, password });

        res.status(200).json({ user });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { name, email, password } = req.body;

      const user = await User.findOne({ where: { id } });

      if (!user) {
        res.status(401).json({ message: "NENHUM USUÁRIO ENCONTRADO" });
      } else {
        const user = await User.update(
          { name, email, password },
          { where: { id } }
        );

        res.status(200).json({ user });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async listUsers(req, res) {
    try {
      const users = await User.findAll();

      if (!users) {
        res.status(200).json({ message: "Não existe usuário cadastrado" });
      }
      res.status(200).json({ users });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async deleteUsers(req, res) {
    const { id } = req.params

    const user = await User.findOne({ where: { id }})
    if (!user) {
        res.status(401).json({ message: 'Usuário não encontrado '})
    } else {
         await User.destroy({ where: { id } })
        res.status(200).json({ ok: true });
    }
  }
};
