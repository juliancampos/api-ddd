const model = require('../models');
module.exports = modelName => model[modelName].findAll();

