const { Model, DataTypes } = require("sequelize");

class Servico extends Model {
  static init(sequelize) {
    super.init(
      {
        anuncio: DataTypes.STRING,
        nome_fantasia: DataTypes.STRING,
        cnpj: DataTypes.STRING,
        descricao: DataTypes.STRING,
        avaliacao: DataTypes.STRING,
        disponibilidade: DataTypes.STRING,
        tipo: DataTypes.STRING,
        valor: DataTypes.DECIMAL,
        cidade: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    // relacionamento entre tabelas.
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user_servico" });
  }
}

module.exports = Servico;
