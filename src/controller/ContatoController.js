const Contato = require("../models/Contato");
const User = require("../models/User");

module.exports = {

  async listContato (req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: { association: 'contatos' }
    });

    return res.json(user);
  },
  async createContato(req, res) {
    const { user_id } = req.params;
    const { telefone, celular } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: "User não existe" });
    }

    const contatos = await Contato.create({
      telefone,
      celular,
      user_id
    });

    return res.json(contatos);
  },
  async deleteContato(req, res) {
    const { user_id } = req.params;
    const { id } = req.params

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: "User não existe" });
    }

    const contato = await Contato.findOne({ where: { id }})
    if (!contato) {
        res.status(401).json({ message: 'Contato não encontrado '})
    } else {
         await Contato.destroy({ where: { id } })
        res.status(200).json({ ok: true });
    }
  }
};
