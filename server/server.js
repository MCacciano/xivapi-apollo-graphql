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

const PORT = process.env.PORT || 5000;

server.listen(PORT).then(({ url }) => console.log(`Server running at ${url}`));
