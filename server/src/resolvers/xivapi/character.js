module.exports = {
  characterSearch: async (_, { name, server }, { dataSources }) => {
    const results = await dataSources.xivApi.characterSearch({
      name,
      server
    });

    return results;
  },
  character: async (
    _,
    { lodestoneID, extended = false, data, responseOptions },
    { dataSources }
  ) => {
    const result = await dataSources.xivApi.character({
      lodestoneID,
      extended,
      data,
      responseOptions
    });

    return result;
  }
};
