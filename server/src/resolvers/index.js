module.exports = {
  Query: {
    freeCompanies: async (_, { name, server }, { dataSources }) => {
      const freeCompanies = await dataSources.xivApi.searchForFreeCompany({
        name,
        server
      });
      return freeCompanies;
    },
    freeCompany: async (_, { lodestoneID, getMembers }, { dataSources }) => {
      const freeCompany = await dataSources.xivApi.getFreeCompanyById({
        lodestoneID,
        getMembers
      });
      console.log(freeCompany);
      return freeCompany;
    },
    members: async (_, { name, server }, { dataSources }) => {
      const members = await dataSources.xivApi.getFreeCompanyMembers({
        name,
        server
      });

      return members;
    }
  }
};
