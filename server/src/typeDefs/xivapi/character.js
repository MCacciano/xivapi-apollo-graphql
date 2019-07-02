const { gql } = require('apollo-server');

// All character types mirror their API/response fields

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

  type Character {
    ActiveClassJob: null
    Avatar: String
    Bio: String
    ClassJobs: null
    FreeCompanyId: String
    GearSet: null
    Gender: Number
    GenderID: Number
    GrandCompany: null
    GuardianDeity: null
    ID: Number
    Minions: null
    MinionsCount: Number
    MinionsProgress: String
    MinionsTotal: Number
    Mounts: null
    MountsCount: Number
    MountsProgress: String
    MountsTotal: Number
    Name: String
    Nameday: String
    ParseDate: Number
    Portrait: String
    PvPTeamId: null
    Race: null
    Server: String
    Title: null
    Town: null
    Tribe: null
  }

  # type Character {
  #   ActiveClassJob: ActiveClassJob
  #   Avatar: String
  #   Bio: String
  #   # ClassJobs: {}
  #   FreeCompanyId: String
  #   # GearSet: {}
  #   Gender: Int
  #   # GrandCompany: {}
  #   GuardianDeity: Int
  #   ID: Int
  #   # Minions: []
  #   # Mounts: []
  #   Name: String
  #   Nameday: String
  #   ParseDate: Int
  #   Portrait: String
  #   PvPTeamId: String
  #   Race: Int
  #   Server: String
  #   Title: Int
  #   Town: Int
  #   Tribe: Int
  # }

  # type ActiveClassJob {
  #   ClassID: Int
  #   ExpLevel: Int
  #   ExpLevelMax: Int
  #   ExpLevelTogo: Int
  #   IsSpecialised: Boolean
  #   JobID: Int
  #   Level: Int
  # }

  # type ClassJobs {

  # }

  # type GearSet {

  # }

  # type GrandCompany {

  # }

  # type Minion {

  # }

  # type Mount {

  # }

  extend type Query {
    characterSearch(name: String!, server: String): [CharacterSearch!]!
    character(lodestoneID: String!): Character
  }
`;

module.exports = characterType;
