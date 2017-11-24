'use strict';

const admin = require('firebase-admin');
const express = require('express');

/** begin configuration for cloud */
const functions = require('firebase-functions');
admin.initializeApp(functions.config().firebase);

var app = express();
/** end configuration for cloud */

/** add routes */
require('./routes')(app);

/** deploy firebase */
exports.api = functions.https.onRequest(app);