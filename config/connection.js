const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASS,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });

module.exports = sequelize;