const freeCompanyResolver = require('./freeCompany');
const characterResolver = require('./character');

const xivapiResolver = {
  ...freeCompanyResolver,
  ...characterResolver
};

module.exports = xivapiResolver;
