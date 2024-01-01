const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const optionsModel = new Schema({
  option: { type: String, required: true },
  iscorrect: { type: Boolean, required: true },
});
const questionModel = new Schema({
  question: { type: String, required: true },
  options: [optionsModel],
});
const quizModel = new Schema({
  name: { type: String, required: true },
  questions: [questionModel],
});

module.exports = mongoose.model("quiz", quizModel);
//quiz {name, questions[{title, options[{option, iscorrect}]}], };
