const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const session = require('express-session');
const fs = require('fs');
const passport = require('./config/passport');
const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({ helpers });

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
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
});
