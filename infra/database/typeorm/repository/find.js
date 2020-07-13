const { getConnection } = require('typeorm');

module.exports = (entity) => getConnection().manager.find(entity);