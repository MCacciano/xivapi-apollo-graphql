const { gql } = require('apollo-server');

const characterType = gql`
  type Characters {
    Avatar: String
    FeastMatches: Int
    ID: Int
    Name: String
    Rank: String
    RankIcon: String
    Server: String
  }

  type CharacterResponse {
    Achievements: AchievementsResponse
    Character: Character
    FreeCompany: FreeCompany
    FreeCompanyMembers: [FreeCompanyMember]
  }

  type AchievementsResponse {
    List: [Achievement]
  }

  type Achievement {
    Date: Int
    ID: Int
    Icon: String
    Name: String
    Points: Int
  }

  type Character {
    # ActiveClassJob: null
    Avatar: String
    Bio: String
    # ClassJobs: null
    FreeCompanyId: String
    FreeCompanyMembers: [FreeCompanyMember]
    # GearSet: null
    Gender: Int
    GenderID: Int
    # GrandCompany: null
    # GuardianDeity: null
    ID: Int
    # Minions: null
    MinionsCount: Int
    MinionsProgress: String
    MinionsTotal: Int
    # Mounts: null
    MountsCount: Int
    MountsProgress: String
    MountsTotal: Int
    Name: String
    Nameday: String
    ParseDate: Int
    Portrait: String
    # PvPTeamId: null
    # Race: null
    Server: String
    # Title: null
    # Town: null
    # Tribe: null
  }

  extend type Query {
    characters(name: String!, server: String, page: Int): [Characters]
    character(id: String!): CharacterResponse
  }
`;

module.exports = characterType;
