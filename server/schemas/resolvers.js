const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

//TODO: create resolvers
const resolvers = {
  Query: {
    users: async () => {
      return await User.find({});
    },
    charities: async () => {
      return await Charity.find({});
    },
    charity: async (args) => {
      return await Charity.findById(args.id);
    },
    drive: async () => {
      return await Drive.find({}).populate("users").populate({
        path: "users",
        populate: "charity",
      });
    },
  },
  Mutation: {
    addUser: async ({ name, email, password }) => {
      return await User.create({ name, email, password });
    },
    addDrive: async ({ user, charity, goal }) => {
      return await Drive.create({ user, charity, goal });
    },
    updateDrive: async (parent, { id, charity, goal }) => {
      return await Drive.findOneAndUpdate(
        { _id: id },
        { charity },
        { goal },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
