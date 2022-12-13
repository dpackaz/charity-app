const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const { User, Charities, Drive } = require("../models");

//create resolvers
const resolvers = {
  Query: {
    users: async () => {
      return await User.find({}).populate("friends");
    },
    user: async (_parent, { userId }) => {
      return await User.findById(userId).populate("friends");
    },
    charities: async () => {
      return await Charities.find({});
    },
    charity: async (_parent, args) => {
      return await Charities.findOne({ charityID: args.id });
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
      return await (await User.create({ firstName, lastName, email, password })).populate("friends");
    },
    updateUser: async (_parent, { id, email, password }) => {
      return await User.findOneAndUpdate(
        { _id: id },
        { email: email, password: password },
        { new: true }
      ).populate("friends");
    },
    saveCharity: async (_parent, { newCharity }) => {
      return await Charities.create({ ...newCharity });
    },
    addDrive: async (_parent, { userId, charityId, goal }) => {
      let newUser = await User.findById(userId).populate("friends");
      let newCharity = await Charities.findOne({ charityID: charityId });
      return await Drive.create({ organizer: newUser, charity: newCharity, goal });
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
