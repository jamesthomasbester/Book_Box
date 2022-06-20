const {parse} = require('csv-parse');
const fs = require('fs')

let data = [];



fs.createReadStream('./db/books.csv', 'utf-8')
.pipe(parse({ relaxQuotes: true}))
.on('data', (csvrow) => {
    data.push(
        {
            isbn13: csvrow[0],
            isbn10: csvrow[1],
            title: csvrow[2],
            subtitle: csvrow[3],
            author: csvrow[4],
            categories: csvrow[5],
            thumbnail: csvrow[6],
            description: csvrow[7],
            published_year: csvrow[8],
            average_rating: csvrow[9],
            num_pages: csvrow[10],
            rating_count: csvrow[11],
            price: Math.floor(Math.random() * (29.99 - 10.99 + 1) + 10.99)
        });
})
.on('end', () =>  {
    fs.writeFileSync('books.json', JSON.stringify(data))
    console.log(data);
})

