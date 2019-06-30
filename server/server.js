const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./graphql/schema/index');

// sample collectiont to get setup
const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling'
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton'
  }
];

const resolvers = {
  Query: {
    books: () => books
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
const PORT = process.env.PORT || 5000;

server.listen(PORT).then(({ url }) => console.log(`Server ready at ${url}`));
