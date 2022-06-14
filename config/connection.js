const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize = new Sequelize(
    {
        host: 'ec2-34-231-221-151.compute-1.amazonaws.com',
        dialect: 'postgres',
        username: 'fdsehoaamnwltz',
        password: '960887e5731f7a461c065fd23bbdd2111930b726c5a21aac2b938a1633c093c5',
        database: 'de3q1085p47fp1',
        port: 5432,
        dialectOptions:{
            ssl: {
                rejectUnauthorized: false
            }
        }
    });
    sequelize.authenticate().then(() => console.log('connection was established')).catch(err => console.log('unable to connect with error:'. err))

module.exports = sequelize;