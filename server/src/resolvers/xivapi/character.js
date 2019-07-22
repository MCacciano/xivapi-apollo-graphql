module.exports = {
  characters: async (_, { name, server, page }, { dataSources }) => {
    return await dataSources.xivApi.characters({ name, server, page });
  },
  character: async (_, { id }, { dataSources }) => {
    return await dataSources.xivApi.character({ id });
  }
};
