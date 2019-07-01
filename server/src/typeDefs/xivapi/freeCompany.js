const { gql } = require('apollo-server');

const freeCompanyType = gql`
  type FreeCompanySearchResult {
    Crest: [String]
    ID: String
    Name: String
    Server: String
  }

  # type FreeCompany {
  #   Active: String
  #   Crest: [String]
  #   Estate: Estate
  #   ID: String
  #   Name: String
  #   FreeCompanyMembers: [FreeCompanyMember!]!
  # }

  type FreeCompany {
    Active: String
    ActiveMemberCount: Int
    Crest: [String]
    Estate: Estate
    Focus: [Focus]
    Formed: Int
    FreeCompanyMembers: [FreeCompanyMember!]!
    GrandCompany: String
    ID: String
    Name: String
    ParseDate: Int
    Rank: Int
    Ranking: Ranking
    Recruitment: String
    Reputation: [Reputation]
    Seeking: [Seeking]
    Server: String
    Slogan: String
    Tag: String
  }

  type FreeCompanyMember {
    Avatar: String
    ID: Int
    Name: String
    Rank: String
    RankIcon: String
    Server: String
  }

  type Estate {
    Greeting: String
    Name: String
    Plot: String
  }

  type Focus {
    Icon: String
    Name: String
    Status: Boolean
  }

  type Ranking {
    Monthly: String
    Weekly: String
  }

  type Reputation {
    Name: String
    Progress: Int
    Rank: String
  }

  type Seeking {
    Icon: String
    Name: String
    Status: Boolean
  }

  extend type Query {
    freeCompany(lodestoneID: String!, getMembers: Boolean): FreeCompany
    freeCompanies(name: String!, server: String): [FreeCompanySearchResult!]!
    members(name: String!, server: String!): [FreeCompanyMember!]!
  }
`;

module.exports = freeCompanyType;
