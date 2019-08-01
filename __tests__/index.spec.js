const { ApolloServer } = require("apollo-server-express");
const { createTestClient } = require("apollo-server-testing");
const typeDefs = require("../typeDefs");
const resolvers = require("../resolvers");
const { User } = require("../models");
const { setupDatabase, teardownDatabase } = require("../testing/helpers");

describe("queries", () => {
  beforeEach(async () => {
    await setupDatabase();
  });

  it("should return viewer details", async () => {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: () => ({
        models: { User }
      })
    });
    const { query } = createTestClient(server);
    const res = await query({
      query: `
        query {
          viewer(id: "5c0e3aad39c4c3481c0b8743") {
            id
            firstName
            lastName
          }
        }
      `
    });
    expect(res.data).toMatchSnapshot();
  });

  afterEach(async () => {
    await teardownDatabase();
  });
});
