module.exports = {
  characterSearch: async (_, { name, server }, { dataSources }) => {
    const results = await dataSources.xivApi.characterSearch({
      name,
      server
    });

    return results;
  }
};
