const { Model, DataTypes } = require("sequelize");

class Contato extends Model {
  static init(sequelize) {
    super.init(
      {
        telefone: DataTypes.STRING,
        celular: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    // relacionamento entre tabelas.
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user_contato" });
  }
}

module.exports = Contato;
