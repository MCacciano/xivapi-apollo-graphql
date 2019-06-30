const { gql } = require('apollo-server');

const characterType = gql`
  type CharacterSearch {
    Avatar: String
    ID: Int
    Name: String
    Rank: String
    RankIcon: String
    Server: String
    LFR: Boolean
  }

  extend type Query {
    characterSearch(name: String!, server: String): [CharacterSearch!]!
  }
`;

module.exports = characterType;
