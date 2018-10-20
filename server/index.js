const { ApolloServer, gql } = require('apollo-server');

const booksMock = [
  {
    id: 1,
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    id: 2,
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const typeDefs = gql`
  type Book {
    id: ID!,
    title: String!
    author: String!
  }

  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => booksMock,
  },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});