const {parse} = require('csv-parse');
const fs = require('fs')

let data = [];

fs.createReadStream('./db/books.csv', 'utf-8')
.pipe(parse({ relaxQuotes: true}))
.on('data', (csvrow) => {
    data.push({
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
    });
})
.on('end', () =>  console.log(data))

// assert.deepStrictEqual(records, [{isbn13: '9780002005883',isbn10: '0002005883',title: 'Gilead',subtitle: '',authors: 'Marilynne Robinson',categories: 'Fiction',thumbnail: 'http://books.google.com/books/content?id=KQZCPgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',description: `"A NOVEL THAT READERS and critics have been eagerly anticipating for over a decade, Gilead is an astonishingly imagined story of remarkable lives. John Ames is a preacher, the son of a preacher and the grandson (both maternal and paternal) of preachers. It’s 1956 in Gilead, Iowa, towards the end of the Reverend Ames’s life, and he is absorbed in recording his family’s story, a legacy for the young son he will never see grow up. Haunted by his grandfather’s presence, John tells of the rift between his grandfather and his father: the elder, an angry visionary who fought for the abolitionist cause, and his son, an ardent pacifist. He is troubled, too, by his prodigal namesake, Jack (John Ames) Boughton, his best friend’s lost son who returns to Gilead searching for forgiveness and redemption. Told in John Ames’s joyous, rambling voice that finds beauty, humour and truth in the smallest of life’s details, Gilead is a song of celebration and acceptance of the best and the worst the world has to offer. At its heart is a tale of the sacred bonds between fathers and sons, pitch-perfect in style and story, set to dazzle critics and readers alike."`,published_year: "2004",average_rating: '3.85',num_pages: '247',ratings_count: '361'}]);
