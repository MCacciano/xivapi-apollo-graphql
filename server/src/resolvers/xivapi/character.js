module.exports = {
  characterSearch: async (_, { name, server }, { dataSources }) => {
    const results = await dataSources.xivApi.characterSearch({
      name,
      server
    });

    return results;
  },
  character: async (_, { lodestoneID }, { dataSources }) => {
    const result = await dataSources.xivApi.character({ lodestoneID });

    console.log(result);
    return result;
  }
};
