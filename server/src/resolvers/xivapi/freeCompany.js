module.exports = {
  freeCompanies: async (_, { name, server }, { dataSources }) => {
    const res = await dataSources.xivApi.freeCompanies({
      name,
      server
    });
    return res;
  },
  freeCompany: async (_, { id }, { dataSources }) => {
    const res = await dataSources.xivApi.freeCompany({ id });
    return res;
  }
};
