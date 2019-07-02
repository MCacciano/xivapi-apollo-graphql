const { gql } = require('apollo-server');
const { FreeCompany, FreeCompanyMember } = require('./freeCompany');

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

  type CharacterResponseType {
    Achievements: CharacterAchievements
    Character: Character
    FreeCompany: FreeCompany
    FreeCompanyMembers: [FreeCompanyMember]
    # Friends: {}
    # Info: {}
    # PVPTeam: {}
  }

  enum CharacterResponseOptions {
    Achievements
    Character
    FreeCompany
    FreeCompanyMembers
    # Friends
    # Info
    # PVPTeam
  }

  type CharacterAchievement {
    Date: Int
    ID: Int
    Icon: String
    Name: String
    Points: Int
  }

  type CharacterAchievements {
    List: [CharacterAchievement]
    ParseDate: Int
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

  enum ExtendedDataOptions {
    AC
    FR
    FC
    FCM
    PVP
  }

  input CharacterInput {
    lodestoneID: String!
    extended: Boolean
    AC: Boolean
    FR: Boolean
    FC: Boolean
    FCM: Boolean
    PVP: Boolean
  }

  extend type Query {
    characterSearch(name: String!, server: String): [CharacterSearch!]!
    character(
      lodestoneID: String!
      extended: Boolean
      data: [ExtendedDataOptions]
      responseOptions: [CharacterResponseOptions]
    ): CharacterResponseType
  }
`;

module.exports = characterType;
