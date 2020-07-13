const model = require('../models');
module.exports = (modelName, body) => model[modelName].create(body); 