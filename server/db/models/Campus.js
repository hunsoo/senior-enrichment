const Sequelize = require('sequelize');
const db = require('../index');

const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'default.jpg',
  },
  description: {
    type: Sequelize.TEXT,
  }
});

module.exports = Campus;
