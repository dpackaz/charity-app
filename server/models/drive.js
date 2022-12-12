const { Schema, model, Types } = require("mongoose");

const newDrive = new Schema(
  {
    driveID: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    username: {
      type: String,
      required: true,
    },
    charity: {
      type: String,
      required: true,
    },
    goalAmount: {
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
