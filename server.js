const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const session = require('express-session');
const fs = require('fs');
const { Http2ServerResponse } = require('http2');

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({ helpers });
const sslRedirect = require('heroku-ssl-redirect').default

app.use(sslRedirect(['production'], 301));
app.use(session({
  secret: 'testing',
  resave: true,
  cookie: {
    secure: true,
    maxAge: 60000
  },
  saveUninitialized: true
}));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
});
