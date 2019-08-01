const mongoose = require("mongoose");
const { User } = require("../models");
const { user } = require("./data");
const shortId = require("shortid");

const setupDatabase = async () => {
  await mongoose.connect("mongodb://localhost:27017", {
    dbName: `cicd-example-test-${shortId.generate()}`,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  });
  await clearDatabase();
  await populateDatabase();
};

const clearDatabase = async () => {
  await User.deleteMany({});
};

const populateDatabase = async () => {
  await User.create(user);
};

const teardownDatabase = async () => {
  await clearDatabase();
  await mongoose.connection.db.dropDatabase();
  await mongoose.disconnect();
};

module.exports = {
  setupDatabase,
  teardownDatabase
};
