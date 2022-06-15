const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const cors = require('cors');
const { Http2ServerResponse } = require('http2');
const { triggerAsyncId } = require('async_hooks');

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({ helpers: {
  'ifnoteq': function (a, b, options) {
    if (a != b) { return options.fn(this); }
    return options.inverse(this);
  },
  'ifeq': function (a, b, options) {
    if (a == b) { return options.fn(this); }
    return options.inverse(this);
  }
}});
// const sslRedirect = require('heroku-ssl-redirect').default
app.use(session({
  secret: 'testing',
  cookie: {},
  resave: false,
  maxAge: 60000,
  saveUninitialized: true,
  store: new SequelizeStore({
      db: sequelize
  })
}))
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);


sequelize.sync({ force: false }).then(() => {
  app.listen(process.env.PORT || 3000, () => console.log(`app running`));
});
