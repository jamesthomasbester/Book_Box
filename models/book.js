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
            allowNull: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        subtitle: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'book'
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'Steven King'
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
            defaultValue: 2009
        },
        average_rating : {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 3.2
        },
        num_pages: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 300
        },
        rating_count: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 326
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