'use strict';

module.exports = {
   up:  (queryInterface, Sequelize) => {
   return queryInterface.createTable('servicos',{ 
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true, 
      allowNull: false,
    },
    anuncio: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nome_fantasia: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cnpj: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    descricao: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    avaliacao: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    disponibilidade: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tipo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    valor: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    cidade: {
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
   return queryInterface.dropTable('servicos');
  }
};
