const sequelize = require('../config/connection');
const Book = require('../models/book.js');
const bookData = require('./books.json');

const seedDB = async () => {
    await sequelize.sync({ force: true });
    
    await Book.bulkCreate(bookData, {individualHooks: true, returning: true});
}

seedDB();