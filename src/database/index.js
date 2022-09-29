const Sequelize = require("sequelize");
const configDB = require("../config/database");

const User = require("../models/User");
const Servico = require("../models/Servico");
const Endereco = require("../models/Endereco");
const Contato = require("../models/Contato");

const connection = new Sequelize(configDB);

User.init(connection);
Servico.init(connection);
Endereco.init(connection);
Contato.init(connection);

Endereco.associate(connection.models);
Contato.associate(connection.models);
User.associate(connection.models);
Servico.associate(connection.models);

module.exports = connection;
