const modelObject = require('../modelObjects/Course');
const tableName = 'courses';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(tableName, modelObject);
  },
  down: (queryInterface, Sequelize) => {
    try {
      return queryInterface.dropTable(tableName);
    } catch (err) {
      console.log(err);
    }
  }
}