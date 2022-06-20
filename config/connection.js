const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize = new Sequelize(
    {
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASS,
        database: process.env.DATABASE_NAME,
        host: '120.88.146.119',
        dialect: 'mysql',
        port: 3306,
    });

module.exports = sequelize;