'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    const stringAttribute = {
      type: Sequelize.STRING,
      allowNull: false,
    };

    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: stringAttribute,
      lastName: stringAttribute,
      password: stringAttribute,
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      accessToken: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  },
};
