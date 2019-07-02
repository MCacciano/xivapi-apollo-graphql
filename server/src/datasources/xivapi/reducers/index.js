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

const characterReducer = character => {
  const { Avatar, FeastMatches, ID, Name, Rank, RankIcon, Server } = character;

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

// TODO: This can also produce a character's FC as well as the members of that FC
// TODO: Decide whether to add that into this type since there are already ways to acces that data directly
const characterDetailReducer = response => {
  // const {
  //   // ActiveClassJob,
  //   Avatar,
  //   Bio,
  //   // ClassJobs,
  //   FreeCompanyId,
  //   // GearSet,
  //   Gender,
  //   GenderID,
  //   // GrandCompany,
  //   // GuardianDeity,
  //   ID,
  //   // Minions,
  //   MinionsCount,
  //   MinionsProgress,
  //   MinionsTotal,
  //   // Mounts,
  //   MountsCount,
  //   MountsProgress,
  //   MountsTotal,
  //   Name,
  //   Nameday,
  //   ParseDate,
  //   Portrait,
  //   // PvPTeamId,
  //   // Race,
  //   Server
  //   // Title,
  //   // Town,
  //   // Tribe
  // } = character;

  const {
    Achievements,
    Character,
    FreeCompany,
    FreeCompanyMembers
    // # Friends
    // # Info
    // # PVPTeam
  } = response;

  const { List } = Achievements;

  console.log('chz', Achievements);
  return {
    Achievements,
    Character,
    FreeCompany,
    FreeCompanyMembers
    // # Friends
    // # Info
    // # PVPTeam
  };
};

module.exports = {
  freeCompanyReducer,
  characterReducer,
  characterDetailReducer
};
