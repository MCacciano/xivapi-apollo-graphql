const { gql } = require('apollo-server');

const { typeDef: Book } = require('./book');

module.exports = typeDefs = gql`
  type Query {
    books: [Book]
  }
`;
