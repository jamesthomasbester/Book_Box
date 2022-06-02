const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true
        },
        comment_text: {
            type: DataTypes.TEXT('long'),
            allowNull: false,
            len: [1]
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        bookd_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
            model: 'book',
            key: 'id'
        }
    }
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
}
);

module.exports = Comment;