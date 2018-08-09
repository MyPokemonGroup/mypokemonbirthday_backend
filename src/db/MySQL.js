import Sequelize from 'sequelize';
import {} from 'dotenv/config';

const MySQL = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DIALECT
  }
);

export default MySQL;
