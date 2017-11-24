'use strict';

const admin = require('firebase-admin');
const express = require('express');

/** begin configuration for localhost */
const serviceAccount = require("./entel-demo-peru-firebase-adminsdk-xutf4-a77199134c.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://entel-demo-peru.firebaseio.com"
});

const exp = express();
const app = express.Router();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/** end configuration for localhost */

/** add routes */
require('./routes')(app);

/** deploy localhost */
exp.use('/', app);
exp.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});