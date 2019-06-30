const { ApolloServer } = require('apollo-server');
const typeDefs = require('./src/typeDefs/index');
const resolvers = require('./src/resolvers/index');

const XivApi = require('./src/datasources/xivapi/xivApi');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    xivApi: new XivApi()
  })
});

server.listen().then(({ url }) => console.log(`Server running at ${url}`));
