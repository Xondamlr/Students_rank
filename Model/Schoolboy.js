const { Schema, model } = require("mongoose");

const pupilsSchema = new Schema({
  //name // surname // number // group // month // score
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  group: {
    type: Number,
    required: true,
  },
  month: {
    type: Number,
    required: true,
  },
  score: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = model("schoolboy", pupilsSchema);
