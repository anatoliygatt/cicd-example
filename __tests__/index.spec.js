const { ApolloServer } = require("apollo-server-express");
const { createTestClient } = require("apollo-server-testing");
const typeDefs = require("../typeDefs");
const resolvers = require("../resolvers");

describe("queries", () => {
  let server;

  beforeAll(() => {
    server = new ApolloServer({
      typeDefs,
      resolvers
    });
  });

  it("should return viewer details", async () => {
    const { query } = createTestClient(server);
    const res = await query({
      query: `
        query {
          viewer {
            id
            firstName
            lastName
          }
        }
      `
    });
    expect(res.data).toMatchSnapshot();
  });
});
