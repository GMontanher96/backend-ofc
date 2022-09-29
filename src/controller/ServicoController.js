const Servico = require("../models/Servico");
const User = require("../models/User");

module.exports = {
  async listServico(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: { association: "servicos" },
    });

    return res.json(user);
  },

  async createServico(req, res) {
    try {
      const { user_id } = req.params;
      const {
        anuncio,
        nome_fantasia,
        cnpj,
        descricao,
        avaliacao,
        disponibilidade,
        tipo,
        valor,
      } = req.body;

      const servico = await Servico.findOne({ where: { anuncio } });

      const user = await User.findByPk(user_id);

      if (!user) {
        return res.status(400).json({ error: "User não existe" });
      }

      if (servico) {
        res.status(401).json({ message: "JÁ EXISTE UM SERVIÇO COM ESTE NOME" });
      } else {
        const servico = await Servico.create({
          anuncio,
          nome_fantasia,
          cnpj,
          descricao,
          avaliacao,
          disponibilidade,
          tipo,
          valor,
          user_id,
        });
        res.status(200).json({ servico });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async deleteServico(req, res) {
    const { user_id } = req.params;
    const { id } = req.params

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: "User não existe" });
    }

    const servico = await Servico.findOne({ where: { id }})
    if (!servico) {
        res.status(401).json({ message: 'Serviço não encontrado '})
    } else {
         await Servico.destroy({ where: { id } })
        res.status(200).json({ ok: true });
    }
  }
};
