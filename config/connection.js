const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize = new Sequelize(
    {
        host: 'ec2-34-231-221-151.compute-1.amazonaws.com',
        dialect: 'postgres',
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: 5432,
        dialectOptions:{
            ssl: {
                rejectUnauthorized: false
            }
        }
    });
    sequelize.authenticate().then(() => console.log('connection was established')).catch(err => console.log('unable to connect with error:'. err))

module.exports = sequelize;