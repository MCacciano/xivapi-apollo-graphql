const root = require('./root');
const freeCompany = require('./xivapi/freeCompany');
const character = require('./xivapi/character');

const schemaArray = [root, freeCompany, character];

module.exports = schemaArray;
