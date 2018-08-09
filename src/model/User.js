import Sequelize from 'sequelize';
import MySQL from '../db/MySQL';

const User = MySQL.define('user', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notNull: true,
      isEmail: true
    }
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: true
    }
  },
  salt: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: true
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: true
    }
  },
  birthday: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      is: /([1-9]|1[0-2])-([3][0-1]|[1-2][0-9]|[1-9])/,
    }
  }
});


export default User;
