const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}

Book.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true
        },
        subtitle: {
            type: DataTypes.STRING,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        categories: {
            type: DataTypes.STRING,
            allowNull: false
        },
        thumbnail: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isURL: true
            }
        },
        description: {
            type: DataTypes.TEXT('long'),
            allowNull: false
        },
        published_year: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        average_rating: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        num_pages: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rating_count: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'book'
    }
);

module.exports = Book;

