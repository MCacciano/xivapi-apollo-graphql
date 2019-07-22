const charactersReducer = ({
  Avatar,
  FeastMatches,
  ID,
  Name,
  Rank,
  RankIcon,
  Server
}) => ({
  Avatar,
  FeastMatches,
  ID,
  Name,
  Rank,
  RankIcon,
  Server
});

const characterReducer = ({
  Achievements,
  Character,
  FreeCompany,
  FreeCompanyMembers
}) => ({
  Achievements,
  Character,
  FreeCompany,
  FreeCompanyMembers
});

const freeCompaniesReducer = ({ Crest, ID, Name, Server }) => ({
  Crest,
  ID,
  Name,
  Server
});

const freeCompanyReducer = ({
  Active,
  ActiveMemberCount,
  Crest,
  Estate,
  Focus,
  Formed,
  FreeCompanyMembers,
  GrandCompany,
  ID,
  Name,
  ParseDate,
  Rank,
  Ranking,
  Recruitment,
  Reputation,
  Seeking,
  Server,
  Slogan,
  Tag
}) => ({
  Active,
  ActiveMemberCount,
  Crest,
  Estate,
  Focus,
  Formed,
  FreeCompanyMembers,
  GrandCompany,
  ID,
  Name,
  ParseDate,
  Rank,
  Ranking,
  Recruitment,
  Reputation,
  Seeking,
  Server,
  Slogan,
  Tag
});

module.exports = {
  characterReducer,
  charactersReducer,
  freeCompaniesReducer,
  freeCompanyReducer
};
