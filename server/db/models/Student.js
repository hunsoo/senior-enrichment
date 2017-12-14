const Sequelize = require('sequelize');
const db = require('../index');

const Student = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    }
  },
  gpa: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0.0,
      max: 4.0,
    }
  },
  name: {
    type: Sequelize.VIRTUAL,
    get() {
      return this.firstName + ' ' + this.lastName;
    }
  },
});

module.exports = Student;
