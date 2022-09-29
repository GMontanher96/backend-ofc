'use strict';

module.exports = {
   up:  (queryInterface, Sequelize) => {
   return queryInterface.createTable('contatos',{ 
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true, 
      allowNull: false,
    },
    telefone: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    celular: {
      type: Sequelize.STRING,
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
   return queryInterface.dropTable('contatos');
  }
};
