const { model } = require("mongoose");
const quizModel = require("../models/quiz.model");

class service {
  async getItems() {
    const data = await quizModel.find().exec();
    return data;
  }

  async getItemById(payload) {
    const { id } = payload;
    const data = await quizModel.findOne({ _id: id }).exec();
    console.log("data", data);
    return data;
  }

  //this block to post data to our collection
  async insertItem(payload) {
    const request = new quizModel(payload);
    const data = await request.save();
    return data;
  }
  //here is the query to find user by id and update data
  async updateItem(payload) {
    const { id } = payload; //object destructuring
    const data = await quizModel.findByIdAndUpdate(id, payload, {
      returnOriginal: false,
    });
    return data;
  }
  //here we are deleting the user document by id
  async deleteItemById(payload) {
    const { id } = payload; //object destructuring
    const data = await quizModel.deleteOne({ _id: id }); //in mongodb our document is _id, but in front end it is id
    return data.deletedCount || null;
  }
}

module.exports = new service();
