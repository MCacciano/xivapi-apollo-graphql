const freeCompanyReducer = (
  freeCompany,
  options = { search: false, getMembers: false }
) => {
  if (options.search) {
    const { Crest, ID, Name, Server } = freeCompany;

    return {
      Crest,
      ID,
      Name,
      Server
    };
  }

  const {
    Active,
    ActiveMemberCount,
    Crest,
    Estate,
    Focus,
    Formed,
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
  } = freeCompany;
  const { Greeting, Name: estateName, Plot } = Estate;

  return {
    Active,
    ActiveMemberCount,
    Crest,
    Estate: {
      Greeting,
      Name: estateName,
      Plot
    },
    Focus: [...freeCompany.Focus],
    Formed,
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
    Tag,
    FreeCompanyMembers: options.getMembers
      ? [...freeCompany.FreeCompanyMembers]
      : []
  };
};

const memberReducer = member => {
  let { Avatar, FeastMatches, ID, Name, Rank, RankIcon, Server } = member;

  return {
    Avatar,
    FeastMatches,
    ID,
    Name,
    Rank,
    RankIcon,
    Server
  };
};

module.exports = {
  freeCompanyReducer,
  memberReducer
};
