const User = require('./User');
const Book = require('./Book');
const Favourite = require('./Favourite');
const Cart = require('./Cart');

User.hasMany(Book, {
    foreignKey: 'user_id'
});
Book.belongsTo(User, {
    foreignKey: 'user_id'
});
Favourite.belongsTo(User, {
    foreignKey: 'user_id'
});
Cart.belongsTo(Book, {
    foreignKey: 'book_id'
});
User.hasMany(Favourite, {
    foreignKey: 'user_id' 
});
Book.hasMany(Cart, {
    foreignKey: 'book_id'
});

module.exports = { User, Book, Favourite, Cart };

