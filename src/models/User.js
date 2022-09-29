const { Model, DataTypes } = require("sequelize")

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING
        }, {
            sequelize
        })
    }

    static associate(models) {
        // relacionamento entre tabelas.
        this.hasMany(models.Endereco, { foreignKey: "user_id", as: "enderecos" }); // usuarios tem muitos endereços
        this.hasMany(models.Contato, { foreignKey: "user_id", as: "contatos" }); // usuarios tem muitos contatos
        this.hasMany(models.Servico, { foreignKey: "user_id", as: "servicos" }); // usuarios tem muitos servicos

      }
}


module.exports = User