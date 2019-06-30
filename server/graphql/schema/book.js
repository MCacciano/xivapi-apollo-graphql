const { gql } = require('apollo-server');

export const typeDef = gql`
  type Book {
    title: String
    author: String
  }
`;
