const { Model, DataTypes } = require("sequelize");

class Endereco extends Model {
  static init(sequelize) {
    super.init(
      {
        endereco: DataTypes.STRING,
        bairro: DataTypes.STRING,
        cep: DataTypes.STRING,
        cidade: DataTypes.STRING,
        estado: DataTypes.STRING,
        numero: DataTypes.INTEGER,
        referencia: DataTypes.STRING,
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

module.exports = Endereco;
