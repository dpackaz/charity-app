const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const { User, Charities, Drive } = require("../models");

//create resolvers
const resolvers = {
  Query: {
    users: async () => {
      return await User.find({});
    },
    charities: async () => {
      return await Charities.find({});
    },
    charity: async (_parent, args) => {
      return await Charities.findById(args.id);
    },
    drive: async () => {
      return await Drive.find({}).populate("users").populate({
        path: "users",
        populate: "charity",
      });
    },
  },
  Mutation: {
    addUser: async (_parent, { firstName, lastName, email, password }) => {
      return await User.create({ firstName, lastName, email, password });
    },
    updateUser: async (_parent, { id, email, password }) => {
      return await Drive.findOneAndUpdate(
        { _id: id },
        { email },
        { password },
        { new: true }
      );
    },
    addDrive: async (_parent, { user, charity, goal }) => {
      return await Drive.create({ user, charity, goal });
    },
    updateDrive: async (_parent, { id, charity, goal }) => {
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
