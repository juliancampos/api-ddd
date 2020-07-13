const { getConnection } = require('typeorm');

module.exports = (entity, object) => getConnection().manager.create(entity, object);