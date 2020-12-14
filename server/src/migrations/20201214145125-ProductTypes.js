'use strict';

const {PHONE, TABLET, NOTEBOOK} = require("../constants/constants");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ProductTypes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      productType: {
        type: Sequelize.ENUM(PHONE, TABLET, NOTEBOOK),
        allowNull: false,
      },
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ProductTypes');
  },
};
