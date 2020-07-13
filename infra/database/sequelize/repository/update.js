const model = require('../models');

module.exports = (modelName, body, condition) => model[modelName].update(body, {
    where: condition
})