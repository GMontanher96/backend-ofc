'use strict';

module.exports = {
   up:  (queryInterface, Sequelize) => {
   return queryInterface.createTable('enderecos',{ 
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true, 
      allowNull: false,
    },
    endereco: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    bairro: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cep: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cidade: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    estado: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    numero: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: Sequelize.INTEGER,
      required: true,
      allowNull: false,
      references: { model: 'users', key: 'id'},  // chave estrangeira
      onUpdate: 'CASCADE', //ALTERACOES DE RELACIONAMENTO
      onDelete: 'CASCADE' // RESTRINGE CASO O USUÁRIO SEJA DELETADO
    },
    referencia: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    }
  });
},

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('enderecos');
  }
};
