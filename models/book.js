const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}

Book.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
        },
        isbn13: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        isbn10: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        subtitle: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        categories: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "fiction"
        },
        thumbnail: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: 'was good'
        },
        published_year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        average_rating : {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 3.2
        },
        num_pages: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rating_count: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'book'
    }
);

module.exports = Book;