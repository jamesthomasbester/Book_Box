const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize = new Sequelize(
    'de3q1085p47fp1',
    'fdsehoaamnwltz',
    '960887e5731f7a461c065fd23bbdd2111930b726c5a21aac2b938a1633c093c5',
{
    host: 'ec2-34-231-221-151.compute-1.amazonaws.com',
    dialect: 'postgres',
    port: 5432
}
);


module.exports = sequelize;
