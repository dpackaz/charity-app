const { Schema, Types, model } = require("mongoose");

const newCharities = new Schema(
  {
    charityID: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    mission: {
      type: String,
      required: true,
    },
    address: {
      type: String,
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
    causes: [{
      type:String
    },]
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
