const User = require('.');
const Favourite = require('.');
const Cart = require('.');
const Book = require('.');

User.hasMany(Favourite, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Favourite.belongsTo(User, {
    foreignKey: 'user_id'
  });

module.exports = { User , Favourite , Cart , Book};