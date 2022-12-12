
const { Schema, Types, model } = require("mongoose");

const newCharities = new Schema(
  {
    charityID: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    username: {
      type: String,
      required: true,
    },
    mission: {
      type: String,
      required: true,
    },
    address: {
      type: Number,
      required: true,
    },
    website_Url: {
      type: String,
      required: true,
    },
    pledge_Url: {
      type: String,
      required: true,
    },
    logo_Url: {
        type: String,
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

const Charities = model("Charities", newCharities);

module.exports = Charities;
