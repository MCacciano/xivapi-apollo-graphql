const root = require('./root');

const xivapiSchemas = require('./xivapi/index');

const schemaArray = [root, ...xivapiSchemas];

module.exports = schemaArray;
