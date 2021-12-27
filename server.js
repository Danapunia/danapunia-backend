require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const db = require('./src/models/model');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());

require('./src/routes/routes')(app);

db.sequelize.sync({
  force: true
}).then(result => {
  app.listen(process.env.SERVER_PORT || 3000);
  console.log('server is running on port ' + process.env.SERVER_PORT);
}).catch(err => {
  console.log(err);
});