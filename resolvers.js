const resolvers = {
  Query: {
    viewer: () => ({
      id: "1",
      firstName: "Anatoliy",
      lastName: "Gatt"
    })
  }
};

module.exports = resolvers;
