'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Events',
      'UserId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id"
        }
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Events',
      'UserId');
  }
};
