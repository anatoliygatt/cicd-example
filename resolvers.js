const resolvers = {
  Query: {
    viewer: async (_, { id }, { models }) => {
      const viewer = await models.User.findById(id);
      return viewer;
    }
  }
};

module.exports = resolvers;
