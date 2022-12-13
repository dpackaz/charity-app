const { Schema, model, Types } = require("mongoose");

const {Charities, User} = require('./index');

const newDrive = new Schema(
  {
    driveID: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    organizer: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    charity: {
      type: Schema.Types.ObjectId,
      ref: "Charities",
    },
    goal: {
        type: Number,
        required: true,
      },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

const Drive = model("Drive", newDrive);

module.exports = Drive;
