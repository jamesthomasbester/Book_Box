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
            allowNull: true,
            defaultValue: 'book'
        },
        author: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'Steven King'
        },
        categories: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "fiction"
        },
        thumbnail: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: 'was good'
        },
        published_year: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 2009
        },
        average_rating : {
            type: DataTypes.FLOAT,
            allowNull: true,
            defaultValue: 3.2
        },
        num_pages: {
            type: DataTypes.INTEGER,
            allowNull: true,
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