'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Auctions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      details: {
        type: Sequelize.TEXT
      },
      reserve_price: {
        type: Sequelize.INTEGER
      },
      current_price: {
        type: Sequelize.INTEGER
      },
      end_date: {
        type: Sequelize.DATE
      },
      state: {
        type: Sequelize.STRING
      },
      watch: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Auctions');
  }
};
