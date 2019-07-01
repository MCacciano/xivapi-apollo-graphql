const xivapiResolver = require('./xivapi/index');

const rootResolver = {
  Query: {
    root: String,
    ...xivapiResolver
  },
  Mutation: {
    root: String
  }
};

module.exports = rootResolver;
