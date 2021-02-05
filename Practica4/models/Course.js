const db = require('../config/database');
const modelObject = require('../modelObjects/Course');
const modelName = 'course';

module.exports = db.define(modelName, modelObject);