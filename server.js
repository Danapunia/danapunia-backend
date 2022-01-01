require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const path = require('path');
const db = require('./models/model');
const flash = require('express-flash');
const session = require('express-session');


const app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use(session({
  secret: 'keyboard cat',
}));
app.use(flash());


app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'cms/views'));
app.set('view engine', 'ejs');


app.get('/', (req, res, next) => {
  res.redirect('/cms');
});


app.use((req, res, next) => {
  if (req.path.split('/')[1] == 'api') {
    require('./restapi/routes/routes')(app);
  } else {
    require('./cms/routes/routes')(app);
  }
  next();
});


db.sequelize.sync().then(result => {
  const port = process.env.SERVER_PORT || 3000;
  app.listen(port);
  console.log('server is running on port ' + port);
}).catch(err => {
  console.log(err);
});