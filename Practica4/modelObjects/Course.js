const Sequelize = require('sequelize');
const enums = require('../enums/enums');

module.exports = {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.TEXT
  },
  teacher: {
    type: Sequelize.TEXT
  },
  platziLink: {
    type: Sequelize.TEXT
  },
  developmentArea: {
    type: Sequelize.ENUM,
    values: enums.developmentAreas
  },
  programmingLanguage: {
    type: Sequelize.ENUM,
    values: enums.programmingLanguages
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false
  }
}